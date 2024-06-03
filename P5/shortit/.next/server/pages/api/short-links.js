"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/short-links";
exports.ids = ["pages/api/short-links"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/dbConnect.js":
/*!*************************!*\
  !*** ./db/dbConnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWNDLFFBQVFDLElBQUlGO0FBRWhDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OO0FBRXBCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixXQUFXO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxNQUFNO1FBQ2YsT0FBT0YsT0FBT0U7SUFDaEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLFNBQVM7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQU4sT0FBT0csVUFBVVIsdURBQWdCWSxDQUFDWCxhQUFhUyxNQUFNRyxLQUFLLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkssT0FBT0UsT0FBTyxNQUFNRixPQUFPRztJQUM3QixFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csVUFBVTtRQUVqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0U7QUFDaEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9kYi9kYkNvbm5lY3QuanM/ZmNkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cclxuICB9XHJcblxyXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsXHJcblxyXG4gICAgdGhyb3cgZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdFxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.js\n");

/***/ }),

/***/ "(api)/./db/models/ShortLink.js":
/*!********************************!*\
  !*** ./db/models/ShortLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvU2hvcnRMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWVFLENBQ3pDO0lBQ0VDLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1DO1FBQVFDLFNBQVM7SUFBRztJQUNqQ0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxTQUFTO0lBQUc7QUFDeEMsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxZQUNKVixrRUFBNEIsSUFBSUEscURBQWNZLENBQUMsYUFBYVg7QUFFOUQsaUVBQWVTLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vZGIvbW9kZWxzL1Nob3J0TGluay5qcz8xYmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IHNob3J0TGlua1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxyXG4gICAgdXJsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcclxuICAgIHNob3J0VXJsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBTaG9ydExpbmsgPVxyXG4gIG1vbmdvb3NlLm1vZGVsc1snU2hvcnRMaW5rJ10gfHwgbW9uZ29vc2UubW9kZWwoJ1Nob3J0TGluaycsIHNob3J0TGlua1NjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3J0TGlua1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJzaG9ydExpbmtTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXJsIiwic2hvcnRVcmwiLCJ0aW1lc3RhbXBzIiwiU2hvcnRMaW5rIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/ShortLink.js\n");

/***/ }),

/***/ "(api)/./pages/api/short-links/index.js":
/*!****************************************!*\
  !*** ./pages/api/short-links/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.js\");\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/ShortLink */ \"(api)/./db/models/ShortLink.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(req.method){\n        case \"POST\":\n            const newShortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).send(newShortLink);\n            break;\n        case \"GET\":\n            const shortLinks = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.send(shortLinks);\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDTztBQUNkO0FBRWhCLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNTCx5REFBU0E7SUFFZixPQUFRSSxJQUFJRTtRQUNWLEtBQUs7WUFDSCxNQUFNQyxlQUFlLE1BQU1OLG1FQUFnQk8sQ0FBQ0osSUFBSUs7WUFDaERKLElBQUlLLE9BQU8sS0FBS0MsS0FBS0o7WUFDckI7UUFFRixLQUFLO1lBQ0gsTUFBTUssYUFBYSxNQUFNWCxpRUFBY1k7WUFDdkNSLElBQUlNLEtBQUtDO1lBQ1Q7UUFFRjtZQUNFUCxJQUFJSyxPQUFPLEtBQUtDO1lBQ2hCO0lBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanM/ZTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvZGIvZGJDb25uZWN0J1xyXG5pbXBvcnQgU2hvcnRMaW5rIGZyb20gJ0AvZGIvbW9kZWxzL1Nob3J0TGluaydcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpXHJcblxyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIGNvbnN0IG5ld1Nob3J0TGluayA9IGF3YWl0IFNob3J0TGluay5jcmVhdGUocmVxLmJvZHkpXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKG5ld1Nob3J0TGluaylcclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBjYXNlICdHRVQnOlxyXG4gICAgICBjb25zdCBzaG9ydExpbmtzID0gYXdhaXQgU2hvcnRMaW5rLmZpbmQoKVxyXG4gICAgICByZXMuc2VuZChzaG9ydExpbmtzKVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKClcclxuICAgICAgYnJlYWtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlNob3J0TGluayIsIm1vbmdvb3NlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5ld1Nob3J0TGluayIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwic2hvcnRMaW5rcyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/short-links/index.js"));
module.exports = __webpack_exports__;

})();