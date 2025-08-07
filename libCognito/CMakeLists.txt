cmake_minimum_required(VERSION 3.10)
project(libCognito CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Define the target as an EXECUTABLE, not a library.
# This is the key change. List all source files here.
add_executable(cognito_target
   src/libcognito.cpp
   src/main.cpp
)

# Tell the target where to find its header files.
target_include_directories(cognito_target PUBLIC include)

# Configure the output for Emscripten.
if(EMSCRIPTEN)
    # Apply linker options to the executable target.
    target_link_options(cognito_target PRIVATE
        "-sMODULARIZE=1"
        "-sEXPORTED_RUNTIME_METHODS=['cwrap','ccall']"
        "-sWASM=1"
        "--bind"
    )
     # Set the final output filenames to be "libcognito.js" etc.
    set_target_properties(cognito_target PROPERTIES
        OUTPUT_NAME "libcognito"
        SUFFIX ".js"
    )
endif()