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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _preload = __webpack_require__(1);

var imgs = ['https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204231mfew33efpps7pu5i.jpg.thumb.jpg', 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg', 'http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg', 'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg', 'http://www.qqma.com/imgpic2/cpimagenew/2018/4/5/6e1de60ce43d4bf4b9671d7661024e7a.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532282850458&di=172e3dc8f0a2c9531a1ebf97d5bb8dd3&imgtype=0&src=http%3A%2F%2Fwww.vsochina.com%2Fdata%2Fuploads%2Fresource%2Fbatch%2F193%2F23961517853a2c21f89ffa.jpg', 'http://img3.redocn.com/tupian/20160108/lvsehuawentuankazhibeijingbiankuang_5728261.jpg', 'http://img.zcool.cn/community/01cc0255411bca000001e71b3bca01.jpg@1280w_1l_2o_100sh.jpg', 'http://pic.58pic.com/58pic/13/66/58/20258PICpDh_1024.png', 'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204241z8ta66qzq33z853d.jpg.thumb.jpg', 'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201710/03/204249ocdqnxjxj1ncx1ij.jpg.thumb.jpg'];

var len = imgs.length;
var div = document.createElement("div");
//无序实现
// preload(imgs,{
//     each: function(count){
//         div.innerHTML = Math.round((count+1)/len*100)+'%';
//         document.body.appendChild(div)
//     },
//     all: function(count){
//         document.title = '1/'+len;
//     },
// });

//有序加载
(0, _preload.preload)(imgs, {
    order: 'ordered'
    // each: function(count){
    //     div.innerHTML = Math.round((count+1)/len*100)+'%';
    //     document.body.appendChild(div)
    // },
    // all: function(count){
    //     document.title = '1/'+len;
    // },
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preload = preload;

var _commonUtils = __webpack_require__(2);

function PreLoad(imgs, options) {
    this.imgs = (0, _commonUtils.classOf)(imgs) === 'String' ? [imgs] : imgs;
    this.opts = Object.assign({}, PreLoad.DEFAULTS, options);
    if (this.opts.order === 'ordered') {
        this._ordered();
    } else {
        this._unordered();
    }
} /**图片预加载*/


PreLoad.DEFAULTS = {
    order: 'unordered',
    each: null,
    all: null
};
PreLoad.prototype._ordered = function () {
    var opts = this.opts,
        imgs = this.imgs,
        len = imgs.length,
        count = 0;
    function load() {
        var imgObj = new Image();
        imgObj.onload = function () {
            opts.each && opts.each(count);
            if (count >= len) {
                //所有图片加载完毕
                opts.all && opts.all();
            } else {
                load();
            }
            count++;
        };
        imgObj.onerror = function () {
            opts.each && opts.each(count);
            if (count >= len) {
                //所有图片加载完毕
                opts.all && opts.all();
            } else {
                load();
            }
            count++;
        };
        imgObj.src = imgs[count];
    }
    load();
};
PreLoad.prototype._unordered = function () {
    var imgs = this.imgs,
        opts = this.opts,
        count = 0,
        len = imgs.length;

    imgs.forEach(function (src, index) {
        if ((0, _commonUtils.classOf)(src) !== 'String') return;

        var imgObj = new Image();

        imgObj.onload = function () {
            opts.each && opts.each(count);
            if (count >= len - 1) {
                opts.all && opts.all(count);
            }
            count++;
        };
        imgObj.onerror = function () {
            opts.each && opts.each(count);
            if (count >= len - 1) {
                opts.all && opts.all(count);
            }
            count++;
        };

        imgObj.src = src;
    });
};

function preload(imgs, opts) {
    new PreLoad(imgs, opts);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classOf = classOf;
exports.inherit = inherit;
exports.existy = existy;
function classOf(o) {
	if (o === null) return "Null";
	if (o === undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8, -1);
}

function inherit(p) {
	if (p === null) throw TypeError();
	if (Object.create) return Object.create(p);
	var t = typeof p === "undefined" ? "undefined" : _typeof(p);
	if (t !== "object" && t !== "function") throw TypeError();
	var f = function f() {};
	f.prototype = p;
	return new f();
}

/**
 * 
 * @param {*} x 表示两个值不存在
 */
function existy(x) {
	return x != null;
}

/***/ })
/******/ ]);