/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Drawable/BackgroundCanvas.ts":
/*!*********************************************!*\
  !*** ./src/ts/Drawable/BackgroundCanvas.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.BackgroundCanvas = void 0;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Drawable/Canvas.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar BackgroundCanvas = function (_super) {\n  __extends(BackgroundCanvas, _super);\n\n  function BackgroundCanvas(canvas, ctx) {\n    var _this = _super.call(this, canvas, ctx) || this;\n\n    _this.resize();\n\n    _this.draw();\n\n    return _this;\n  }\n\n  BackgroundCanvas.prototype.resize = function () {\n    var _this = this;\n\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    window.addEventListener('resize', function () {\n      _this.canvas.width = window.innerWidth;\n      _this.canvas.height = window.innerHeight;\n\n      _this.draw();\n    });\n  };\n\n  BackgroundCanvas.prototype.draw = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.sky.gradient.length; i++) {\n      this.gradient.addColorStop(i * (1 / (settings_1.settings.sky.gradient.length - 1)), settings_1.settings.sky.gradient[i]);\n    }\n\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = settings_1.settings.grass.color;\n    this.ctx.rect(0, this.canvas.height / 4, this.canvas.width, this.canvas.height);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return BackgroundCanvas;\n}(Canvas_1.Canvas);\n\nexports.BackgroundCanvas = BackgroundCanvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvQmFja2dyb3VuZENhbnZhcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTtBQUFzQ0E7O0FBR2xDLDRCQUFZQyxNQUFaLEVBQXVDQyxHQUF2QyxFQUFvRTtBQUFwRSxnQkFDSUMsa0JBQU1GLE1BQU4sRUFBY0MsR0FBZCxLQUFrQixJQUR0Qjs7QUFFSUUsU0FBSSxDQUFDQyxNQUFMOztBQUNBRCxTQUFJLENBQUNFLElBQUw7OztBQUNIOztBQUVEQztBQUFBOztBQUNJLFNBQUtOLE1BQUwsQ0FBWU8sS0FBWixHQUFvQkMsTUFBTSxDQUFDQyxVQUEzQjtBQUNBLFNBQUtULE1BQUwsQ0FBWVUsTUFBWixHQUFxQkYsTUFBTSxDQUFDRyxXQUE1QjtBQUNBSCxVQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCVCxXQUFJLENBQUNILE1BQUwsQ0FBWU8sS0FBWixHQUFvQkMsTUFBTSxDQUFDQyxVQUEzQjtBQUNBTixXQUFJLENBQUNILE1BQUwsQ0FBWVUsTUFBWixHQUFxQkYsTUFBTSxDQUFDRyxXQUE1Qjs7QUFDQVIsV0FBSSxDQUFDRSxJQUFMO0FBQ0gsS0FKRDtBQU1ILEdBVEQ7O0FBV1NDLG9DQUFUO0FBQ0ksU0FBS08sUUFBTCxHQUFnQixLQUFLWixHQUFMLENBQVNhLG9CQUFULENBQThCLEtBQUtkLE1BQUwsQ0FBWU8sS0FBWixHQUFvQixDQUFsRCxFQUFxRCxDQUFyRCxFQUF3RCxLQUFLUCxNQUFMLENBQVlPLEtBQVosR0FBb0IsQ0FBNUUsRUFBK0UsS0FBS1AsTUFBTCxDQUFZVSxNQUEzRixDQUFoQjs7QUFDQSxTQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0JLLE1BQTFDLEVBQWtESCxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELFdBQUtGLFFBQUwsQ0FBY00sWUFBZCxDQUEyQkosQ0FBQyxJQUFJLEtBQUtDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0JLLE1BQXRCLEdBQStCLENBQXBDLENBQUosQ0FBNUIsRUFBeUVGLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0JFLENBQXRCLENBQXpFO0FBQ0g7O0FBQ0QsU0FBS2QsR0FBTCxDQUFTbUIsU0FBVDtBQUNBLFNBQUtuQixHQUFMLENBQVNvQixTQUFULEdBQXFCLEtBQUtSLFFBQTFCO0FBQ0EsU0FBS1osR0FBTCxDQUFTcUIsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLdEIsTUFBTCxDQUFZTyxLQUFwQyxFQUEyQyxLQUFLUCxNQUFMLENBQVlVLE1BQXZEO0FBQ0EsU0FBS1QsR0FBTCxDQUFTc0IsU0FBVDtBQUNBLFNBQUt0QixHQUFMLENBQVNtQixTQUFUO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFNBQVQsR0FBcUJMLG9CQUFTUSxLQUFULENBQWVDLEtBQXBDO0FBQ0EsU0FBS3hCLEdBQUwsQ0FBU3lCLElBQVQsQ0FBYyxDQUFkLEVBQWlCLEtBQUsxQixNQUFMLENBQVlVLE1BQVosR0FBcUIsQ0FBdEMsRUFBeUMsS0FBS1YsTUFBTCxDQUFZTyxLQUFyRCxFQUE0RCxLQUFLUCxNQUFMLENBQVlVLE1BQXhFO0FBQ0EsU0FBS1QsR0FBTCxDQUFTMEIsSUFBVDtBQUNBLFNBQUsxQixHQUFMLENBQVNzQixTQUFUO0FBQ0gsR0FkUTs7QUFlYjtBQW5DQSxFQUFzQ0ssZUFBdEM7O0FBQWFDLHdCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRHJhd2FibGUvQmFja2dyb3VuZENhbnZhcy50cz8wZjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZENhbnZhcyBleHRlbmRzIENhbnZhcyB7XG4gICAgcHJvdGVjdGVkIGdyYWRpZW50OiBDYW52YXNHcmFkaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4KTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBvdmVycmlkZSBkcmF3KCkge1xuICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQodGhpcy5jYW52YXMud2lkdGggLyAyLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3Muc2t5LmdyYWRpZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcChpICogKDEgLyAoc2V0dGluZ3Muc2t5LmdyYWRpZW50Lmxlbmd0aCAtIDEpKSwgc2V0dGluZ3Muc2t5LmdyYWRpZW50W2ldKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBzZXR0aW5ncy5ncmFzcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgucmVjdCgwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyA0LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImNhbnZhcyIsImN0eCIsIl9zdXBlciIsIl90aGlzIiwicmVzaXplIiwiZHJhdyIsIkJhY2tncm91bmRDYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiaSIsInNldHRpbmdzXzEiLCJza3kiLCJsZW5ndGgiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImdyYXNzIiwiY29sb3IiLCJyZWN0IiwiZmlsbCIsIkNhbnZhc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Drawable/BackgroundCanvas.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Canvas.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Canvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Canvas = function () {\n  function Canvas(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n  }\n\n  Canvas.prototype.draw = function () {};\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFJSSxrQkFBc0JBLE1BQXRCLEVBQWlEQyxHQUFqRCxFQUE4RTtBQUMxRSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFREMsdUNBQ0MsQ0FERDs7QUFFSjtBQUFDLENBWEQ7O0FBQXNCQyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRHJhd2FibGUvQ2FudmFzLnRzPzFmNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuLi9JbnRlcmZhY2UvSURyYXdhYmxlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYW52YXMgaW1wbGVtZW50cyBJRHJhd2FibGUge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsIkNhbnZhcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar BackgroundCanvas_1 = __webpack_require__(/*! ./Drawable/BackgroundCanvas */ \"./src/ts/Drawable/BackgroundCanvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.BackgroundCanvasElement = document.getElementById(\"backgroundCanvas\");\n    this.BackgroundCanvasCtx = this.BackgroundCanvasElement.getContext(\"2d\");\n    this.BackgroundCanvas = new BackgroundCanvas_1.BackgroundCanvas(this.BackgroundCanvasElement, this.BackgroundCanvasCtx);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBR0E7QUFLSTtBQUhtQixtQ0FBNkNBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBN0M7QUFDQSwrQkFBZ0QsS0FBS0MsdUJBQUwsQ0FBNkJDLFVBQTdCLENBQXdDLElBQXhDLENBQWhEO0FBR2YsU0FBS0MsZ0JBQUwsR0FBd0IsSUFBSUMsbUNBQUosQ0FBcUIsS0FBS0gsdUJBQTFCLEVBQW1ELEtBQUtJLG1CQUF4RCxDQUF4QjtBQUVIOztBQUNMO0FBQUMsQ0FURDs7QUFXQSxJQUFJQyxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYWNrZ3JvdW5kQ2FudmFzfSBmcm9tIFwiLi9EcmF3YWJsZS9CYWNrZ3JvdW5kQ2FudmFzXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgQmFja2dyb3VuZENhbnZhczogQmFja2dyb3VuZENhbnZhcztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgQmFja2dyb3VuZENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBCYWNrZ3JvdW5kQ2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSB0aGlzLkJhY2tncm91bmRDYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5CYWNrZ3JvdW5kQ2FudmFzID0gbmV3IEJhY2tncm91bmRDYW52YXModGhpcy5CYWNrZ3JvdW5kQ2FudmFzRWxlbWVudCwgdGhpcy5CYWNrZ3JvdW5kQ2FudmFzQ3R4KTtcblxuICAgIH1cbn1cblxubmV3IE1haW4oKTtcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQmFja2dyb3VuZENhbnZhc0VsZW1lbnQiLCJnZXRDb250ZXh0IiwiQmFja2dyb3VuZENhbnZhcyIsIkJhY2tncm91bmRDYW52YXNfMSIsIkJhY2tncm91bmRDYW52YXNDdHgiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: ['hsl(207, 100%, 50%)', 'hsl(207, 100%, 68%)']\n  },\n  grass: {\n    color: 'hsl(98, 100%, 30%)'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLHFCQUFELEVBQXdCLHFCQUF4QjtBQURULEdBRGU7QUFJcEJDLE9BQUssRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESDtBQUphLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuL0hlbHBlcnMvSHNsXCI7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBza3k6IHtcbiAgICAgICAgZ3JhZGllbnQ6IFsnaHNsKDIwNywgMTAwJSwgNTAlKScsICdoc2woMjA3LCAxMDAlLCA2OCUpJ10sXG4gICAgfSxcbiAgICBncmFzczoge1xuICAgICAgIGNvbG9yOiAnaHNsKDk4LCAxMDAlLCAzMCUpJyxcbiAgICB9LFxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJza3kiLCJncmFkaWVudCIsImdyYXNzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;