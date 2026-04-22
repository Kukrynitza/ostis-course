# -*- coding: utf-8 -*-
import logging
from sc_client import client
from sc_client.constants import sc_type
from sc_client.models import ScAddr, ScConstruction, ScLinkContent, ScLinkContentType
from sc_client.sc_keynodes import ScKeynodes
from keynodes import KeynodeSysIdentifiers
from sc_client.models import ScIdtfResolveParams

logger = logging.getLogger()

class AuthService:
    USERS_ROOT_NODE_IDTF = "users_root"

    def __init__(self):
        self._keynodes = ScKeynodes()
        logger.info("AuthService initialized with lazy keynode resolution.")

    def get_user_sc_addr(self, email: str) -> int:
        """Get the sc_addr of a user by their email."""
        logger.debug(f'Get user sc_addr by email: {email}')
        try:
            # Search for a link with the email content
            links = client.search_links_by_contents(email)
            if not links:
                return 0
            
            # The link is the first element of the first match
            email_link = links[0][0]
            
            # Find the node that is connected to this email link via nrel_email
            # Template: {?user_node} -> nrel_email -> {email_link}
            template = f"{{?user_node}} -> {KeynodeSysIdentifiers.nrel_email.value} -> {email_link}"
            res = client.search_by_template(template)
            
            if res and len(res) > 0:
                return res[0][0].value
        except Exception as e:
            logger.error(f"Error getting user sc_addr by email {email}: {e}")
            
        return 0

    def create_kb_user(self, email: str, username: str) -> ScAddr:
        logger.debug('Creating ui user node at kb ...')
        
        # Resolve keynodes with explicit types
        try:
            kn_ui_user = self._keynodes[KeynodeSysIdentifiers.ui_user.value, sc_type.CONST_NODE_CLASS]
            kn_sys_idtf = self._keynodes[KeynodeSysIdentifiers.nrel_system_identifier.value, sc_type.CONST_NODE_NON_ROLE]
            kn_main_idtf = self._keynodes[KeynodeSysIdentifiers.nrel_main_idtf.value, sc_type.CONST_NODE_NON_ROLE]
            kn_lang_ru = self._keynodes[KeynodeSysIdentifiers.lang_ru.value, sc_type.CONST_NODE_CLASS]
            kn_email = self._keynodes[KeynodeSysIdentifiers.nrel_email.value, sc_type.CONST_NODE_NON_ROLE]
        except Exception as e:
            logger.error(f"Error during keynode resolution: {e}")
            # Fallback to basic access
            kn_ui_user = self._keynodes[KeynodeSysIdentifiers.ui_user.value]
            kn_sys_idtf = self._keynodes[KeynodeSysIdentifiers.nrel_system_identifier.value]
            kn_main_idtf = self._keynodes[KeynodeSysIdentifiers.nrel_main_idtf.value]
            kn_lang_ru = self._keynodes[KeynodeSysIdentifiers.lang_ru.value]
            kn_email = self._keynodes[KeynodeSysIdentifiers.nrel_email.value]

        construction = ScConstruction()
        
        # 1. Create node and assign class ui_user
        construction.generate_node(sc_type.CONST_NODE, 'user_node')
        construction.generate_connector(sc_type.CONST_PERM_POS_ARC, kn_ui_user, 'user_node')
        
        # 2. System identifier
        sys_idtf = email.split('@')[0]
        construction.generate_link(sc_type.CONST_NODE_LINK, ScLinkContent(sys_idtf, ScLinkContentType.STRING.value), 'sys_idtf_link')
        construction.generate_connector(sc_type.CONST_COMMON_ARC, 'user_node', 'sys_idtf_link', 'bin_arc_sys_idtf')
        construction.generate_connector(sc_type.CONST_PERM_POS_ARC, kn_sys_idtf, 'bin_arc_sys_idtf')
        
        # 3. Main identifier
        construction.generate_link(sc_type.CONST_NODE_LINK, ScLinkContent(username, ScLinkContentType.STRING.value), 'main_idtf_link')
        construction.generate_connector(sc_type.CONST_COMMON_ARC, 'user_node', 'main_idtf_link', 'bin_arc_main_idtf')
        construction.generate_connector(sc_type.CONST_PERM_POS_ARC, kn_main_idtf, 'bin_arc_main_idtf')
        construction.generate_connector(sc_type.CONST_PERM_POS_ARC, kn_lang_ru, 'main_idtf_link')
        
        # 4. Email link
        construction.generate_link(sc_type.CONST_NODE_LINK, ScLinkContent(email, ScLinkContentType.STRING.value), 'email_link')
        construction.generate_connector(sc_type.CONST_COMMON_ARC, 'user_node', 'email_link', 'bin_arc_email')
        construction.generate_connector(sc_type.CONST_PERM_POS_ARC, kn_email, 'bin_arc_email')
        
        result = client.generate_elements(construction)
        return result[construction.get_index('user_node')]

    def mark_user_registered(self, user_node: ScAddr) -> None:
        logger.debug('Mark user as registered in kb')
        construction = ScConstruction()
        construction.generate_connector(
            sc_type.VAR_COMMON_ARC,
            self._keynodes[KeynodeSysIdentifiers.Myself.value, sc_type.CONST_NODE],
            user_node,
            'bin_arc_registered'
        )
        construction.generate_connector(
            sc_type.CONST_PERM_POS_ARC,
            self._keynodes[KeynodeSysIdentifiers.nrel_registered_user.value, sc_type.CONST_NODE_NON_ROLE],
            'bin_arc_registered'
        )
        client.generate_elements(construction)

    def authorise_user_in_kb(self, user_node: ScAddr) -> None:
        logger.debug('Authorise user in kb')
        construction = ScConstruction()
        construction.generate_connector(
            sc_type.VAR_COMMON_ARC,
            self._keynodes[KeynodeSysIdentifiers.Myself.value, sc_type.CONST_NODE],
            user_node,
            'bin_arc_authorised'
        )
        construction.generate_connector(
            sc_type.CONST_PERM_POS_ARC,
            self._keynodes[KeynodeSysIdentifiers.nrel_authorised_user.value, sc_type.CONST_NODE_NON_ROLE],
            'bin_arc_authorised'
        )
        client.generate_elements(construction)

    def authorise_user_in_kb_by_email(self, email: str) -> None:
        user_addr = self.get_user_sc_addr(email)
        if user_addr != 0:
            self.authorise_user_in_kb(ScAddr(user_addr))
        else:
            logger.error(f"User with email {email} not found in KB for authorisation")

    def unregister_user(self, email: str) -> None:
        logger.debug(f'Unregister user {email} from kb')
        user_addr = self.get_user_sc_addr(email)
        if user_addr == 0:
            logger.warning(f'User {email} not found in KB, nothing to unregister')
            return
        
        try:
            client.delete_arc(
                self._keynodes[KeynodeSysIdentifiers.Myself.value], 
                self._keynodes[KeynodeSysIdentifiers.nrel_registered_user.value], 
                ScAddr(user_addr)
            )
            logger.info(f'User {email} unregistered from KB')
        except Exception as e:
            logger.error(f'Failed to unregister user {email} from KB: {e}')

    def sync_users_from_db(self, users):
        logger.info(f'Starting sync of {len(users)} users from DB to KB...')
        try:
            res = client.resolve_keynodes(ScIdtfResolveParams(idtf=self.USERS_ROOT_NODE_IDTF, type=None))
            if not res or not res[0].is_valid():
                logger.error('Could not resolve users_root node. Did you run sc-builder?')
                return
            root_node = res[0]
        except Exception as e:
            logger.error(f'Error resolving users_root: {e}')
            return
        
        for user in users:
            email = user.email
            username = user.login
            user_addr = self.get_user_sc_addr(email)
            
            if user_addr == 0:
                logger.info(f'User {username} ({email}) not found in KB, creating...')
                try:
                    user_addr_obj = self.create_kb_user(email, username)
                    user_addr = user_addr_obj.value
                    self.mark_user_registered(user_addr_obj)
                    logger.info(f'Successfully created user node for {username}.')
                except Exception as e:
                    logger.error(f'Failed to create KB user for {username}: {e}')
                    continue
            
            try:
                construction = ScConstruction()
                addr_obj = ScAddr(user_addr) if isinstance(user_addr, int) else user_addr
                construction.generate_connector(sc_type.CONST_COMMON_ARC, root_node, addr_obj, 'user_link')
                construction.generate_connector(
                    sc_type.CONST_PERM_POS_ARC, 
                    self._keynodes[KeynodeSysIdentifiers.nrel_decomposition.value], 
                    'user_link'
                )
                client.generate_elements(construction)
                logger.debug(f'Linked user {username} to root section.')
            except Exception as e:
                logger.error(f'Failed to link user {username} to root section: {e}')
        
        logger.info('User synchronization complete.')

    def logout_user_from_kb(self, email: str) -> None:
        user_addr = self.get_user_sc_addr(email)
        if user_addr != 0:
            try:
                client.delete_arc(
                    self._keynodes[KeynodeSysIdentifiers.Myself.value],
                    self._keynodes[KeynodeSysIdentifiers.nrel_authorised_user.value],
                    ScAddr(user_addr)
                )
                logger.info(f"User {email} logged out from KB")
            except Exception as e:
                logger.error(f"Failed to logout user {email} from KB: {e}")
