# Technical Documentation: User Registration & KB Synchronization (OSTIS SC-Web)

This document serves as a comprehensive technical guide for AI agents and developers maintaining the User Authorization and Synchronization system in the OSTIS SC-Web project.

## 1. System Architecture Overview
The system uses a hybrid storage approach:
- **SQLite (`data.db`)**: Stores "technical" data (hashes, keys, roles, and the `sc_addr` mapping).
- **SC-Machine KB (`kb.bin`)**: Stores "semantic" data (user profiles, hierarchy, and system statuses).

### Key Components
- `server/auth_service.py`: The core logic for KB interactions.
- `server/db.py`: Database access layer.
- `server/handlers/auth.py`: API endpoints for registration and login.
- `server/app.py`: Orchestrates startup and synchronization.
- `server/keynodes.py`: Enum of system identifiers (e.g., `ui_user`, `nrel_email`).

---

## 2. Critical Implementation Details (Hard-Learned Lessons)

### ⚠️ Keynode Resolution
**DO NOT** use `ScKeynodes.resolve_identifiers()` for bulk resolution during initialization. It is unstable in some environments and can cause `not iterable` errors.
**USE** lazy resolution via index access:
`self._keynodes[KeynodeSysIdentifiers.some_node.value, sc_type.CONST_NODE_CLASS]`

### ⚠️ Template Searching
**DO NOT** use string-based templates (e.g., `"{?user} -> nrel_email -> link"`). These can cause `ParseError` in the `sc-machine` core.
**USE** `ScTemplate` objects:
```python
template = ScTemplate()
template.quintuple(
    (sc_type.VAR_NODE, "user_node"),
    sc_type.VAR_COMMON_ARC,
    email_link,
    sc_type.VAR_PERM_POS_ARC,
    self._keynodes[KeynodeSysIdentifiers.nrel_email.value]
)
```

### ⚠️ Type Safety
- Always use `.value` when passing `KeynodeSysIdentifiers` or `ScLinkContentType` to `sc-client` functions.
- Ensure `ScAddr` objects are handled correctly. If you have an integer address, wrap it: `ScAddr(address)`. If it's already an `ScAddr` object, do not wrap it again.

---

## 3. Core Workflows

### 3.1 User Registration
**Flow**: `RegisterHandler` $\rightarrow$ `AuthService.register_user` $\rightarrow$ `DataBase.add_user`.
1. **KB Creation**:
   - Create a node of class `ui_user`.
   - Link a system identifier (email prefix) via `nrel_system_identifier`.
   - Link a main identifier (username) via `nrel_main_idtf`.
   - Link the email address via `nrel_email`.
2. **Registration Status**: Create a link from the system node `Myself` to the user node via `nrel_registered_user`.
3. **DB Storage**: Store the resulting `sc_addr` in the SQLite `user` table.

### 3.2 Startup Synchronization (`sync_users_from_db`)
This ensures that the KB is always consistent with the SQLite database.
1. **Root Resolution**: Resolve the `users_root` node (defined in `.scs`).
2. **Existence Check**: For every user in SQLite, search the KB for a node linked to their email.
3. **Lazy Creation**: If not found, call `create_kb_user` and `mark_user_registered`.
4. **Hierarchy Link**: Link the user node to `users_root` via `nrel_decomposition`.
5. **Idempotency**: Always check if the link exists before creating it to avoid duplicate edges in the KB.

### 3.3 Authorization & Logout
- **Authorization**: Create a link `Myself` $\xrightarrow{nrel\_authorised\_user}$ `UserNode`.
- **Logout**: Delete the arc between `Myself` and the user node via `nrel_authorised_user`.

### 3.4 User Deletion
- Remove the record from SQLite.
- Call `AuthService.unregister_user` to delete the `nrel_registered_user` link from `Myself` in the KB.

---

## 4. Operational Maintenance

### Regenerating the Knowledge Base
If duplication occurs or system nodes (like `users_root`) are missing, the `kb.bin` must be rebuilt:
1. **Clear and Build**:
   `LD_LIBRARY_PATH=./install/sc-machine/lib ./install/sc-machine/bin/sc-builder -i repo.path -o kb.bin/ --clear`
2. **Initialize**: Run `components init` and `components install sc_web` in the `sc-machine` console.
3. **Sync**: Restart the Python server to trigger `sync_users_from_db`.

### Debugging Tips
- If `InvalidParams` occurs: Check if any `ScAddr` being passed is `0` or `None`. This usually means a keynode resolution failed.
- If `ParseError` occurs: Check if any `ScTemplate` is using strings instead of objects.
- If duplicates appear: Check if `get_user_sc_addr` is returning `0` for existing users.
