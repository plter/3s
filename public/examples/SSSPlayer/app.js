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
/******/ 	return __webpack_require__(__webpack_require__.s = "./SubProjects/FrontEnd/SSSPlayer/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/Constants.js":
/*!*********************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/Constants.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    MIME_TYPE: 'video/webm; codecs=\"opus,vp8\"'\n});\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/Constants.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/components/SSSPlayer.js":
/*!********************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/components/SSSPlayer.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/SSSPlayer.html */ \"./SubProjects/FrontEnd/SSSPlayer/lib/html/SSSPlayer.html\");\n/* harmony import */ var _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipelines/ArrayBufferToVideoElement */ \"./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/ArrayBufferToVideoElement.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ \"./SubProjects/FrontEnd/SSSPlayer/lib/Constants.js\");\n/* harmony import */ var _pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipelines/MediaStreamBlobToArrayBuffer */ \"./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/MediaStreamBlobToArrayBuffer.js\");\n\n\n\n\n\nVue.component(\"sssplayer\", {\n    template: _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    props: [\"width\", 'height'],\n    mounted() {\n        this._arrayBufferToVideoPipeline = new _pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$refs.html5video);\n        this._blobToArrayBufferPipeline = new _pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this._gotBufferHandler.bind(this));\n    },\n\n\n    methods: {\n        /**\n         *\n         * @param buffer {ArrayBuffer}\n         * @param isFirstPart {Boolean}\n         */\n        appendBuffer(buffer, isFirstPart = false) {\n            this._arrayBufferToVideoPipeline.addBuffer(buffer, isFirstPart);\n        },\n\n        /**\n         *\n         * @param stream {MediaStream}\n         */\n        setLocalStream(stream) {\n            this._localStream = stream;\n            return this;\n        },\n\n        refresh() {\n            if (this._currentMediaRecorder) {\n                this._currentMediaRecorder.ondataavailable = null;\n                this._currentMediaRecorder.stop();\n            }\n\n            let mr = this._currentMediaRecorder = new MediaRecorder(this._localStream, {mimeType: _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MIME_TYPE});\n            mr._isFirstBuffer = true;\n            mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);\n            mr.start(200);\n            return this;\n        },\n\n        _mediaRecorderDataAvailableHandler(e) {\n            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);\n            e.target._isFirstBuffer = false;\n        },\n\n        _gotBufferHandler(arrayBuffer, isFirstPart) {\n            this.appendBuffer(arrayBuffer, isFirstPart);\n        },\n    }\n});\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/components/SSSPlayer.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/html/SSSPlayer.html":
/*!****************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/html/SSSPlayer.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"sssplayer\\\">\\n    <video ref=\\\"html5video\\\" autoplay :width=\\\"width||400\\\" :height=\\\"height||300\\\"></video>\\n</div>\";\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/html/SSSPlayer.html?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/ArrayBufferToVideoElement.js":
/*!***********************************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/ArrayBufferToVideoElement.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArrayBufferToVideoElement; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./SubProjects/FrontEnd/SSSPlayer/lib/Constants.js\");\n\n\nclass ArrayBufferToVideoElement {\n\n    /**\n     *\n     * @param targetVideoElement {HTMLVideoElement}\n     */\n    constructor(targetVideoElement) {\n        this._targetVideoElement = targetVideoElement;\n        this._bufferedPool = null;\n        this._mediaSourceOpened = false;\n    }\n\n    addBuffer(arrayBuffer, isFirstBuffer = false) {\n        if (!isFirstBuffer) {\n            if (this._mediaSourceOpened) {\n                this._currentSourceBuffer.appendBuffer(arrayBuffer);\n            } else {\n                this._bufferedPool.push(arrayBuffer);\n            }\n        } else {\n            this._bufferedPool = [];\n            this._mediaSource = new MediaSource();\n            this._mediaSourceOpened = false;\n            this._bufferedPool.push(arrayBuffer);\n\n            this._mediaSource.addEventListener(\"sourceopen\", function (e) {\n                this._currentSourceBuffer = this._mediaSource.addSourceBuffer(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MIME_TYPE);\n\n                while (this._bufferedPool.length) {\n                    this._currentSourceBuffer.appendBuffer(this._bufferedPool.pop());\n                }\n                this._mediaSourceOpened = true;\n            }.bind(this));\n\n            if (this._targetVideoElement.src) {\n                URL.revokeObjectURL(this._targetVideoElement.src);\n            }\n            this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);\n            this._targetVideoElement.play();//立即播放，在Firefox中等待自动播放时间较久\n        }\n    }\n}\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/ArrayBufferToVideoElement.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/MediaStreamBlobToArrayBuffer.js":
/*!**************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/MediaStreamBlobToArrayBuffer.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamBlobToArrayBuffer; });\n/* harmony import */ var _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/MediaStreamPartBlob */ \"./SubProjects/FrontEnd/SSSPlayer/lib/vo/MediaStreamPartBlob.js\");\n\n\nclass MediaStreamBlobToArrayBuffer {\n    constructor(targetCallback) {\n        this._fifo = [];\n        this._callback = targetCallback;\n        this._reader = new FileReader();\n        this._reader.onload = this._dataTranscoded.bind(this);\n        this._currentReadingMediaStreamPartBlob = null;\n    }\n\n    /**\n     *\n     * @param blob {Blob}\n     * @param isFirstPart {Boolean} 是否为媒体流的第一段\n     */\n    appendBlob(blob, isFirstPart) {\n        this._fifo.push(_vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(blob, isFirstPart));\n        if (this._reader.readyState != 1) {\n            this._transcodeFirstBlob();\n        } else {\n            console.log(\"FileReader is loading\");\n        }\n    }\n\n    _transcodeFirstBlob() {\n        if (this._fifo.length) {\n            this._currentReadingMediaStreamPartBlob = this._fifo.shift();\n            this._reader.readAsArrayBuffer(this._currentReadingMediaStreamPartBlob.blob);\n        }\n    }\n\n    _dataTranscoded() {\n        if (this._callback) {\n            this._callback(this._reader.result, this._currentReadingMediaStreamPartBlob.isFirstPart);\n            _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recycle(this._currentReadingMediaStreamPartBlob);\n\n            this._transcodeFirstBlob();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/pipelines/MediaStreamBlobToArrayBuffer.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/tools.js":
/*!*****************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/tools.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    sleep(ms) {\n        return new Promise(resolve => {\n            setTimeout(resolve, ms);\n        });\n    }\n});\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/tools.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/lib/vo/MediaStreamPartBlob.js":
/*!**********************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/lib/vo/MediaStreamPartBlob.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamPartBlob; });\nclass MediaStreamPartBlob {\n\n    constructor(blob, isFirstPart) {\n        this.blob = blob;\n        this.isFirstPart = isFirstPart;\n    }\n}\n\nMediaStreamPartBlob.__pool = [];\n\n/**\n * @param blob {Blob}\n * @param isFirstPart {Boolean}\n * @returns {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.get = function (blob, isFirstPart) {\n    /**\n     * @type {MediaStreamPartBlob}\n     */\n    let obj = null;\n    if (MediaStreamPartBlob.__pool.length) {\n        obj = MediaStreamPartBlob.__pool.pop();\n        obj.blob = blob;\n        obj.isFirstPart = isFirstPart;\n    } else {\n        obj = new MediaStreamPartBlob(blob, isFirstPart);\n    }\n\n    return obj;\n};\n\n\n/**\n * @param blob {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.recycle = function (blob) {\n    MediaStreamPartBlob.__pool.push(blob);\n};\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/lib/vo/MediaStreamPartBlob.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/src/components/VueApp.js":
/*!*****************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/src/components/VueApp.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/VueApp.html */ \"./SubProjects/FrontEnd/SSSPlayer/src/html/VueApp.html\");\n/* harmony import */ var _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_VueApp_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_components_SSSPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/components/SSSPlayer */ \"./SubProjects/FrontEnd/SSSPlayer/lib/components/SSSPlayer.js\");\n/* harmony import */ var _lib_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/tools */ \"./SubProjects/FrontEnd/SSSPlayer/lib/tools.js\");\n\n\n\n\nVue.component(\"vueapp\", {\n    template: _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    mounted() {\n        this._asyncInit();\n    },\n\n    methods: {\n        btnRefreshClickedHandler(e) {\n            this.$refs.player.refresh();\n        },\n\n        async _asyncInit() {\n            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});\n            this.$refs.player.setLocalStream(this._stream);\n\n            await _lib_tools__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。\n            this.$refs.player.refresh();\n        }\n    }\n});\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/src/components/VueApp.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/src/html/VueApp.html":
/*!*************************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/src/html/VueApp.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <sssplayer ref=\\\"player\\\"></sssplayer>\\n    <div>\\n        <button class=\\\"btn btn-primary\\\" @click=\\\"btnRefreshClickedHandler\\\">Refresh</button>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/src/html/VueApp.html?");

/***/ }),

/***/ "./SubProjects/FrontEnd/SSSPlayer/src/index.js":
/*!*****************************************************!*\
  !*** ./SubProjects/FrontEnd/SSSPlayer/src/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VueApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VueApp */ \"./SubProjects/FrontEnd/SSSPlayer/src/components/VueApp.js\");\n\n\nnew Vue({\n    el: \"vueapp\"\n});\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/SSSPlayer/src/index.js?");

/***/ })

/******/ });