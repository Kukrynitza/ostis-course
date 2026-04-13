# -*- coding: utf-8 -*-

import json
import logging
import tornado.auth
import tornado.options
import tornado.web
import tornado.gen

from sc_client import client
from sc_client.constants import sc_type
from sc_client.models import ScTemplate, ScConstruction, ScLinkContent, ScLinkContentType, ScAddr
from sc_client.sc_keynodes import ScKeynodes

from . import base
import db
import decorators

from keynodes import KeynodeSysIdentifiers

from . import api_logic as logic
import auth_service

logger = logging.getLogger()


class RegisterHandler(base.BaseHandler):
    def post(self):
        # BYPASS MODE: Skip DB and SC-KB
        self.write({
            'id': 1,
            'login': 'dev_user',
            'email': 'dev@example.com',
            'role': 'super',
            'avatar': None,
            'sc_addr': 12345,
            'is_admin': 1,
            'can_edit': 1
        })
        self.finish()


class LoginHandler(base.BaseHandler):
    def post(self):
        # BYPASS MODE: Skip DB and SC-KB
        self.write({
            'id': 1,
            'login': 'dev_user',
            'email': 'dev@example.com',
            'role': 'super',
            'avatar': None,
            'sc_addr': 12345,
            'is_admin': 1,
            'can_edit': 1
        })
        self.finish()

    def get(self):
        # BYPASS MODE
        self.write({
            'id': 1,
            'login': 'dev_user',
            'email': 'dev@example.com',
            'role': 'super',
            'avatar': None,
            'sc_addr': 12345,
            'is_admin': 1,
            'can_edit': 1
        })
        self.finish()


class MeHandler(base.BaseHandler):
    def get(self):
        # BYPASS MODE
        self.write({
            'id': 1,
            'login': 'dev_user',
            'email': 'dev@example.com',
            'role': 'super',
            'avatar': None,
            'sc_addr': 12345,
            'is_admin': 1,
            'can_edit': 1
        })
        self.finish()


class LogOutHandler(base.BaseHandler):
    def get(self):
        key = self.get_secure_cookie(self.cookie_user_key)
        if key:
            key = key.decode('UTF-8')
            database = db.DataBase()
            u = database.get_user_by_key(key)
            if u:
                auth_svc = auth_service.AuthService()
                auth_svc.logout_user_from_kb(u.email)

        logger.info('Clearing cookies...')
        self.clear_cookie(self.cookie_user_key)
        self.redirect('/')


@decorators.class_logging
class GoogleOAuth2LoginHandler(base.BaseHandler, tornado.auth.GoogleOAuth2Mixin):
    _keynodes = ScKeynodes()

    def _loggedin(self, user):
        logger.info('User logs in via Google...')

        email = user['email']
        user_name = user['name']
        if len(email) == 0:
            logger.warning('User email is not set')
            return

        database = db.DataBase()
        u = database.get_user_by_email(email)

        key = None
        if u:
            key = database.create_user_key()
            u.key = key
            logger.info(f'User key: {key}')
            database.update_user(u)
        else:
            logger.warning('User is not found by email')
            role = 0
            supers = tornado.options.options.super_emails
            if supers and (email in supers):
                logger.debug('Email is super email')
                r = database.get_role_by_name('super')
                if r:
                    role = r.id

            logger.debug('Add user in database...')
            
            auth_svc = auth_service.AuthService()
            user_node = auth_svc.register_user(email, user_name)
            sc_addr = user_node.value if user_node and user_node.is_valid() else 0
            
            key = database.add_user(
                name=user_name, email=email, avatar=user['picture'], role=role, sc_addr=sc_addr)

        self.set_secure_cookie(self.cookie_user_key, key, 7)

        auth_svc = auth_service.AuthService()
        auth_svc.register_user(email, user_name)
        auth_svc.authorise_user_in_kb_by_email(email)

    @tornado.gen.coroutine
    def get(self):
        self.settings[self._OAUTH_SETTINGS_KEY]['key'] = tornado.options.options.google_client_id
        self.settings[self._OAUTH_SETTINGS_KEY]['secret'] = tornado.options.options.google_client_secret

        logger.debug(f'Request URI: {self.request.uri}')

        uri = f'http://{tornado.options.options.host}:{str(tornado.options.options.auth_redirect_port)}/auth/google'
        logger.debug(f'URI: {uri}')

        if self.get_argument('code', False):
            user = yield self.get_authenticated_user(
                redirect_uri=uri,
                code=self.get_argument('code'))

            if not user:
                self.clear_all_cookies()
                raise tornado.web.HTTPError(500, 'Google authentication failed')

            access_token = str(user['access_token'])
            http_client = self.get_auth_http_client()
            response = yield http_client.fetch(
                'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + access_token)

            if not response:
                self.clear_all_cookies()
                raise tornado.web.HTTPError(500, 'Google authentication failed')
            user = json.loads(response.body)

            self._loggedin(user)

            self.redirect('/')

        else:
            yield self.authorize_redirect(
                redirect_uri=uri,
                client_id=self.settings['google_oauth']['key'],
                scope=['profile', 'email'],
                response_type='code',
                extra_params={'approval_prompt': 'auto'})