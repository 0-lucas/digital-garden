import { AbstractText, ensureTextOptions } from '../text/AbstractText.mjs';
import { HTMLTextStyle } from './HTMLTextStyle.mjs';
import { measureHtmlText } from './utils/measureHtmlText.mjs';

"use strict";
class HTMLText extends AbstractText {
  constructor(...args) {
    const options = ensureTextOptions(args, "HtmlText");
    super(options, HTMLTextStyle);
    this.renderPipeId = "htmlText";
  }
  /** @private */
  updateBounds() {
    const bounds = this._bounds;
    const anchor = this._anchor;
    const htmlMeasurement = measureHtmlText(this.text, this._style);
    const { width, height } = htmlMeasurement;
    bounds.minX = -anchor._x * width;
    bounds.maxX = bounds.minX + width;
    bounds.minY = -anchor._y * height;
    bounds.maxY = bounds.minY + height;
  }
}

export { HTMLText };
//# sourceMappingURL=HTMLText.mjs.map
