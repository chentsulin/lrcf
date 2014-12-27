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


}


LrcFormat.parse = function(str) {
  if (true) {

  } else {

  }
};








/**
 *
 *
 */
LrcFormat.toJson = function(src) {


};

/**
 *
 *
 */
LrcFormat.toHtml = function(src) {


};

/**
 *
 *
 */
LrcFormat.fromJson = function(src) {


};


/**
 *
 *
 */
LrcFormat.fromHtml = function(src) {


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

