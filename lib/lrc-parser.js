;(function() {

var lrcFormat = {};


lrcFormat.parse = function(argument) {

  var res = {};

  var timeExp = /\[(\d{2,})\:(\d{2})(?:\.(\d{2}))?\]/g;

  var tagsRegMap = {
    title: 'ti',
    artist: 'ar',
    author: 'au',
    album: 'al',
    offset: 'offset',
    by: 'by'
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

function Parser(options) {
  this.options = options || {};
}

Parser.prototype.isLrc = function(src) {

};

Parser.prototype.isJSON = function(src) {

};

Parser.prototype.isHTML = function(src) {

};

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.title = function(title) {

}


lrcFormat.toJSON = function(src) {};
lrcFormat.toHTML = function(src) {};

lrcFormat.fromJSON = function(src) {};
lrcFormat.fromHTML = function(src) {};

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



if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = lrcFormat;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return lrcFormat; });
} else {
  this.lrcFormat = lrcFormat;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());