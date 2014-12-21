'use strict';
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


lrcFormat.parse = function(str) {
  if (true) {

  } else {

  }
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
Parser.prototype.isLrc = isLrc;


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
Parser.prototype.isHtml = isHtml;

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
  return '[ti:' + title + ']';
};

/**
 *
 *
 */
Renderer.prototype.artist = function(artist) {
  return '[ar:' + artist + ']';
};

/**
 *
 *
 */
Renderer.prototype.author = function(author) {
  return '[au:' + author + ']';
};

/**
 *
 *
 */
Renderer.prototype.album = function(album) {
  return '[al:' + album + ']';
};

/**
 *
 *
 */
Renderer.prototype.length = function(length) {
  return '[length:' + length + ']';
};

/**
 *
 *
 */
Renderer.prototype.offset = function(offset) {
  return '[offset:' + offset + ']';
};


/**
 *
 *
 */
Renderer.prototype.by = function(by) {
  return '[by:' + by + ']';
};

/**
 *
 *
 */
Renderer.prototype.resource = function(resource) {
  return '[re:' + resource + ']';
};

/**
 *
 *
 */
Renderer.prototype.version = function(version) {
  return '[ve:' + version + ']';
};



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
