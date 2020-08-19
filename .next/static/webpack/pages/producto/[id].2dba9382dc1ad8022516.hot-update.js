webpackHotUpdate_N_E("pages/producto/[id]",{

/***/ "./pages/producto/[id].js":
/*!********************************!*\
  !*** ./pages/producto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./pages/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/matt/nextjs/tienda/pages/producto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Producto = function Producto() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var pid = router.query.pid;\n  console.log(pid);\n  var productos = _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].servicios.find(function (x) {\n    return x._id === pid;\n  });\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"notification\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }\n  }, \"Conoce todos los \", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 22\n    }\n  }, \"detalles de \", productos.name), \" que necesitas saber.     \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 93\n    }\n  }, \"Volver atras\")), __jsx(\"div\", {\n    className: \"columns\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"article\", {\n    className: \"message is-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"message-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, \"Caracter\\xEDsticas de : \", productos.name)), __jsx(\"div\", {\n    className: \"message-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, productos.description.split(\"\\n\").map(function (i, key) {\n    return __jsx(\"p\", {\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 20\n      }\n    }, i);\n  })))), __jsx(\"div\", {\n    className: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }))));\n};\n\n_s(Producto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\n\nvar _c;\n\n$RefreshReg$(_c, \"Producto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG8vLmpzPzkwMDgiXSwibmFtZXMiOlsiUHJvZHVjdG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0b3MiLCJkYXRhIiwic2VydmljaW9zIiwiZmluZCIsIngiLCJfaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsIm1hcCIsImkiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURxQixNQUViQyxHQUZhLEdBRUxGLE1BQU0sQ0FBQ0csS0FGRixDQUViRCxHQUZhO0FBR3JCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLE1BQU1JLFNBQVMsR0FBR0MsNkNBQUksQ0FBQ0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVVQsR0FBZDtBQUFBLEdBQXJCLENBQWxCO0FBRUUsU0FBTTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRixtRUFDTjtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFCSSxTQUFTLENBQUNNLElBQS9CLENBRG5CLGdDQUMwRixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEMUYsQ0FETSxFQUlOO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVMsYUFBUyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFNLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUF5Qk4sU0FBUyxDQUFDTSxJQUFuQyxDQURGLENBREksRUFJSjtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ04sU0FBUyxDQUFDTyxXQUFWLENBQXNCQyxLQUF0QixDQUE0QixJQUE1QixFQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBQ0MsQ0FBRCxFQUFHQyxHQUFILEVBQVc7QUFDeEMsV0FBTztBQUFHLFNBQUcsRUFBRUEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNELENBQWQsQ0FBUDtBQUNILEdBRk4sQ0FERCxDQUpJLENBREEsQ0FESixFQWFFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBSk0sQ0FGRSxDQUFOO0FBeUJILENBL0JEOztHQUFNakIsUTtVQUNXRSxxRDs7O0tBRFhGLFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdG8vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBQcm9kdWN0byA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zb2xlLmxvZyhwaWQpXG4gIGNvbnN0IHByb2R1Y3RvcyA9IGRhdGEuc2VydmljaW9zLmZpbmQoeCA9PiB4Ll9pZCA9PT0gcGlkKTtcblxuICAgIHJldHVybjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge1xuICAgICAgICA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPlxuICAgIENvbm9jZSB0b2RvcyBsb3MgPHN0cm9uZz5kZXRhbGxlcyBkZSB7cHJvZHVjdG9zLm5hbWV9PC9zdHJvbmc+IHF1ZSBuZWNlc2l0YXMgc2FiZXIuICAgICA8TGluayBocmVmPVwiL1wiPlZvbHZlciBhdHJhczwvTGluaz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtbGlua1wiPlxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICA8cD5DYXJhY3RlcsOtc3RpY2FzIGRlIDoge3Byb2R1Y3Rvcy5uYW1lfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gIHtwcm9kdWN0b3MuZGVzY3JpcHRpb24uc3BsaXQoXCJcXG5cIikubWFwKChpLGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17a2V5fT57aX08L3A+O1xuICAgICAgICB9KX1cbiAgPC9kaXY+XG48L2FydGljbGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICB9XG48L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/producto/[id].js\n");

/***/ })

})