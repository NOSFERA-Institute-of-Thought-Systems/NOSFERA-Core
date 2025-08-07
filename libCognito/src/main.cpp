#include <emscripten/bind.h>
#include "libcognito/libcognito.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(my_module) {
    function("get_version", &get_version);
}