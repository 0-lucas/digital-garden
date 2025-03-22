import { HTMLTextStyle } from '../../text-html/HTMLTextStyle.mjs';
import { TextStyle } from '../TextStyle.mjs';

"use strict";
function ensureTextStyle(renderMode, style) {
  if (style instanceof TextStyle || style instanceof HTMLTextStyle) {
    return style;
  }
  return renderMode === "html" ? new HTMLTextStyle(style) : new TextStyle(style);
}

export { ensureTextStyle };
//# sourceMappingURL=ensureTextStyle.mjs.map
