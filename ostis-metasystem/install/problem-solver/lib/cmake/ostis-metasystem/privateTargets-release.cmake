#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "identifiers-module" for configuration "Release"
set_property(TARGET identifiers-module APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(identifiers-module PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/extensions/libidentifiers-module.so"
  IMPORTED_SONAME_RELEASE "libidentifiers-module.so"
  )

list(APPEND _cmake_import_check_targets identifiers-module )
list(APPEND _cmake_import_check_files_for_identifiers-module "${_IMPORT_PREFIX}/lib/extensions/libidentifiers-module.so" )

# Import target "sections-module" for configuration "Release"
set_property(TARGET sections-module APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sections-module PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/extensions/libsections-module.so"
  IMPORTED_SONAME_RELEASE "libsections-module.so"
  )

list(APPEND _cmake_import_check_targets sections-module )
list(APPEND _cmake_import_check_files_for_sections-module "${_IMPORT_PREFIX}/lib/extensions/libsections-module.so" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
