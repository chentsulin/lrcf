/**
 *
 * @author chentsulin
 */

var isHTML = require('is-html');

var tags = {
  title: 'ti',
  artist: 'ar',
  author: 'au',
  album: 'al',
  offset: 'offset',
  by: 'by'
};

var timeExp = /\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g;

var lrcFormat = {};


lrcFormat.parse = function(argument) {

  var res = {};



  var tagsRegMap = {

  }

  for (var tag in tagsRegMap) {
    matchInfo = lrc.match(new RegExp('\\[' + tagsRegMap[tag] + ':([^\\]]*)\\]', 'i'));
    res[tag] = matchInfo && matchInfo[1] || '';
  }

  for (var i = 0, l = lines.length; i < l; i++) {
    while (time = timeExp.exec(lines[i])) {
      _last = timeExp.lastIndex;
      line = Parser.trim(lines[i].replace(timeExp, ''));
      timeExp.lastIndex = _last;
      res.lyrics.push({
          time: time[1] * 60 * 1000 + time[2] * 1000 + (time[3] || 0) * 10
        , originLineNum: i
        text: line
      });
      res.lyrics.push(line);
    }
  }
};

/**
 *
 * @constructor
 */
function Parser(options) {
  this.options = options || {};
}

/**
 *
 * @method isLRC
 * @param {stirng} src
 * @returns {boolean}
 */
Parser.prototype.isLRC = function(src) {
  return timeExp.test(src);
};

/**
 *
 * @method isJSON
 * @param {stirng} src
 * @returns {boolean}
 */
Parser.prototype.isJSON = function(src) {
  try {
    return JSON.parse(src) && true;
  } catch (e) {
    return false;
  }
};

/**
 *
 * @method isHTML
 * @param {stirng} src
 * @returns {boolean}
 */
Parser.prototype.isHTML = function(src) {
  return isHTML(src);
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
lrcFormat.toJSON = function(src) {


};

/**
 *
 *
 */
lrcFormat.toHTML = function(src) {


};

/**
 *
 *
 */
lrcFormat.fromJSON = function(src) {


};


/**
 *
 *
 */
lrcFormat.fromHTML = function(src) {


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
