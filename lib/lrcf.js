'use strict';
/**
 *
 * @author chentsulin
 */
var Parser = require('./parser');
var renderer = require('./renderer');


exports = module.exports = createLrcFormat;

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

function createLrcFormat(src, opts) {

  if (true) {

  } else if (isLrc(src)) {

  } else if (isHtml(src)) {

  } else if (isJson(src)) {

  } else if (isXml(src)) {

  }

}

/**
 *
 * @constructor
 */
function LrcFormat() {

}

/**
 *
 *
 * @method toJson
 *
 * @return {string}
 */
LrcFormat.prototype.toJson = function() {

  return JSON.stringify(this.content);
};

/**
 *
 *
 * @method toHtml
 *
 * @return {string}
 */
LrcFormat.prototype.toHtml = function() {

};

/**
 *
 *
 * @method fromJson
 * @param {string} src
 *
 * @return {LrcFormat}
 */
LrcFormat.prototype.fromJson = function(src) {


};


/**
 *
 *
 * @method fromHtml
 * @param {string} src
 *
 * @return {LrcFormat}
 */
LrcFormat.prototype.fromHtml = function(src) {


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

exports.Paresr = Paresr;
exports.Renderer = Renderer;

