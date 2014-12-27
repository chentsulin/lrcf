'use strict';
/**
 *
 * @author chentsulin
 */

var isHtml = require('is-html');
var isLrc = require('is-lrc');

exports = module.exports = Parser;

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
 *
 * @method isLrc
 * @param {stirng} str
 *
 * @returns {boolean}
 */
Parser.prototype.isLrc = isLrc;


/**
 *
 *
 * @method isJson
 * @param {stirng} str
 *
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
 *
 * @method isHtml
 * @param {stirng} str
 *
 * @returns {boolean}
 */
Parser.prototype.isHtml = isHtml;
