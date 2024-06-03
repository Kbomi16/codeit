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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = `${process.env.MONGODB_URI}/shortit`;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxRQUFRLENBQUM7QUFFeEQsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDQTtBQUNKLENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBRTtJQUNWO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL2RiQ29ubmVjdC5qcz9mY2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkl9L3Nob3J0aXRgO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.js\n");

/***/ }),

/***/ "(api)/./db/models/ShortLink.js":
/*!********************************!*\
  !*** ./db/models/ShortLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvU2hvcnRMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWUsQ0FDekM7SUFDRUcsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxTQUFTO0lBQUc7SUFDbkNDLEtBQUs7UUFBRUgsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ2pDRSxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFNBQVM7SUFBRztBQUN4QyxHQUNBO0lBQ0VHLFlBQVksSUFBSTtBQUNsQjtBQUdGLE1BQU1DLFlBQ0pWLGtFQUE0QixJQUFJQSxxREFBYyxDQUFDLGFBQWFDO0FBRTlELGlFQUFlUyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL21vZGVscy9TaG9ydExpbmsuanM/MWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzaG9ydExpbmtTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgc2hvcnRVcmw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgU2hvcnRMaW5rID1cbiAgbW9uZ29vc2UubW9kZWxzWydTaG9ydExpbmsnXSB8fCBtb25nb29zZS5tb2RlbCgnU2hvcnRMaW5rJywgc2hvcnRMaW5rU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcnRMaW5rO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2hvcnRMaW5rU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInVybCIsInNob3J0VXJsIiwidGltZXN0YW1wcyIsIlNob3J0TGluayIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/models/ShortLink.js\n");

/***/ }),

/***/ "(api)/./pages/api/short-links/index.js":
/*!****************************************!*\
  !*** ./pages/api/short-links/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.js\");\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/ShortLink */ \"(api)/./db/models/ShortLink.js\");\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(req.method){\n        case \"POST\":\n            const { title , url  } = req.body;\n            const shortUrl = createShortURL(url);\n            const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                title,\n                url,\n                shortUrl\n            });\n            res.status(201).send(shortLink);\n            break;\n        case \"GET\":\n            const shortLinks = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.send(shortLinks);\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQ087QUFFOUIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUoseURBQVNBO0lBRWYsT0FBUUcsSUFBSUUsTUFBTTtRQUNoQixLQUFLO1lBQ0gsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLElBQUcsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1lBQy9CLE1BQU1DLFdBQVdDLGVBQWVIO1lBRWhDLE1BQU1JLFlBQVksTUFBTVYsbUVBQWdCLENBQUM7Z0JBQ3ZDSztnQkFDQUM7Z0JBQ0FFO1lBQ0Y7WUFDQUwsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7WUFDckIsS0FBSztRQUVQLEtBQUs7WUFDSCxNQUFNSSxhQUFhLE1BQU1kLGlFQUFjO1lBQ3ZDRyxJQUFJVSxJQUFJLENBQUNDO1lBQ1QsS0FBSztRQUVQO1lBQ0VYLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO1lBQ3BCLEtBQUs7SUFDVDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vcGFnZXMvYXBpL3Nob3J0LWxpbmtzL2luZGV4LmpzP2U2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2RiL2RiQ29ubmVjdCdcbmltcG9ydCBTaG9ydExpbmsgZnJvbSAnQC9kYi9tb2RlbHMvU2hvcnRMaW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpXG5cbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICBjb25zdCB7IHRpdGxlLCB1cmwgfSA9IHJlcS5ib2R5XG4gICAgICBjb25zdCBzaG9ydFVybCA9IGNyZWF0ZVNob3J0VVJMKHVybClcblxuICAgICAgY29uc3Qgc2hvcnRMaW5rID0gYXdhaXQgU2hvcnRMaW5rLmNyZWF0ZSh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB1cmwsXG4gICAgICAgIHNob3J0VXJsLFxuICAgICAgfSlcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHNob3J0TGluaylcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdHRVQnOlxuICAgICAgY29uc3Qgc2hvcnRMaW5rcyA9IGF3YWl0IFNob3J0TGluay5maW5kKClcbiAgICAgIHJlcy5zZW5kKHNob3J0TGlua3MpXG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKClcbiAgICAgIGJyZWFrXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlNob3J0TGluayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0aXRsZSIsInVybCIsImJvZHkiLCJzaG9ydFVybCIsImNyZWF0ZVNob3J0VVJMIiwic2hvcnRMaW5rIiwiY3JlYXRlIiwic3RhdHVzIiwic2VuZCIsInNob3J0TGlua3MiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/index.js\n");

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