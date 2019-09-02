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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/Constants.js":
/*!***************************!*\
  !*** ../lib/Constants.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    MIME_TYPE: 'video/webm; codecs=\"opus,vp8\"',\n    MEDIA_RECORDER_TIME_SLICE: 50,//ms，单位是毫秒\n    MAX_SKIP_TIME: 0.5//当播放器当前时间延后超过该值时，则直接跳至最新时间，以保持实时。单位是秒\n\n});\n\n//# sourceURL=webpack:///../lib/Constants.js?");

/***/ }),

/***/ "../lib/pipelines/ArrayBufferToVideoElement.js":
/*!*****************************************************!*\
  !*** ../lib/pipelines/ArrayBufferToVideoElement.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArrayBufferToVideoElement; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"../lib/Constants.js\");\n\n\nclass ArrayBufferToVideoElement {\n\n    /**\n     *\n     * @param targetVideoElement {HTMLVideoElement}\n     */\n    constructor(targetVideoElement) {\n        this._targetVideoElement = targetVideoElement;\n        this._bufferedPool = [];\n        /**\n         * @type {SourceBuffer}\n         * @private\n         */\n        this._currentSourceBuffer = null;\n        /**\n         * @type {MediaSource}\n         * @private\n         */\n        this._mediaSource = null;\n    }\n\n    appendBuffer(arrayBuffer, isFirstBuffer = false) {\n        if (isFirstBuffer) {\n            this._createNewMediaSource();\n        }\n\n        this._bufferedPool.push(arrayBuffer);\n        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();\n    }\n\n    _onMediaSourceOpen(e) {\n        this._currentSourceBuffer = this._mediaSource.addSourceBuffer(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MIME_TYPE);\n        this._currentSourceBuffer.onupdate = this._onSourceBufferUpdate.bind(this);\n\n        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();\n        this._mediaSourceOpened = true;\n    }\n\n    _renewPlayerURL() {\n        if (this._targetVideoElement.src) {\n            URL.revokeObjectURL(this._targetVideoElement.src);\n        }\n        this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);\n        this._targetVideoElement.play();//立即播放，该函数会触发 sourceopen 事件\n    }\n\n    _getFirstBufferFromPoolAndAppendItToSourceBuffer() {\n        if (this._mediaSourceOpened && this._bufferedPool.length) {\n            if (!this._currentSourceBuffer.updating) {\n                let first = this._bufferedPool.shift();\n                if (this._targetVideoElement.error) {\n                    console.warn(this._targetVideoElement.error);\n                }\n                this._currentSourceBuffer.appendBuffer(first);\n            } else {\n                console.warn(\"SourceBuffer is busy now.\");\n            }\n        }\n    }\n\n    _onSourceBufferUpdate(e) {\n        this._seekToMediaEndIfFallBehind();\n        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();//循环读取第一段数据\n    }\n\n\n    /**\n     * 为了提高刷新的速度，在每次获取新视频头时创建新 MediaSource 和新 SourceBuffer\n     * @private\n     */\n    _createNewMediaSource() {\n        this._bufferedPool.length = 0;\n        this._mediaSource = new MediaSource();\n        this._mediaSourceOpened = false;\n\n        this._mediaSource.onsourceopen = this._onMediaSourceOpen.bind(this);\n        this._renewPlayerURL();\n    }\n\n    _seekToMediaEndIfFallBehind() {\n        let r = this._targetVideoElement.seekable;\n        if (r.length) {\n            let end = r.end(0);\n            if ((end - this._targetVideoElement.currentTime) > _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MAX_SKIP_TIME) {\n                let skipped = end - this._targetVideoElement.currentTime;\n                this._targetVideoElement.currentTime = end;\n                console.warn(`Skip ${skipped} seconds`);\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///../lib/pipelines/ArrayBufferToVideoElement.js?");

/***/ }),

/***/ "../lib/pipelines/MediaStreamBlobToArrayBuffer.js":
/*!********************************************************!*\
  !*** ../lib/pipelines/MediaStreamBlobToArrayBuffer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamBlobToArrayBuffer; });\n/* harmony import */ var _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/MediaStreamPartBlob */ \"../lib/vo/MediaStreamPartBlob.js\");\n\n\nclass MediaStreamBlobToArrayBuffer {\n    constructor(targetCallback) {\n        this._fifo = [];\n        this._callback = targetCallback;\n        this._reader = new FileReader();\n        this._reader.onload = this._dataTranscoded.bind(this);\n        this._currentReadingMediaStreamPartBlob = null;\n    }\n\n    /**\n     *\n     * @param blob {Blob}\n     * @param isFirstPart {Boolean} 是否为媒体流的第一段\n     */\n    appendBlob(blob, isFirstPart) {\n        this._fifo.push(_vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(blob, isFirstPart));\n        if (this._reader.readyState != 1) {\n            this._transcodeFirstBlob();\n        } else {\n            console.log(\"FileReader is loading\");\n        }\n    }\n\n    _transcodeFirstBlob() {\n        if (this._fifo.length) {\n            this._currentReadingMediaStreamPartBlob = this._fifo.shift();\n            this._reader.readAsArrayBuffer(this._currentReadingMediaStreamPartBlob.blob);\n        }\n    }\n\n    _dataTranscoded() {\n        if (this._callback) {\n            this._callback(this._reader.result, this._currentReadingMediaStreamPartBlob.isFirstPart);\n            _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recycle(this._currentReadingMediaStreamPartBlob);\n\n            this._transcodeFirstBlob();\n        }\n    }\n}\n\n//# sourceURL=webpack:///../lib/pipelines/MediaStreamBlobToArrayBuffer.js?");

/***/ }),

/***/ "../lib/vo/MediaStreamPartBlob.js":
/*!****************************************!*\
  !*** ../lib/vo/MediaStreamPartBlob.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamPartBlob; });\nclass MediaStreamPartBlob {\n\n    constructor(blob, isFirstPart) {\n        this.blob = blob;\n        this.isFirstPart = isFirstPart;\n    }\n}\n\nMediaStreamPartBlob.__pool = [];\n\n/**\n * @param blob {Blob}\n * @param isFirstPart {Boolean}\n * @returns {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.get = function (blob, isFirstPart) {\n    /**\n     * @type {MediaStreamPartBlob}\n     */\n    let obj = null;\n    if (MediaStreamPartBlob.__pool.length) {\n        obj = MediaStreamPartBlob.__pool.pop();\n        obj.blob = blob;\n        obj.isFirstPart = isFirstPart;\n    } else {\n        obj = new MediaStreamPartBlob(blob, isFirstPart);\n    }\n\n    return obj;\n};\n\n\n/**\n * @param blob {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.recycle = function (blob) {\n    MediaStreamPartBlob.__pool.push(blob);\n};\n\n//# sourceURL=webpack:///../lib/vo/MediaStreamPartBlob.js?");

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    MIME_TYPE: 'video/webm; codecs=\"opus,vp8\"'\n});\n\n//# sourceURL=webpack:///./src/Constants.js?");

/***/ }),

/***/ "./src/components/ViewHTML5MediaRecordDataAsStream.js":
/*!************************************************************!*\
  !*** ./src/components/ViewHTML5MediaRecordDataAsStream.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_ViewHTML5MediaRecordDataAsStream_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/ViewHTML5MediaRecordDataAsStream.html */ \"./src/html/ViewHTML5MediaRecordDataAsStream.html\");\n/* harmony import */ var _html_ViewHTML5MediaRecordDataAsStream_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_ViewHTML5MediaRecordDataAsStream_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.js\");\n/* harmony import */ var _lib_pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/pipelines/ArrayBufferToVideoElement */ \"../lib/pipelines/ArrayBufferToVideoElement.js\");\n/* harmony import */ var _lib_pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/pipelines/MediaStreamBlobToArrayBuffer */ \"../lib/pipelines/MediaStreamBlobToArrayBuffer.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools */ \"./src/tools.js\");\n\n\n\n\n\n\nVue.component(\"viewhtml5mediarecorddataasstream\", {\n    template: _html_ViewHTML5MediaRecordDataAsStream_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    created() {\n    },\n\n    data() {\n        return {\n            recording: false,\n        }\n    },\n\n    mounted() {\n        this._pipeline = new _lib_pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.$refs.preview);\n        this._blobToArrayBufferPipeline = new _lib_pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this._onGotLocalBufferHandler.bind(this));\n\n        this._asyncInit();\n    },\n\n    methods: {\n        btnRefreshClickedHandler(e) {\n            if (this._currentMediaRecorder) {\n                this._currentMediaRecorder.ondataavailable = null;\n                this._currentMediaRecorder.stop();\n            }\n\n            let mr = this._currentMediaRecorder = new MediaRecorder(this._stream, {mimeType: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MIME_TYPE});\n            mr._isFirstBuffer = true;\n            mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);\n            mr.start(200);\n            this.recording = true;\n        },\n\n        _mediaRecorderDataAvailableHandler(e) {\n            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);\n            e.target._isFirstBuffer = false;\n        },\n\n        _onGotLocalBufferHandler(arrayBuffer, isFirstPart) {\n            this._pipeline.appendBuffer(arrayBuffer, isFirstPart);\n        },\n\n        async _asyncInit() {\n            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});\n\n            await _tools__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。\n            this.btnRefreshClickedHandler();\n        },\n\n        btnPauseClickedHandler(e) {\n            if (this._currentMediaRecorder) {\n                this._currentMediaRecorder.pause();\n            }\n            this.recording = false;\n        },\n\n        btnResumeClickedHandler(e) {\n            if (this._currentMediaRecorder) {\n                this._currentMediaRecorder.resume();\n            }\n            this.recording = true;\n        }\n    },\n});\n\n//# sourceURL=webpack:///./src/components/ViewHTML5MediaRecordDataAsStream.js?");

/***/ }),

/***/ "./src/html/ViewHTML5MediaRecordDataAsStream.html":
/*!********************************************************!*\
  !*** ./src/html/ViewHTML5MediaRecordDataAsStream.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"margin: 10px;\\\">\\n    <video width=\\\"400\\\" height=\\\"300\\\" autoplay ref=\\\"preview\\\"></video>\\n    <div>\\n        <button class=\\\"btn btn-primary\\\" @click=\\\"btnRefreshClickedHandler\\\">Refresh</button>\\n        <button class=\\\"btn btn-primary\\\" @click=\\\"btnPauseClickedHandler\\\" :disabled=\\\"!recording\\\">Pause</button>\\n        <button class=\\\"btn btn-primary\\\" @click=\\\"btnResumeClickedHandler\\\" :disabled=\\\"recording\\\">Resume</button>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/html/ViewHTML5MediaRecordDataAsStream.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ViewHTML5MediaRecordDataAsStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ViewHTML5MediaRecordDataAsStream */ \"./src/components/ViewHTML5MediaRecordDataAsStream.js\");\n\n\nnew Vue({\n    el: \"viewhtml5mediarecorddataasstream\"\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    sleep(ms) {\n        return new Promise(resolve => {\n            setTimeout(resolve, ms);\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/tools.js?");

/***/ })

/******/ });