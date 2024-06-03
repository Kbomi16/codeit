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

/***/ "(api)/./pages/api/short-links/index.js":
/*!****************************************!*\
  !*** ./pages/api/short-links/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log((mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection.readyState));\n    switch(req.method){\n        case \"POST\":\n            res.status(201).send(req.body);\n            break;\n        case \"GET\":\n            res.send([\n                {\n                    id: \"abc\",\n                    title: \"위키피디아 Next.js\",\n                    url: \"https://en.wikipedia.org/wiki/Next.js\"\n                },\n                {\n                    id: \"def\",\n                    title: \"코드잇 자유게시판\",\n                    url: \"https://codeit.kr/community/general\"\n                },\n                {\n                    id: \"ghi\",\n                    title: \"코드잇 질문답변\",\n                    url: \"https://www.codeit.kr/community/questions\"\n                }\n            ]);\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNQO0FBRWhCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNSix5REFBU0E7SUFDZkssUUFBUUMsSUFBSUwsdUVBQThCTztJQUUxQyxPQUFRTCxJQUFJTTtRQUNWLEtBQUs7WUFDSEwsSUFBSU0sT0FBTyxLQUFLQyxLQUFLUixJQUFJUztZQUN6QjtRQUVGLEtBQUs7WUFDSFIsSUFBSU8sS0FBSztnQkFDUDtvQkFDRUUsSUFBSTtvQkFDSkMsT0FBTztvQkFDUEMsS0FBSztnQkFDUDtnQkFDQTtvQkFDRUYsSUFBSTtvQkFDSkMsT0FBTztvQkFDUEMsS0FBSztnQkFDUDtnQkFDQTtvQkFDRUYsSUFBSTtvQkFDSkMsT0FBTztvQkFDUEMsS0FBSztnQkFDUDthQUNEO1lBQ0Q7UUFFRjtZQUNFWCxJQUFJTSxPQUFPLEtBQUtDO1lBQ2hCO0lBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanM/ZTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvZGIvZGJDb25uZWN0J1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KClcclxuICBjb25zb2xlLmxvZyhtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUpXHJcblxyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHJlcS5ib2R5KVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgIHJlcy5zZW5kKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ2FiYycsXHJcbiAgICAgICAgICB0aXRsZTogJ+ychO2CpO2UvOuUlOyVhCBOZXh0LmpzJyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05leHQuanMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdkZWYnLFxyXG4gICAgICAgICAgdGl0bGU6ICfsvZTrk5zsnocg7J6Q7Jyg6rKM7Iuc7YyQJyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vY29kZWl0LmtyL2NvbW11bml0eS9nZW5lcmFsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnZ2hpJyxcclxuICAgICAgICAgIHRpdGxlOiAn7L2U65Oc7J6HIOyniOusuOuLteuzgCcsXHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5jb2RlaXQua3IvY29tbXVuaXR5L3F1ZXN0aW9ucycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSlcclxuICAgICAgYnJlYWtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiYm9keSIsImlkIiwidGl0bGUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/index.js\n");

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