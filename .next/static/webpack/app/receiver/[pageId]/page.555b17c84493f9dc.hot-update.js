"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/receiver/[pageId]/page",{

/***/ "(app-pages-browser)/./src/app/receiver/[pageId]/page.js":
/*!*******************************************!*\
  !*** ./src/app/receiver/[pageId]/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page(param) {\n    let { params } = param;\n    _s();\n    const [gyroData, setGyroData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: null,\n        y: null,\n        z: null,\n        id: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(params);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/idList\").then((response)=>{\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/idList\", {\n                \"id\": params.pageId\n            });\n        });\n        const refreshData = setInterval(()=>{\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/gyroData\", {\n                params: {\n                    id: params.pageId\n                }\n            }).then((response)=>{\n                setGyroData(response.data);\n            }).catch((error)=>{\n                console.log(error);\n            });\n        }, 500);\n        return ()=>clearInterval(refreshData);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Data\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"X : \",\n                    gyroData.x\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Y : \",\n                    gyroData.y\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Z : \",\n                    gyroData.z\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"ID: \",\n                    gyroData.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\teaml\\\\OneDrive\\\\Documentos\\\\tensor\\\\sit\\\\giroscopio\\\\src\\\\app\\\\receiver\\\\[pageId]\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(page, \"wBZu4LwIPxXqvCORNhQe8G6lWQ4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVjZWl2ZXIvW3BhZ2VJZF0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3pCO0FBRzFCLFNBQVNJLEtBQUssS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUVWLE1BQU0sQ0FBRUMsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDTSxHQUFJO1FBQU1DLEdBQUk7UUFBTUMsR0FBSTtRQUFNQyxJQUFLO0lBQUk7SUFFbEZWLGdEQUFTQSxDQUFDO1FBRU5XLFFBQVFDLEdBQUcsQ0FBQ1I7UUFFWkYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxlQUFlQyxJQUFJLENBQUMsQ0FBQ0M7WUFFbkJiLDZDQUFLQSxDQUFDYyxJQUFJLENBQUMsZUFBZTtnQkFDdEIsTUFBT1osT0FBT2EsTUFBTTtZQUN0QjtRQUVOO1FBR1IsTUFBTUMsY0FBY0MsWUFBWTtZQUU1QmpCLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsaUJBQWlCO2dCQUN2QlQsUUFBUztvQkFDTE0sSUFBS04sT0FBT2EsTUFBTTtnQkFDdEI7WUFDSixHQUNDSCxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0hULFlBQVlTLFNBQVNLLElBQUk7WUFFN0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO2dCQUNKWCxRQUFRQyxHQUFHLENBQUNVO1lBQ2hCO1FBQ0osR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0w7SUFFL0IsR0FBRSxFQUFFO0lBR0oscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0E7O29CQUFHO29CQUFLcEIsU0FBU0UsQ0FBQzs7Ozs7OzswQkFDbkIsOERBQUNrQjs7b0JBQUc7b0JBQUtwQixTQUFTRyxDQUFDOzs7Ozs7OzBCQUNuQiw4REFBQ2lCOztvQkFBRztvQkFBS3BCLFNBQVNJLENBQUM7Ozs7Ozs7MEJBQ25CLDhEQUFDZ0I7O29CQUFHO29CQUFLcEIsU0FBU0ssRUFBRTs7Ozs7Ozs7Ozs7OztBQUloQztHQWhEU1A7QUFrRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWNlaXZlci9bcGFnZUlkXS9wYWdlLmpzPzZhM2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBwYWdlKHtwYXJhbXN9KXtcclxuXHJcbiAgICBjb25zdCBbIGd5cm9EYXRhLCBzZXRHeXJvRGF0YV0gPSB1c2VTdGF0ZSh7eCA6IG51bGwsIHkgOiBudWxsLCB6IDogbnVsbCwgaWQgOiBudWxsfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9pZExpc3RcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvaWRMaXN0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiIDogcGFyYW1zLnBhZ2VJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hEYXRhID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9neXJvRGF0YVwiLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBwYXJhbXMucGFnZUlkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEd5cm9EYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwocmVmcmVzaERhdGEpO1xyXG5cclxuICAgIH0sW10pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+RGF0YTwvaDE+XHJcbiAgICAgICAgICAgIDxoMT5YIDoge2d5cm9EYXRhLnh9PC9oMT5cclxuICAgICAgICAgICAgPGgxPlkgOiB7Z3lyb0RhdGEueX08L2gxPlxyXG4gICAgICAgICAgICA8aDE+WiA6IHtneXJvRGF0YS56fTwvaDE+XHJcbiAgICAgICAgICAgIDxoMT5JRDoge2d5cm9EYXRhLmlkfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJwYWdlIiwicGFyYW1zIiwiZ3lyb0RhdGEiLCJzZXRHeXJvRGF0YSIsIngiLCJ5IiwieiIsImlkIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInBvc3QiLCJwYWdlSWQiLCJyZWZyZXNoRGF0YSIsInNldEludGVydmFsIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjbGVhckludGVydmFsIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/receiver/[pageId]/page.js\n"));

/***/ })

});