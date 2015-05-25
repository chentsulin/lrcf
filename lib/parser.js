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

Parser.prototype.parse = function(src) {

  if (this.isLrc(src)) {


  } else if (this.isJson(src)) {

    return JSON.parse(src);

  } else if (this.isHtml(src)) {


  }

};

/**
 *
 *
 * @method isLrc
 * @param {stirng} src
 *
 * @returns {boolean}
 */
Parser.prototype.isLrc = isLrc;


/**
 *
 *
 * @method isJson
 * @param {stirng} src
 *
 * @returns {boolean}
 */
Parser.prototype.isJson = function(src) {
  try {
    return JSON.parse(src) && true;
  } catch (e) {
    return false;
  }
};

/**
 *
 *
 * @method isHtml
 * @param {stirng} src
 *
 * @returns {boolean}
 */
Parser.prototype.isHtml = isHtml;

/**
 *
 *
 * @method parseLrc
 * @param {stirng} src
 *
 * @returns {object}
 */
Parser.prototype.parseLrc = function(src) {

};

/**
 *
 *
 * @method parseJson
 * @param {stirng} src
 *
 * @returns {object}
 */
Parser.prototype.parseJson = function(src) {
  return JSON.parse(src);
};

/**
 *
 *
 * @method parseHtml
 * @param {stirng} src
 *
 * @returns {object}
 */
Parser.prototype.parseHtml = function(src) {

};
