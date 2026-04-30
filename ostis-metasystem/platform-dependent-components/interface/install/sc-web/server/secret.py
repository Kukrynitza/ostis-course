# -*- coding: utf-8 -*-

import base64
import logging
import os
import uuid

logger = logging.getLogger()

_SECRET_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "secret.txt")
_SECRET_KEY = None


def get_secret():
    global _SECRET_KEY
    if _SECRET_KEY is not None:
        return _SECRET_KEY

    try:
        with open(_SECRET_FILE, "rb") as f:
            raw = f.read().strip()
        if raw:
            try:
                _SECRET_KEY = raw.decode("utf-8")
            except UnicodeDecodeError:
                _SECRET_KEY = raw.decode("ascii", errors="replace")
            return _SECRET_KEY
    except OSError as e:
        logger.debug("secret file unreadable (%s): %s", _SECRET_FILE, e)

    key_bytes = base64.urlsafe_b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes)
    _SECRET_KEY = key_bytes.decode("ascii")

    try:
        with open(_SECRET_FILE, "w", encoding="utf-8") as f:
            f.write(_SECRET_KEY)
    except OSError as e:
        logger.warning("could not write %s (using in-memory secret): %s", _SECRET_FILE, e)

    return _SECRET_KEY
