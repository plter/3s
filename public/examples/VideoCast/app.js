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

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*********************************************************************************************!*\
  !*** /Work/gitroot/github/plter/3s/node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".card-header-btn {\\n    cursor: pointer;\\n}\\n\\n.card-header-btn:hover {\\n    color: dodgerblue;\\n}\\n\\n\\n.card-header {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?/Work/gitroot/github/plter/3s/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************************!*\
  !*** /Work/gitroot/github/plter/3s/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:////Work/gitroot/github/plter/3s/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************************!*\
  !*** /Work/gitroot/github/plter/3s/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:////Work/gitroot/github/plter/3s/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./lib/Constants.js":
/*!**************************!*\
  !*** ./lib/Constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    MIME_TYPE: 'video/webm; codecs=\"opus,vp8\"',\n    MEDIA_RECORDER_TIME_SLICE: 100\n});\n\n//# sourceURL=webpack:///./lib/Constants.js?");

/***/ }),

/***/ "./lib/components/SSSPlayer.js":
/*!*************************************!*\
  !*** ./lib/components/SSSPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/SSSPlayer.html */ \"./lib/html/SSSPlayer.html\");\n/* harmony import */ var _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipelines/ArrayBufferToVideoElement */ \"./lib/pipelines/ArrayBufferToVideoElement.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ \"./lib/Constants.js\");\n/* harmony import */ var _pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipelines/MediaStreamBlobToArrayBuffer */ \"./lib/pipelines/MediaStreamBlobToArrayBuffer.js\");\n/* harmony import */ var _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum/StreamSourceTypes */ \"./lib/enum/StreamSourceTypes.js\");\n/* harmony import */ var _errors_RemoteStreamNotSetError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/RemoteStreamNotSetError */ \"./lib/errors/RemoteStreamNotSetError.js\");\n/* harmony import */ var _errors_LocalStreamNotSetError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors/LocalStreamNotSetError */ \"./lib/errors/LocalStreamNotSetError.js\");\n/* harmony import */ var _events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events/SocketIOEvents */ \"./lib/events/SocketIOEvents.js\");\n/* harmony import */ var _errors_RemoteStreamAlreadyAttached__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../errors/RemoteStreamAlreadyAttached */ \"./lib/errors/RemoteStreamAlreadyAttached.js\");\n/* harmony import */ var _errors_StreamIsInvalid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../errors/StreamIsInvalid */ \"./lib/errors/StreamIsInvalid.js\");\n/* harmony import */ var _errors_RemoteStreamSocketIDNotSetError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../errors/RemoteStreamSocketIDNotSetError */ \"./lib/errors/RemoteStreamSocketIDNotSetError.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst SSSPlayer = Vue.component(\"sssplayer\", {\n    template: _html_SSSPlayer_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    props: [\"width\", 'height', 'muted'],\n    mounted() {\n        this.$refs.html5video.muted = this.muted;\n\n        this._arrayBufferToVideoPipeline = new _pipelines_ArrayBufferToVideoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$refs.html5video);\n        this._blobToArrayBufferPipeline = new _pipelines_MediaStreamBlobToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this._onGotLocalBufferHandler.bind(this));\n        this._currentStreamSourceType = _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LOCAL;\n\n        this._socketioListeners = {\n            onGotRemoteStreamHandler: this._onGotRemoteStreamHandler.bind(this),\n            onRemoteRequestRefreshHandler: this._onRemoteRequestRefreshHandler.bind(this)\n        };\n    },\n\n    data() {\n        return {\n            /**\n             * 是否向服务器推流\n             */\n            pushStream: false\n        };\n    },\n\n\n    methods: {\n        /**\n         *\n         * @param buffer {ArrayBuffer}\n         * @param isFirstPart {Boolean}\n         */\n        appendBuffer(buffer, isFirstPart = false) {\n            try {\n                this._arrayBufferToVideoPipeline.appendBuffer(buffer, isFirstPart);\n            } catch (e) {\n                console.warn(e);\n            }\n            return this;\n        },\n\n        /**\n         *\n         * @param stream {MediaStream}\n         */\n        setLocalStream(stream) {\n            this._localStream = stream;\n            return this;\n        },\n\n\n        attachRemoteStream(socketio) {\n            if (this._socketio) {\n                throw new _errors_RemoteStreamAlreadyAttached__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n            }\n\n            this._socketio = socketio;\n            this._socketio.on(_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__[\"default\"].STREAM, this._socketioListeners.onGotRemoteStreamHandler);\n            this._socketio.on(_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__[\"default\"].REFRESH, this._socketioListeners.onRemoteRequestRefreshHandler);\n            return this;\n        },\n\n        detachRemoteStream() {\n            if (this._socketio) {\n                this._socketio.off(_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__[\"default\"].STREAM, this._socketioListeners.onGotRemoteStreamHandler);\n                this._socketio.off(_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__[\"default\"].REFRESH, this._socketioListeners.onRemoteRequestRefreshHandler);\n                this._socketio = null;\n            }\n            return this;\n        },\n\n        refreshLocal() {\n            if (this._localStream) {\n                if (this._currentMediaRecorder) {\n                    this._currentMediaRecorder.ondataavailable = null;\n                    this._currentMediaRecorder.stop();\n                }\n\n                let mr = this._currentMediaRecorder = new MediaRecorder(this._localStream, {mimeType: _Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MIME_TYPE});\n                mr._isFirstBuffer = true;\n                mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);\n                mr.start(_Constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MEDIA_RECORDER_TIME_SLICE);\n            } else {\n                throw new _errors_LocalStreamNotSetError__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n            }\n            return this;\n        },\n\n        refreshRemote() {\n            if (this._currentRemoteStreamSocketID) {\n                if (this._socketio) {\n                    this._socketio.emit(_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_7__[\"default\"].REFRESH, this._currentRemoteStreamSocketID);\n                } else {\n                    throw new _errors_RemoteStreamNotSetError__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n                }\n            } else {\n                throw new _errors_RemoteStreamSocketIDNotSetError__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n            }\n        },\n\n        playLocal() {\n            this._currentStreamSourceType = _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LOCAL;\n\n            this.refreshLocal();\n        },\n\n\n        playRemote(socketid) {\n            this._currentRemoteStreamSocketID = socketid;\n            this._currentStreamSourceType = _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].REMOTE;\n\n            this.refreshRemote();\n        },\n\n        _mediaRecorderDataAvailableHandler(e) {\n            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);\n            e.target._isFirstBuffer = false;\n        },\n\n        _onGotLocalBufferHandler(arrayBuffer, isFirstPart) {\n            if (this._currentStreamSourceType == _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LOCAL) {\n                this.appendBuffer(arrayBuffer, isFirstPart);\n            }\n\n            if (this.pushStream) {\n                if (this._socketio) {\n                    this._socketio.emit(\"stream\", arrayBuffer, isFirstPart);\n                }\n            }\n        },\n\n        _onGotRemoteStreamHandler(socketid, arrayBuffer, isFirstPart) {\n            if (this._currentStreamSourceType == _enum_StreamSourceTypes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].REMOTE) {\n                if (socketid == this._currentRemoteStreamSocketID) {\n                    this.appendBuffer(arrayBuffer, isFirstPart);\n                }\n            }\n        },\n\n\n        _onRemoteRequestRefreshHandler() {\n            if (this._localStream) {\n                this.refreshLocal();\n            }\n        }\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SSSPlayer);\n\n//# sourceURL=webpack:///./lib/components/SSSPlayer.js?");

/***/ }),

/***/ "./lib/enum/StreamSourceTypes.js":
/*!***************************************!*\
  !*** ./lib/enum/StreamSourceTypes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst StreamSourceTypes = {\n    REMOTE: \"remote\",\n    LOCAL: \"local\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StreamSourceTypes);\n\n//# sourceURL=webpack:///./lib/enum/StreamSourceTypes.js?");

/***/ }),

/***/ "./lib/errors/LocalStreamNotSetError.js":
/*!**********************************************!*\
  !*** ./lib/errors/LocalStreamNotSetError.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LocalStreamNotSetError; });\n/* harmony import */ var _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPlayerError */ \"./lib/errors/SSSPlayerError.js\");\n\n\nclass LocalStreamNotSetError extends _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super(\"Local stream not set.\");\n    }\n}\n\n//# sourceURL=webpack:///./lib/errors/LocalStreamNotSetError.js?");

/***/ }),

/***/ "./lib/errors/RemoteStreamAlreadyAttached.js":
/*!***************************************************!*\
  !*** ./lib/errors/RemoteStreamAlreadyAttached.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoteStreamNotSetError; });\n/* harmony import */ var _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPlayerError */ \"./lib/errors/SSSPlayerError.js\");\n\n\nclass RemoteStreamNotSetError extends _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super(\"Remote stream already attached.\");\n    }\n}\n\n//# sourceURL=webpack:///./lib/errors/RemoteStreamAlreadyAttached.js?");

/***/ }),

/***/ "./lib/errors/RemoteStreamNotSetError.js":
/*!***********************************************!*\
  !*** ./lib/errors/RemoteStreamNotSetError.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoteStreamNotSetError; });\n/* harmony import */ var _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPlayerError */ \"./lib/errors/SSSPlayerError.js\");\n\n\nclass RemoteStreamNotSetError extends _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super(\"Remote stream socket id not set.\");\n    }\n}\n\n//# sourceURL=webpack:///./lib/errors/RemoteStreamNotSetError.js?");

/***/ }),

/***/ "./lib/errors/RemoteStreamSocketIDNotSetError.js":
/*!*******************************************************!*\
  !*** ./lib/errors/RemoteStreamSocketIDNotSetError.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoteStreamNotSetError; });\n/* harmony import */ var _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPlayerError */ \"./lib/errors/SSSPlayerError.js\");\n\n\nclass RemoteStreamNotSetError extends _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super(\"Remote stream not set.\");\n    }\n}\n\n//# sourceURL=webpack:///./lib/errors/RemoteStreamSocketIDNotSetError.js?");

/***/ }),

/***/ "./lib/errors/SSSPlayerError.js":
/*!**************************************!*\
  !*** ./lib/errors/SSSPlayerError.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SSSPlayerError; });\nclass SSSPlayerError extends Error {\n\n    constructor(message) {\n        super(message);\n    }\n}\n\n//# sourceURL=webpack:///./lib/errors/SSSPlayerError.js?");

/***/ }),

/***/ "./lib/errors/StreamIsInvalid.js":
/*!***************************************!*\
  !*** ./lib/errors/StreamIsInvalid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StreamIsInvalid; });\n/* harmony import */ var _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPlayerError */ \"./lib/errors/SSSPlayerError.js\");\n\n\nclass StreamIsInvalid extends _SSSPlayerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super(\"Stream is invalid.\");\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/errors/StreamIsInvalid.js?");

/***/ }),

/***/ "./lib/events/SocketIOEvents.js":
/*!**************************************!*\
  !*** ./lib/events/SocketIOEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SocketIOEvents = {\n    REFRESH: \"refresh\",\n    STREAM: \"stream\",\n    CLIENT_LIST: \"clientList\"\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketIOEvents);\n\n//# sourceURL=webpack:///./lib/events/SocketIOEvents.js?");

/***/ }),

/***/ "./lib/html/SSSPlayer.html":
/*!*********************************!*\
  !*** ./lib/html/SSSPlayer.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"sssplayer\\\">\\n    <video ref=\\\"html5video\\\" autoplay :width=\\\"width||400\\\" :height=\\\"height||300\\\"></video>\\n</div>\";\n\n//# sourceURL=webpack:///./lib/html/SSSPlayer.html?");

/***/ }),

/***/ "./lib/pipelines/ArrayBufferToVideoElement.js":
/*!****************************************************!*\
  !*** ./lib/pipelines/ArrayBufferToVideoElement.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArrayBufferToVideoElement; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./lib/Constants.js\");\n/* harmony import */ var _errors_StreamIsInvalid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/StreamIsInvalid */ \"./lib/errors/StreamIsInvalid.js\");\n\n\n\nclass ArrayBufferToVideoElement {\n\n    /**\n     *\n     * @param targetVideoElement {HTMLVideoElement}\n     */\n    constructor(targetVideoElement) {\n        this._targetVideoElement = targetVideoElement;\n        this._bufferedPool = [];\n        this._mediaSourceOpened = false;\n    }\n\n    appendBuffer(arrayBuffer, isFirstBuffer = false) {\n        if (!isFirstBuffer) {\n            if (this._mediaSourceOpened) {\n                try {\n                    this._currentSourceBuffer.appendBuffer(arrayBuffer);\n                } catch (e) {\n                    console.log(this._targetVideoElement.error);\n                    console.warn(e);\n                    throw new _errors_StreamIsInvalid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                }\n            } else {\n                this._bufferedPool.push(arrayBuffer);\n            }\n        } else {\n            this._bufferedPool = [];\n            this._mediaSource = new MediaSource();\n            this._mediaSourceOpened = false;\n            this._bufferedPool.push(arrayBuffer);\n\n            this._mediaSource.addEventListener(\"sourceopen\", function (e) {\n                this._currentSourceBuffer = this._mediaSource.addSourceBuffer(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MIME_TYPE);\n\n                while (this._bufferedPool.length) {\n                    this._currentSourceBuffer.appendBuffer(this._bufferedPool.shift());\n                }\n                this._mediaSourceOpened = true;\n            }.bind(this));\n\n            if (this._targetVideoElement.src) {\n                URL.revokeObjectURL(this._targetVideoElement.src);\n            }\n            this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);\n            this._targetVideoElement.play();//立即播放，在Firefox中等待自动播放时间较久\n        }\n\n        let r = this._targetVideoElement.seekable;\n        if (r.length) {\n            let end = r.end(0);\n            if ((end - this._targetVideoElement.currentTime) > (_Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MEDIA_RECORDER_TIME_SLICE / 1000 * 3)) {\n                let skipped = end - this._targetVideoElement.currentTime;\n                this._targetVideoElement.currentTime = end;\n                console.warn(`Skip ${skipped} seconds`);\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./lib/pipelines/ArrayBufferToVideoElement.js?");

/***/ }),

/***/ "./lib/pipelines/MediaStreamBlobToArrayBuffer.js":
/*!*******************************************************!*\
  !*** ./lib/pipelines/MediaStreamBlobToArrayBuffer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamBlobToArrayBuffer; });\n/* harmony import */ var _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/MediaStreamPartBlob */ \"./lib/vo/MediaStreamPartBlob.js\");\n\n\nclass MediaStreamBlobToArrayBuffer {\n    constructor(targetCallback) {\n        this._fifo = [];\n        this._callback = targetCallback;\n        this._reader = new FileReader();\n        this._reader.onload = this._dataTranscoded.bind(this);\n        this._currentReadingMediaStreamPartBlob = null;\n    }\n\n    /**\n     *\n     * @param blob {Blob}\n     * @param isFirstPart {Boolean} 是否为媒体流的第一段\n     */\n    appendBlob(blob, isFirstPart) {\n        this._fifo.push(_vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(blob, isFirstPart));\n        if (this._reader.readyState != 1) {\n            this._transcodeFirstBlob();\n        } else {\n            console.log(\"FileReader is loading\");\n        }\n    }\n\n    _transcodeFirstBlob() {\n        if (this._fifo.length) {\n            this._currentReadingMediaStreamPartBlob = this._fifo.shift();\n            this._reader.readAsArrayBuffer(this._currentReadingMediaStreamPartBlob.blob);\n        }\n    }\n\n    _dataTranscoded() {\n        if (this._callback) {\n            this._callback(this._reader.result, this._currentReadingMediaStreamPartBlob.isFirstPart);\n            _vo_MediaStreamPartBlob__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recycle(this._currentReadingMediaStreamPartBlob);\n\n            this._transcodeFirstBlob();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./lib/pipelines/MediaStreamBlobToArrayBuffer.js?");

/***/ }),

/***/ "./lib/tools.js":
/*!**********************!*\
  !*** ./lib/tools.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    sleep(ms) {\n        return new Promise(resolve => {\n            setTimeout(resolve, ms);\n        });\n    }\n});\n\n//# sourceURL=webpack:///./lib/tools.js?");

/***/ }),

/***/ "./lib/vo/MediaStreamPartBlob.js":
/*!***************************************!*\
  !*** ./lib/vo/MediaStreamPartBlob.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaStreamPartBlob; });\nclass MediaStreamPartBlob {\n\n    constructor(blob, isFirstPart) {\n        this.blob = blob;\n        this.isFirstPart = isFirstPart;\n    }\n}\n\nMediaStreamPartBlob.__pool = [];\n\n/**\n * @param blob {Blob}\n * @param isFirstPart {Boolean}\n * @returns {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.get = function (blob, isFirstPart) {\n    /**\n     * @type {MediaStreamPartBlob}\n     */\n    let obj = null;\n    if (MediaStreamPartBlob.__pool.length) {\n        obj = MediaStreamPartBlob.__pool.pop();\n        obj.blob = blob;\n        obj.isFirstPart = isFirstPart;\n    } else {\n        obj = new MediaStreamPartBlob(blob, isFirstPart);\n    }\n\n    return obj;\n};\n\n\n/**\n * @param blob {MediaStreamPartBlob}\n */\nMediaStreamPartBlob.recycle = function (blob) {\n    MediaStreamPartBlob.__pool.push(blob);\n};\n\n//# sourceURL=webpack:///./lib/vo/MediaStreamPartBlob.js?");

/***/ }),

/***/ "./src/components/StreamPlayer.js":
/*!****************************************!*\
  !*** ./src/components/StreamPlayer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_StreamPlayer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/StreamPlayer.html */ \"./src/html/StreamPlayer.html\");\n/* harmony import */ var _html_StreamPlayer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_StreamPlayer_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst StreamPlayer = Vue.component(\"stream-player\", {\n    template: _html_StreamPlayer_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    props: ['title', 'width', 'height', 'muted'],\n\n    data() {\n        return {pushStream: false}\n    },\n\n    methods: {\n        btnRefreshClickedHandler() {\n            this.$refs.player.refreshRemote();\n        },\n\n        attachRemoteStream(socketio) {\n            this.$refs.player.attachRemoteStream(socketio);\n        },\n\n        playRemote(socketid) {\n            this.$refs.player.playRemote(socketid);\n        },\n\n        detachRemoteStream() {\n            this.$refs.player.detachRemoteStream();\n        },\n\n        setLocalStream(stream) {\n            this.$refs.player.setLocalStream(stream);\n        },\n\n        playLocal() {\n            this.$refs.player.playLocal();\n        }\n    },\n\n\n    watch: {\n        pushStream(val, oldVal) {\n            this.$refs.player.pushStream = val;\n        }\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StreamPlayer);\n\n//# sourceURL=webpack:///./src/components/StreamPlayer.js?");

/***/ }),

/***/ "./src/components/VueApp.js":
/*!**********************************!*\
  !*** ./src/components/VueApp.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/VueApp.html */ \"./src/html/VueApp.html\");\n/* harmony import */ var _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_VueApp_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_components_SSSPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/components/SSSPlayer */ \"./lib/components/SSSPlayer.js\");\n/* harmony import */ var _lib_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/tools */ \"./lib/tools.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/events/SocketIOEvents */ \"./lib/events/SocketIOEvents.js\");\n/* harmony import */ var _StreamPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StreamPlayer */ \"./src/components/StreamPlayer.js\");\n\n\n\n\n\n\n\nVue.component(\"vueapp\", {\n    template: _html_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n    mounted() {\n        this._remotePlayerList = new Map();\n        this._socketio = io(location.host, {path: \"/video_cast_server\"});\n        this._socketio.on(_lib_events_SocketIOEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"].CLIENT_LIST, this._onClientListHandler.bind(this));\n\n        this._asyncInit();\n    },\n\n    methods: {\n        btnRefreshClickedHandler(e) {\n            this.$refs.localPlayer.refreshLocal();\n        },\n\n        _onClientListHandler(clientList) {\n            let oldList = this._remotePlayerList;\n            this._remotePlayerList = new Map();\n\n            clientList.forEach(socketid => {\n                if (socketid != this._socketio.id) {\n                    if (oldList.has(socketid)) {\n                        this._remotePlayerList.set(socketid, oldList.get(socketid));\n                        oldList.delete(socketid);\n                    } else {\n                        let player = new _StreamPlayer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n                            propsData: {\n                                width: 320,\n                                height: 240,\n                                title: socketid\n                            }\n                        });\n                        this._remotePlayerList.set(socketid, player);\n                        let el = document.createElement(\"div\");\n                        this.$refs.remotePlayerContainer.appendChild(el);\n                        player.$mount(el);\n                        player.attachRemoteStream(this._socketio);\n                        player.playRemote(socketid);\n                    }\n                }\n            });\n\n            for (let [socketid, player] of oldList) {\n                if (player.$el.parentNode) {\n                    player.detachRemoteStream();\n                    player.$el.parentNode.removeChild(player.$el);\n                    player.$destroy();\n                }\n            }\n\n            oldList.clear();\n        },\n\n        async _asyncInit() {\n            /**\n             * @type {MediaStream}\n             * @private\n             */\n            this._stream = await navigator.mediaDevices.getDisplayMedia({audio: true, video: true});\n            this.$refs.localStreamPreview.srcObject = this._stream;\n\n            await _lib_tools__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。\n            this.$refs.localPlayer.setLocalStream(this._stream);\n            this.$refs.localPlayer.playLocal();\n            this.$refs.localPlayer.attachRemoteStream(this._socketio);\n            this.$refs.localPlayer.pushStream = true;\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/components/VueApp.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../../node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/html/StreamPlayer.html":
/*!************************************!*\
  !*** ./src/html/StreamPlayer.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\" style=\\\"display: inline-block;\\\">\\n    <div class=\\\"card-header\\\" style=\\\"display: flex;flex-direction: row;\\\">\\n        <span v-html=\\\"title||'No name'\\\"></span>\\n        <span style=\\\"flex: 1;\\\"></span>\\n        <i class=\\\"card-header-btn fas fa-redo\\\" @click=\\\"btnRefreshClickedHandler\\\"></i>\\n    </div>\\n    <sssplayer ref=\\\"player\\\" :width=\\\"width\\\" :height=\\\"height\\\" :muted=\\\"muted\\\"></sssplayer>\\n</div>\";\n\n//# sourceURL=webpack:///./src/html/StreamPlayer.html?");

/***/ }),

/***/ "./src/html/VueApp.html":
/*!******************************!*\
  !*** ./src/html/VueApp.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <div class=\\\"local-streams\\\">\\n        <div class=\\\"card\\\" style=\\\"display: inline-block;\\\">\\n            <div class=\\\"card-header\\\">\\n                本地视频\\n            </div>\\n            <video width=\\\"320\\\" height=\\\"240\\\" ref=\\\"localStreamPreview\\\" autoplay muted></video>\\n        </div>\\n\\n        <stream-player title=\\\"本地预览\\\" ref=\\\"localPlayer\\\" width=\\\"320\\\" height=\\\"240\\\" muted=\\\"true\\\"></stream-player>\\n    </div>\\n\\n    <div ref=\\\"remotePlayerContainer\\\"></div>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./src/html/VueApp.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VueApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VueApp */ \"./src/components/VueApp.js\");\n\n\nnew Vue({\n    el: \"vueapp\"\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });