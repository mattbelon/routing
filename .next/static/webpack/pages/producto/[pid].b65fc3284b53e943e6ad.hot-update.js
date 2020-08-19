webpackHotUpdate_N_E("pages/producto/[pid]",{

/***/ "./pages/producto/[pid].js":
/*!*********************************!*\
  !*** ./pages/producto/[pid].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Producto; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ \"./pages/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ \"./pages/components/Header.js\");\n\n\n\nvar _jsxFileName = \"/home/matt/nextjs/tienda/pages/producto/[pid].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction Producto(pid) {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var productos = _data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].servicios.find(function (x) {\n    return x._id === pid.pid;\n  });\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"notification\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Conoce todos los \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 28\n    }\n  }, \"detalles de \", productos.name), \" que necesitas saber.     \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 99\n    }\n  }, \"Volver atras\")), __jsx(\"div\", {\n    className: \"columns\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"article\", {\n    className: \"message is-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"message-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"Caracter\\xEDsticas de : \", productos.name)), __jsx(\"div\", {\n    className: \"message-body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, productos.description.split(\"\\n\").map(function (i, key) {\n    return __jsx(\"p\", {\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 26\n      }\n    }, i);\n  })))), __jsx(\"div\", {\n    className: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }))));\n}\n\n_s(Producto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Producto;\n\nProducto.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, pid;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            pid = query.pid;\n            return _context.abrupt(\"return\", {\n              pid: pid\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Producto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG8vW3BpZF0uanM/YmFhNCJdLCJuYW1lcyI6WyJQcm9kdWN0byIsInBpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3RvcyIsImRhdGEiLCJzZXJ2aWNpb3MiLCJmaW5kIiwieCIsIl9pZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNwbGl0IiwibWFwIiwiaSIsImtleSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3JDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQyxNQUFNQyxTQUFTLEdBQUdDLDZDQUFJLENBQUNDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVVSLEdBQUcsQ0FBQ0EsR0FBbEI7QUFBQSxHQUFyQixDQUFsQjtBQUNDLFNBQU07QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUYsbUVBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFCRyxTQUFTLENBQUNNLElBQS9CLENBRG5CLGdDQUMwRixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEMUYsQ0FGQSxFQUtBO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVMsYUFBUyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFNLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUF5Qk4sU0FBUyxDQUFDTSxJQUFuQyxDQURGLENBREksRUFJSjtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDT04sU0FBUyxDQUFDTyxXQUFWLENBQXNCQyxLQUF0QixDQUE0QixJQUE1QixFQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBQ0MsQ0FBRCxFQUFHQyxHQUFILEVBQVc7QUFDOUMsV0FBTztBQUFHLFNBQUcsRUFBRUEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNELENBQWQsQ0FBUDtBQUNILEdBRkEsQ0FEUCxDQUpJLENBREEsQ0FESixFQWFKO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJJLENBTEEsQ0FGRSxDQUFOO0FBMEJIOztHQTdCdUJkLFE7VUFDUEcscUQ7OztLQURPSCxROztBQThCeEJBLFFBQVEsQ0FBQ2dCLGVBQVQ7QUFBQSw4TEFBMkIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxpQkFEa0IsR0FDVEQsR0FEUyxDQUNsQkMsS0FEa0I7QUFFbkJqQixlQUZtQixHQUVaaUIsS0FBSyxDQUFDakIsR0FGTTtBQUFBLDZDQUdoQjtBQUFDQSxpQkFBRyxFQUFDQTtBQUFMLGFBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdG8vW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RvIChwaWQpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgIGNvbnN0IHByb2R1Y3RvcyA9IGRhdGEuc2VydmljaW9zLmZpbmQoeCA9PiB4Ll9pZCA9PT0gcGlkLnBpZCk7XG4gICAgcmV0dXJuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICB7XG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj5cbiAgICAgICAgICBDb25vY2UgdG9kb3MgbG9zIDxzdHJvbmc+ZGV0YWxsZXMgZGUge3Byb2R1Y3Rvcy5uYW1lfTwvc3Ryb25nPiBxdWUgbmVjZXNpdGFzIHNhYmVyLiAgICAgPExpbmsgaHJlZj1cIi9cIj5Wb2x2ZXIgYXRyYXM8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWxpbmtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgPHA+Q2FyYWN0ZXLDrXN0aWNhcyBkZSA6IHtwcm9kdWN0b3MubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdG9zLmRlc2NyaXB0aW9uLnNwbGl0KFwiXFxuXCIpLm1hcCgoaSxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2tleX0+e2l9PC9wPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICAgfVxuPC9kaXY+XG59XG5Qcm9kdWN0by5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSBjdHg7XG4gIGNvbnN0IHBpZCA9IChxdWVyeS5waWQpXG4gIHJldHVybiAgIHtwaWQ6cGlkfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/producto/[pid].js\n");

/***/ })

})