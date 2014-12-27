'use strict';
/**
 *
 * @author chentsulin
 */

exports = module.exports = Renderer;


var tags = [
  'title',
  'artist',
  'author',
  'album',
  'length',
  'offset',
  'by:',
  'resource',
  'version'
];

/**
 *
 * @constructor
 */
function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.render = function(content) {

  var result = '';

  tags.forEach(function(tag) {

    result = result + '\n'+ this.tag(content.tag);

  }, this);

  // Render Line

  return result;
};


/**
 *
 *
 * @method title
 * @param {string} title
 *
 * @return {string}
 */
Renderer.prototype.title = function(title) {
  return '[ti:' + title + ']';
};

/**
 *
 *
 * @method artist
 * @param {string} artist
 *
 * @return {string}
 */
Renderer.prototype.artist = function(artist) {
  return '[ar:' + artist + ']';
};

/**
 *
 *
 * @method author
 * @param {string} author
 *
 * @return {string}
 */
Renderer.prototype.author = function(author) {
  return '[au:' + author + ']';
};

/**
 *
 *
 * @method album
 * @param {string} album
 *
 * @return {string}
 */
Renderer.prototype.album = function(album) {
  return '[al:' + album + ']';
};

/**
 *
 *
 * @method length
 * @param {string} length
 *
 * @return {string}
 */
Renderer.prototype.length = function(length) {
  return '[length:' + length + ']';
};

/**
 *
 *
 * @method offset
 * @param {string} offset
 *
 * @return {string}
 */
Renderer.prototype.offset = function(offset) {
  return '[offset:' + offset + ']';
};


/**
 *
 *
 * @method by
 * @param {string} by
 *
 * @return {string}
 */
Renderer.prototype.by = function(by) {
  return '[by:' + by + ']';
};

/**
 *
 *
 * @method resource
 * @param {string} resource
 *
 * @return {string}
 */
Renderer.prototype.resource = function(resource) {
  return '[re:' + resource + ']';
};

/**
 *
 *
 * @method version
 * @param {string} version
 *
 * @return {string}
 */
Renderer.prototype.version = function(version) {
  return '[ve:' + version + ']';
};
