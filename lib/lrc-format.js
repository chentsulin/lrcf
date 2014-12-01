/**
 *
 * @author chentsulin
 */

var isHtml = require('is-html');
var isLrc = require('is-lrc');

var tags = {
  title: 'ti',
  artist: 'ar',
  author: 'au',
  album: 'al',
  length: 'length',
  offset: 'offset',
  by: 'by',
  resource: 're',
  version: 've'
};

var timeExp = /\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g;

var lrcFormat = {};


lrcFormat.parse = function(argument) {

};


var defaults = {};

/**
 *
 * @constructor
 */
function Parser(options) {
  this.options = options || defaults;
  this.tokens = [];
  this.token = null;

}

/**
 *
 * @method isLrc
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isLrc = function(str) {
  return isLrc(str);
};

/**
 *
 * @method isJson
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isJson = function(str) {
  try {
    return JSON.parse(str) && true;
  } catch (e) {
    return false;
  }
};

/**
 *
 * @method isHtml
 * @param {stirng} str
 * @returns {boolean}
 */
Parser.prototype.isHtml = function(str) {
  return isHtml(str);
};

/**
 *
 *
 */
function Renderer(options) {
  this.options = options || {};
}

/**
 *
 *
 */
Renderer.prototype.title = function(title) {

}


/**
 *
 *
 */
lrcFormat.toJson = function(src) {


};

/**
 *
 *
 */
lrcFormat.toHtml = function(src) {


};

/**
 *
 *
 */
lrcFormat.fromJson = function(src) {


};


/**
 *
 *
 */
lrcFormat.fromHtml = function(src) {


};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}




module.exports = lrcFormat;
