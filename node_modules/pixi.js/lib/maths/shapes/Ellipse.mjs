import { Rectangle } from './Rectangle.mjs';

"use strict";
class Ellipse {
  /**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */
  constructor(x = 0, y = 0, halfWidth = 0, halfHeight = 0) {
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'ellipse'
     */
    this.type = "ellipse";
    this.x = x;
    this.y = y;
    this.halfWidth = halfWidth;
    this.halfHeight = halfHeight;
  }
  /**
   * Creates a clone of this Ellipse instance
   * @returns {Ellipse} A copy of the ellipse
   */
  clone() {
    return new Ellipse(this.x, this.y, this.halfWidth, this.halfHeight);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this ellipse
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coords are within this ellipse
   */
  contains(x, y) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0) {
      return false;
    }
    let normx = (x - this.x) / this.halfWidth;
    let normy = (y - this.y) / this.halfHeight;
    normx *= normx;
    normy *= normy;
    return normx + normy <= 1;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this ellipse including stroke
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke
   * @returns Whether the x/y coords are within this ellipse
   */
  strokeContains(x, y, strokeWidth, alignment = 0.5) {
    const { halfWidth, halfHeight } = this;
    if (halfWidth <= 0 || halfHeight <= 0) {
      return false;
    }
    const strokeOuterWidth = strokeWidth * (1 - alignment);
    const strokeInnerWidth = strokeWidth - strokeOuterWidth;
    const innerHorizontal = halfWidth - strokeInnerWidth;
    const innerVertical = halfHeight - strokeInnerWidth;
    const outerHorizontal = halfWidth + strokeOuterWidth;
    const outerVertical = halfHeight + strokeOuterWidth;
    const normalizedX = x - this.x;
    const normalizedY = y - this.y;
    const innerEllipse = normalizedX * normalizedX / (innerHorizontal * innerHorizontal) + normalizedY * normalizedY / (innerVertical * innerVertical);
    const outerEllipse = normalizedX * normalizedX / (outerHorizontal * outerHorizontal) + normalizedY * normalizedY / (outerVertical * outerVertical);
    return innerEllipse > 1 && outerEllipse <= 1;
  }
  /**
   * Returns the framing rectangle of the ellipse as a Rectangle object
   * @param out
   * @returns The framing rectangle
   */
  getBounds(out) {
    out || (out = new Rectangle());
    out.x = this.x - this.halfWidth;
    out.y = this.y - this.halfHeight;
    out.width = this.halfWidth * 2;
    out.height = this.halfHeight * 2;
    return out;
  }
  /**
   * Copies another ellipse to this one.
   * @param ellipse - The ellipse to copy from.
   * @returns Returns itself.
   */
  copyFrom(ellipse) {
    this.x = ellipse.x;
    this.y = ellipse.y;
    this.halfWidth = ellipse.halfWidth;
    this.halfHeight = ellipse.halfHeight;
    return this;
  }
  /**
   * Copies this ellipse to another one.
   * @param ellipse - The ellipse to copy to.
   * @returns Returns given parameter.
   */
  copyTo(ellipse) {
    ellipse.copyFrom(this);
    return ellipse;
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
  }
}

export { Ellipse };
//# sourceMappingURL=Ellipse.mjs.map
