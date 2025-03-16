'use strict';

var HTMLTextStyle = require('../../text-html/HTMLTextStyle.js');
var TextStyle = require('../TextStyle.js');

"use strict";
function ensureTextStyle(renderMode, style) {
  if (style instanceof TextStyle.TextStyle || style instanceof HTMLTextStyle.HTMLTextStyle) {
    return style;
  }
  return renderMode === "html" ? new HTMLTextStyle.HTMLTextStyle(style) : new TextStyle.TextStyle(style);
}

exports.ensureTextStyle = ensureTextStyle;
//# sourceMappingURL=ensureTextStyle.js.map
