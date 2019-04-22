/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/victor/index.js":
/*!**************************************!*\
  !*** ./node_modules/victor/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports = module.exports = Victor;\n\n/**\n * # Victor - A JavaScript 2D vector class with methods for common vector operations\n */\n\n/**\n * Constructor. Will also work without the `new` keyword\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = Victor(42, 1337);\n *\n * @param {Number} x Value of the x axis\n * @param {Number} y Value of the y axis\n * @return {Victor}\n * @api public\n */\nfunction Victor (x, y) {\n\tif (!(this instanceof Victor)) {\n\t\treturn new Victor(x, y);\n\t}\n\n\t/**\n\t * The X axis\n\t *\n\t * ### Examples:\n\t *     var vec = new Victor.fromArray(42, 21);\n\t *\n\t *     vec.x;\n\t *     // => 42\n\t *\n\t * @api public\n\t */\n\tthis.x = x || 0;\n\n\t/**\n\t * The Y axis\n\t *\n\t * ### Examples:\n\t *     var vec = new Victor.fromArray(42, 21);\n\t *\n\t *     vec.y;\n\t *     // => 21\n\t *\n\t * @api public\n\t */\n\tthis.y = y || 0;\n};\n\n/**\n * # Static\n */\n\n/**\n * Creates a new instance from an array\n *\n * ### Examples:\n *     var vec = Victor.fromArray([42, 21]);\n *\n *     vec.toString();\n *     // => x:42, y:21\n *\n * @name Victor.fromArray\n * @param {Array} array Array with the x and y values at index 0 and 1 respectively\n * @return {Victor} The new instance\n * @api public\n */\nVictor.fromArray = function (arr) {\n\treturn new Victor(arr[0] || 0, arr[1] || 0);\n};\n\n/**\n * Creates a new instance from an object\n *\n * ### Examples:\n *     var vec = Victor.fromObject({ x: 42, y: 21 });\n *\n *     vec.toString();\n *     // => x:42, y:21\n *\n * @name Victor.fromObject\n * @param {Object} obj Object with the values for x and y\n * @return {Victor} The new instance\n * @api public\n */\nVictor.fromObject = function (obj) {\n\treturn new Victor(obj.x || 0, obj.y || 0);\n};\n\n/**\n * # Manipulation\n *\n * These functions are chainable.\n */\n\n/**\n * Adds another vector's X axis to this one\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.addX(vec2);\n *     vec1.toString();\n *     // => x:30, y:10\n *\n * @param {Victor} vector The other vector you want to add to this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.addX = function (vec) {\n\tthis.x += vec.x;\n\treturn this;\n};\n\n/**\n * Adds another vector's Y axis to this one\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.addY(vec2);\n *     vec1.toString();\n *     // => x:10, y:40\n *\n * @param {Victor} vector The other vector you want to add to this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.addY = function (vec) {\n\tthis.y += vec.y;\n\treturn this;\n};\n\n/**\n * Adds another vector to this one\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.add(vec2);\n *     vec1.toString();\n *     // => x:30, y:40\n *\n * @param {Victor} vector The other vector you want to add to this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.add = function (vec) {\n\tthis.x += vec.x;\n\tthis.y += vec.y;\n\treturn this;\n};\n\n/**\n * Adds the given scalar to both vector axis\n *\n * ### Examples:\n *     var vec = new Victor(1, 2);\n *\n *     vec.addScalar(2);\n *     vec.toString();\n *     // => x: 3, y: 4\n *\n * @param {Number} scalar The scalar to add\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.addScalar = function (scalar) {\n\tthis.x += scalar;\n\tthis.y += scalar;\n\treturn this;\n};\n\n/**\n * Adds the given scalar to the X axis\n *\n * ### Examples:\n *     var vec = new Victor(1, 2);\n *\n *     vec.addScalarX(2);\n *     vec.toString();\n *     // => x: 3, y: 2\n *\n * @param {Number} scalar The scalar to add\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.addScalarX = function (scalar) {\n\tthis.x += scalar;\n\treturn this;\n};\n\n/**\n * Adds the given scalar to the Y axis\n *\n * ### Examples:\n *     var vec = new Victor(1, 2);\n *\n *     vec.addScalarY(2);\n *     vec.toString();\n *     // => x: 1, y: 4\n *\n * @param {Number} scalar The scalar to add\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.addScalarY = function (scalar) {\n\tthis.y += scalar;\n\treturn this;\n};\n\n/**\n * Subtracts the X axis of another vector from this one\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.subtractX(vec2);\n *     vec1.toString();\n *     // => x:80, y:50\n *\n * @param {Victor} vector The other vector you want subtract from this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtractX = function (vec) {\n\tthis.x -= vec.x;\n\treturn this;\n};\n\n/**\n * Subtracts the Y axis of another vector from this one\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.subtractY(vec2);\n *     vec1.toString();\n *     // => x:100, y:20\n *\n * @param {Victor} vector The other vector you want subtract from this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtractY = function (vec) {\n\tthis.y -= vec.y;\n\treturn this;\n};\n\n/**\n * Subtracts another vector from this one\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(20, 30);\n *\n *     vec1.subtract(vec2);\n *     vec1.toString();\n *     // => x:80, y:20\n *\n * @param {Victor} vector The other vector you want subtract from this one\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtract = function (vec) {\n\tthis.x -= vec.x;\n\tthis.y -= vec.y;\n\treturn this;\n};\n\n/**\n * Subtracts the given scalar from both axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 200);\n *\n *     vec.subtractScalar(20);\n *     vec.toString();\n *     // => x: 80, y: 180\n *\n * @param {Number} scalar The scalar to subtract\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtractScalar = function (scalar) {\n\tthis.x -= scalar;\n\tthis.y -= scalar;\n\treturn this;\n};\n\n/**\n * Subtracts the given scalar from the X axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 200);\n *\n *     vec.subtractScalarX(20);\n *     vec.toString();\n *     // => x: 80, y: 200\n *\n * @param {Number} scalar The scalar to subtract\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtractScalarX = function (scalar) {\n\tthis.x -= scalar;\n\treturn this;\n};\n\n/**\n * Subtracts the given scalar from the Y axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 200);\n *\n *     vec.subtractScalarY(20);\n *     vec.toString();\n *     // => x: 100, y: 180\n *\n * @param {Number} scalar The scalar to subtract\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.subtractScalarY = function (scalar) {\n\tthis.y -= scalar;\n\treturn this;\n};\n\n/**\n * Divides the X axis by the x component of given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(2, 0);\n *\n *     vec.divideX(vec2);\n *     vec.toString();\n *     // => x:50, y:50\n *\n * @param {Victor} vector The other vector you want divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divideX = function (vector) {\n\tthis.x /= vector.x;\n\treturn this;\n};\n\n/**\n * Divides the Y axis by the y component of given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(0, 2);\n *\n *     vec.divideY(vec2);\n *     vec.toString();\n *     // => x:100, y:25\n *\n * @param {Victor} vector The other vector you want divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divideY = function (vector) {\n\tthis.y /= vector.y;\n\treturn this;\n};\n\n/**\n * Divides both vector axis by a axis values of given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(2, 2);\n *\n *     vec.divide(vec2);\n *     vec.toString();\n *     // => x:50, y:25\n *\n * @param {Victor} vector The vector to divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divide = function (vector) {\n\tthis.x /= vector.x;\n\tthis.y /= vector.y;\n\treturn this;\n};\n\n/**\n * Divides both vector axis by the given scalar value\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.divideScalar(2);\n *     vec.toString();\n *     // => x:50, y:25\n *\n * @param {Number} The scalar to divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divideScalar = function (scalar) {\n\tif (scalar !== 0) {\n\t\tthis.x /= scalar;\n\t\tthis.y /= scalar;\n\t} else {\n\t\tthis.x = 0;\n\t\tthis.y = 0;\n\t}\n\n\treturn this;\n};\n\n/**\n * Divides the X axis by the given scalar value\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.divideScalarX(2);\n *     vec.toString();\n *     // => x:50, y:50\n *\n * @param {Number} The scalar to divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divideScalarX = function (scalar) {\n\tif (scalar !== 0) {\n\t\tthis.x /= scalar;\n\t} else {\n\t\tthis.x = 0;\n\t}\n\treturn this;\n};\n\n/**\n * Divides the Y axis by the given scalar value\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.divideScalarY(2);\n *     vec.toString();\n *     // => x:100, y:25\n *\n * @param {Number} The scalar to divide by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.divideScalarY = function (scalar) {\n\tif (scalar !== 0) {\n\t\tthis.y /= scalar;\n\t} else {\n\t\tthis.y = 0;\n\t}\n\treturn this;\n};\n\n/**\n * Inverts the X axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.invertX();\n *     vec.toString();\n *     // => x:-100, y:50\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.invertX = function () {\n\tthis.x *= -1;\n\treturn this;\n};\n\n/**\n * Inverts the Y axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.invertY();\n *     vec.toString();\n *     // => x:100, y:-50\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.invertY = function () {\n\tthis.y *= -1;\n\treturn this;\n};\n\n/**\n * Inverts both axis\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.invert();\n *     vec.toString();\n *     // => x:-100, y:-50\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.invert = function () {\n\tthis.invertX();\n\tthis.invertY();\n\treturn this;\n};\n\n/**\n * Multiplies the X axis by X component of given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(2, 0);\n *\n *     vec.multiplyX(vec2);\n *     vec.toString();\n *     // => x:200, y:50\n *\n * @param {Victor} vector The vector to multiply the axis with\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiplyX = function (vector) {\n\tthis.x *= vector.x;\n\treturn this;\n};\n\n/**\n * Multiplies the Y axis by Y component of given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(0, 2);\n *\n *     vec.multiplyX(vec2);\n *     vec.toString();\n *     // => x:100, y:100\n *\n * @param {Victor} vector The vector to multiply the axis with\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiplyY = function (vector) {\n\tthis.y *= vector.y;\n\treturn this;\n};\n\n/**\n * Multiplies both vector axis by values from a given vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     var vec2 = new Victor(2, 2);\n *\n *     vec.multiply(vec2);\n *     vec.toString();\n *     // => x:200, y:100\n *\n * @param {Victor} vector The vector to multiply by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiply = function (vector) {\n\tthis.x *= vector.x;\n\tthis.y *= vector.y;\n\treturn this;\n};\n\n/**\n * Multiplies both vector axis by the given scalar value\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.multiplyScalar(2);\n *     vec.toString();\n *     // => x:200, y:100\n *\n * @param {Number} The scalar to multiply by\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiplyScalar = function (scalar) {\n\tthis.x *= scalar;\n\tthis.y *= scalar;\n\treturn this;\n};\n\n/**\n * Multiplies the X axis by the given scalar\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.multiplyScalarX(2);\n *     vec.toString();\n *     // => x:200, y:50\n *\n * @param {Number} The scalar to multiply the axis with\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiplyScalarX = function (scalar) {\n\tthis.x *= scalar;\n\treturn this;\n};\n\n/**\n * Multiplies the Y axis by the given scalar\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.multiplyScalarY(2);\n *     vec.toString();\n *     // => x:100, y:100\n *\n * @param {Number} The scalar to multiply the axis with\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.multiplyScalarY = function (scalar) {\n\tthis.y *= scalar;\n\treturn this;\n};\n\n/**\n * Normalize\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.normalize = function () {\n\tvar length = this.length();\n\n\tif (length === 0) {\n\t\tthis.x = 1;\n\t\tthis.y = 0;\n\t} else {\n\t\tthis.divide(Victor(length, length));\n\t}\n\treturn this;\n};\n\nVictor.prototype.norm = Victor.prototype.normalize;\n\n/**\n * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.limit(80, 0.9);\n *     vec.toString();\n *     // => x:90, y:50\n *\n * @param {Number} max The maximum value for both x and y axis\n * @param {Number} factor Factor by which the axis are to be multiplied with\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.limit = function (max, factor) {\n\tif (Math.abs(this.x) > max){ this.x *= factor; }\n\tif (Math.abs(this.y) > max){ this.y *= factor; }\n\treturn this;\n};\n\n/**\n * Randomizes both vector axis with a value between 2 vectors\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));\n *     vec.toString();\n *     // => x:67, y:73\n *\n * @param {Victor} topLeft first vector\n * @param {Victor} bottomRight second vector\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.randomize = function (topLeft, bottomRight) {\n\tthis.randomizeX(topLeft, bottomRight);\n\tthis.randomizeY(topLeft, bottomRight);\n\n\treturn this;\n};\n\n/**\n * Randomizes the y axis with a value between 2 vectors\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));\n *     vec.toString();\n *     // => x:55, y:50\n *\n * @param {Victor} topLeft first vector\n * @param {Victor} bottomRight second vector\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.randomizeX = function (topLeft, bottomRight) {\n\tvar min = Math.min(topLeft.x, bottomRight.x);\n\tvar max = Math.max(topLeft.x, bottomRight.x);\n\tthis.x = random(min, max);\n\treturn this;\n};\n\n/**\n * Randomizes the y axis with a value between 2 vectors\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));\n *     vec.toString();\n *     // => x:100, y:66\n *\n * @param {Victor} topLeft first vector\n * @param {Victor} bottomRight second vector\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.randomizeY = function (topLeft, bottomRight) {\n\tvar min = Math.min(topLeft.y, bottomRight.y);\n\tvar max = Math.max(topLeft.y, bottomRight.y);\n\tthis.y = random(min, max);\n\treturn this;\n};\n\n/**\n * Randomly randomizes either axis between 2 vectors\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));\n *     vec.toString();\n *     // => x:100, y:77\n *\n * @param {Victor} topLeft first vector\n * @param {Victor} bottomRight second vector\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.randomizeAny = function (topLeft, bottomRight) {\n\tif (!! Math.round(Math.random())) {\n\t\tthis.randomizeX(topLeft, bottomRight);\n\t} else {\n\t\tthis.randomizeY(topLeft, bottomRight);\n\t}\n\treturn this;\n};\n\n/**\n * Rounds both axis to an integer value\n *\n * ### Examples:\n *     var vec = new Victor(100.2, 50.9);\n *\n *     vec.unfloat();\n *     vec.toString();\n *     // => x:100, y:51\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.unfloat = function () {\n\tthis.x = Math.round(this.x);\n\tthis.y = Math.round(this.y);\n\treturn this;\n};\n\n/**\n * Rounds both axis to a certain precision\n *\n * ### Examples:\n *     var vec = new Victor(100.2, 50.9);\n *\n *     vec.unfloat();\n *     vec.toString();\n *     // => x:100, y:51\n *\n * @param {Number} Precision (default: 8)\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.toFixed = function (precision) {\n\tif (typeof precision === 'undefined') { precision = 8; }\n\tthis.x = this.x.toFixed(precision);\n\tthis.y = this.y.toFixed(precision);\n\treturn this;\n};\n\n/**\n * Performs a linear blend / interpolation of the X axis towards another vector\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 100);\n *     var vec2 = new Victor(200, 200);\n *\n *     vec1.mixX(vec2, 0.5);\n *     vec.toString();\n *     // => x:150, y:100\n *\n * @param {Victor} vector The other vector\n * @param {Number} amount The blend amount (optional, default: 0.5)\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.mixX = function (vec, amount) {\n\tif (typeof amount === 'undefined') {\n\t\tamount = 0.5;\n\t}\n\n\tthis.x = (1 - amount) * this.x + amount * vec.x;\n\treturn this;\n};\n\n/**\n * Performs a linear blend / interpolation of the Y axis towards another vector\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 100);\n *     var vec2 = new Victor(200, 200);\n *\n *     vec1.mixY(vec2, 0.5);\n *     vec.toString();\n *     // => x:100, y:150\n *\n * @param {Victor} vector The other vector\n * @param {Number} amount The blend amount (optional, default: 0.5)\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.mixY = function (vec, amount) {\n\tif (typeof amount === 'undefined') {\n\t\tamount = 0.5;\n\t}\n\n\tthis.y = (1 - amount) * this.y + amount * vec.y;\n\treturn this;\n};\n\n/**\n * Performs a linear blend / interpolation towards another vector\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 100);\n *     var vec2 = new Victor(200, 200);\n *\n *     vec1.mix(vec2, 0.5);\n *     vec.toString();\n *     // => x:150, y:150\n *\n * @param {Victor} vector The other vector\n * @param {Number} amount The blend amount (optional, default: 0.5)\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.mix = function (vec, amount) {\n\tthis.mixX(vec, amount);\n\tthis.mixY(vec, amount);\n\treturn this;\n};\n\n/**\n * # Products\n */\n\n/**\n * Creates a clone of this vector\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = vec1.clone();\n *\n *     vec2.toString();\n *     // => x:10, y:10\n *\n * @return {Victor} A clone of the vector\n * @api public\n */\nVictor.prototype.clone = function () {\n\treturn new Victor(this.x, this.y);\n};\n\n/**\n * Copies another vector's X component in to its own\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 20);\n *     var vec2 = vec1.copyX(vec1);\n *\n *     vec2.toString();\n *     // => x:20, y:10\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.copyX = function (vec) {\n\tthis.x = vec.x;\n\treturn this;\n};\n\n/**\n * Copies another vector's Y component in to its own\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 20);\n *     var vec2 = vec1.copyY(vec1);\n *\n *     vec2.toString();\n *     // => x:10, y:20\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.copyY = function (vec) {\n\tthis.y = vec.y;\n\treturn this;\n};\n\n/**\n * Copies another vector's X and Y components in to its own\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *     var vec2 = new Victor(20, 20);\n *     var vec2 = vec1.copy(vec1);\n *\n *     vec2.toString();\n *     // => x:20, y:20\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.copy = function (vec) {\n\tthis.copyX(vec);\n\tthis.copyY(vec);\n\treturn this;\n};\n\n/**\n * Sets the vector to zero (0,0)\n *\n * ### Examples:\n *     var vec1 = new Victor(10, 10);\n *\t\t var1.zero();\n *     vec1.toString();\n *     // => x:0, y:0\n *\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.zero = function () {\n\tthis.x = this.y = 0;\n\treturn this;\n};\n\n/**\n * Calculates the dot product of this vector and another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.dot(vec2);\n *     // => 23000\n *\n * @param {Victor} vector The second vector\n * @return {Number} Dot product\n * @api public\n */\nVictor.prototype.dot = function (vec2) {\n\treturn this.x * vec2.x + this.y * vec2.y;\n};\n\nVictor.prototype.cross = function (vec2) {\n\treturn (this.x * vec2.y ) - (this.y * vec2.x );\n};\n\n/**\n * Projects a vector onto another vector, setting itself to the result.\n *\n * ### Examples:\n *     var vec = new Victor(100, 0);\n *     var vec2 = new Victor(100, 100);\n *\n *     vec.projectOnto(vec2);\n *     vec.toString();\n *     // => x:50, y:50\n *\n * @param {Victor} vector The other vector you want to project this vector onto\n * @return {Victor} `this` for chaining capabilities\n * @api public\n */\nVictor.prototype.projectOnto = function (vec2) {\n    var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));\n    this.x = coeff * vec2.x;\n    this.y = coeff * vec2.y;\n    return this;\n};\n\n\nVictor.prototype.horizontalAngle = function () {\n\treturn Math.atan2(this.y, this.x);\n};\n\nVictor.prototype.horizontalAngleDeg = function () {\n\treturn radian2degrees(this.horizontalAngle());\n};\n\nVictor.prototype.verticalAngle = function () {\n\treturn Math.atan2(this.x, this.y);\n};\n\nVictor.prototype.verticalAngleDeg = function () {\n\treturn radian2degrees(this.verticalAngle());\n};\n\nVictor.prototype.angle = Victor.prototype.horizontalAngle;\nVictor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;\nVictor.prototype.direction = Victor.prototype.horizontalAngle;\n\nVictor.prototype.rotate = function (angle) {\n\tvar nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));\n\tvar ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));\n\n\tthis.x = nx;\n\tthis.y = ny;\n\n\treturn this;\n};\n\nVictor.prototype.rotateDeg = function (angle) {\n\tangle = degrees2radian(angle);\n\treturn this.rotate(angle);\n};\n\nVictor.prototype.rotateTo = function(rotation) {\n\treturn this.rotate(rotation-this.angle());\n};\n\nVictor.prototype.rotateToDeg = function(rotation) {\n\trotation = degrees2radian(rotation);\n\treturn this.rotateTo(rotation);\n};\n\nVictor.prototype.rotateBy = function (rotation) {\n\tvar angle = this.angle() + rotation;\n\n\treturn this.rotate(angle);\n};\n\nVictor.prototype.rotateByDeg = function (rotation) {\n\trotation = degrees2radian(rotation);\n\treturn this.rotateBy(rotation);\n};\n\n/**\n * Calculates the distance of the X axis between this vector and another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.distanceX(vec2);\n *     // => -100\n *\n * @param {Victor} vector The second vector\n * @return {Number} Distance\n * @api public\n */\nVictor.prototype.distanceX = function (vec) {\n\treturn this.x - vec.x;\n};\n\n/**\n * Same as `distanceX()` but always returns an absolute number\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.absDistanceX(vec2);\n *     // => 100\n *\n * @param {Victor} vector The second vector\n * @return {Number} Absolute distance\n * @api public\n */\nVictor.prototype.absDistanceX = function (vec) {\n\treturn Math.abs(this.distanceX(vec));\n};\n\n/**\n * Calculates the distance of the Y axis between this vector and another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.distanceY(vec2);\n *     // => -10\n *\n * @param {Victor} vector The second vector\n * @return {Number} Distance\n * @api public\n */\nVictor.prototype.distanceY = function (vec) {\n\treturn this.y - vec.y;\n};\n\n/**\n * Same as `distanceY()` but always returns an absolute number\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.distanceY(vec2);\n *     // => 10\n *\n * @param {Victor} vector The second vector\n * @return {Number} Absolute distance\n * @api public\n */\nVictor.prototype.absDistanceY = function (vec) {\n\treturn Math.abs(this.distanceY(vec));\n};\n\n/**\n * Calculates the euclidean distance between this vector and another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.distance(vec2);\n *     // => 100.4987562112089\n *\n * @param {Victor} vector The second vector\n * @return {Number} Distance\n * @api public\n */\nVictor.prototype.distance = function (vec) {\n\treturn Math.sqrt(this.distanceSq(vec));\n};\n\n/**\n * Calculates the squared euclidean distance between this vector and another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(200, 60);\n *\n *     vec1.distanceSq(vec2);\n *     // => 10100\n *\n * @param {Victor} vector The second vector\n * @return {Number} Distance\n * @api public\n */\nVictor.prototype.distanceSq = function (vec) {\n\tvar dx = this.distanceX(vec),\n\t\tdy = this.distanceY(vec);\n\n\treturn dx * dx + dy * dy;\n};\n\n/**\n * Calculates the length or magnitude of the vector\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.length();\n *     // => 111.80339887498948\n *\n * @return {Number} Length / Magnitude\n * @api public\n */\nVictor.prototype.length = function () {\n\treturn Math.sqrt(this.lengthSq());\n};\n\n/**\n * Squared length / magnitude\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *\n *     vec.lengthSq();\n *     // => 12500\n *\n * @return {Number} Length / Magnitude\n * @api public\n */\nVictor.prototype.lengthSq = function () {\n\treturn this.x * this.x + this.y * this.y;\n};\n\nVictor.prototype.magnitude = Victor.prototype.length;\n\n/**\n * Returns a true if vector is (0, 0)\n *\n * ### Examples:\n *     var vec = new Victor(100, 50);\n *     vec.zero();\n *\n *     // => true\n *\n * @return {Boolean}\n * @api public\n */\nVictor.prototype.isZero = function() {\n\treturn this.x === 0 && this.y === 0;\n};\n\n/**\n * Returns a true if this vector is the same as another\n *\n * ### Examples:\n *     var vec1 = new Victor(100, 50);\n *     var vec2 = new Victor(100, 50);\n *     vec1.isEqualTo(vec2);\n *\n *     // => true\n *\n * @return {Boolean}\n * @api public\n */\nVictor.prototype.isEqualTo = function(vec2) {\n\treturn this.x === vec2.x && this.y === vec2.y;\n};\n\n/**\n * # Utility Methods\n */\n\n/**\n * Returns an string representation of the vector\n *\n * ### Examples:\n *     var vec = new Victor(10, 20);\n *\n *     vec.toString();\n *     // => x:10, y:20\n *\n * @return {String}\n * @api public\n */\nVictor.prototype.toString = function () {\n\treturn 'x:' + this.x + ', y:' + this.y;\n};\n\n/**\n * Returns an array representation of the vector\n *\n * ### Examples:\n *     var vec = new Victor(10, 20);\n *\n *     vec.toArray();\n *     // => [10, 20]\n *\n * @return {Array}\n * @api public\n */\nVictor.prototype.toArray = function () {\n\treturn [ this.x, this.y ];\n};\n\n/**\n * Returns an object representation of the vector\n *\n * ### Examples:\n *     var vec = new Victor(10, 20);\n *\n *     vec.toObject();\n *     // => { x: 10, y: 20 }\n *\n * @return {Object}\n * @api public\n */\nVictor.prototype.toObject = function () {\n\treturn { x: this.x, y: this.y };\n};\n\n\nvar degrees = 180 / Math.PI;\n\nfunction random (min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nfunction radian2degrees (rad) {\n\treturn rad * degrees;\n}\n\nfunction degrees2radian (deg) {\n\treturn deg / degrees;\n}\n\n\n//# sourceURL=webpack:///./node_modules/victor/index.js?");

/***/ }),

/***/ "./src/entry.ts":
/*!**********************!*\
  !*** ./src/entry.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var victor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! victor */ \"./node_modules/victor/index.js\");\n/* harmony import */ var victor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(victor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_units_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/units/unit */ \"./src/game/units/unit.ts\");\n\r\n\r\nconsole.log(victor__WEBPACK_IMPORTED_MODULE_0___default.a);\r\nvar u = new _game_units_unit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconsole.log(u);\r\nwindow.unit = u;\r\nconsole.log(\"OKt\");\r\n\n\n//# sourceURL=webpack:///./src/entry.ts?");

/***/ }),

/***/ "./src/game/units/unit-interface.ts":
/*!******************************************!*\
  !*** ./src/game/units/unit-interface.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar UnitInterface = /** @class */ (function () {\r\n    function UnitInterface(unit) {\r\n        this.unit = unit;\r\n    }\r\n    Object.defineProperty(UnitInterface.prototype, \"health\", {\r\n        get: function () {\r\n            return this.unit.state.health;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return UnitInterface;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnitInterface);\r\n\n\n//# sourceURL=webpack:///./src/game/units/unit-interface.ts?");

/***/ }),

/***/ "./src/game/units/unit.ts":
/*!********************************!*\
  !*** ./src/game/units/unit.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var victor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! victor */ \"./node_modules/victor/index.js\");\n/* harmony import */ var victor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(victor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _unit_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-interface */ \"./src/game/units/unit-interface.ts\");\n\r\n\r\nvar Unit = /** @class */ (function () {\r\n    function Unit(config) {\r\n        this.config = config;\r\n        this.position = new victor__WEBPACK_IMPORTED_MODULE_0___default.a(0, 0);\r\n        this.interface = new _unit_interface__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n        this.state = {\r\n            health: config.health\r\n        };\r\n    }\r\n    return Unit;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unit);\r\n\n\n//# sourceURL=webpack:///./src/game/units/unit.ts?");

/***/ })

/******/ });