import { squaredDistanceToLineSegment } from '../misc/squaredDistanceToLineSegment.mjs';
import { Rectangle } from './Rectangle.mjs';

"use strict";
let tempRect;
let tempRect2;
class Polygon {
  /**
   * @param points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */
  constructor(...points) {
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'polygon'
     */
    this.type = "polygon";
    let flat = Array.isArray(points[0]) ? points[0] : points;
    if (typeof flat[0] !== "number") {
      const p = [];
      for (let i = 0, il = flat.length; i < il; i++) {
        p.push(flat[i].x, flat[i].y);
      }
      flat = p;
    }
    this.points = flat;
    this.closePath = true;
  }
  /**
   * Determines whether the polygon's points are arranged in a clockwise direction.
   * This is calculated using the "shoelace formula" (also known as surveyor's formula) to find the signed area.
   * A positive area indicates clockwise winding, while negative indicates counter-clockwise.
   *
   * The formula sums up the cross products of adjacent vertices:
   * For each pair of adjacent points (x1,y1) and (x2,y2), we calculate (x1*y2 - x2*y1)
   * The final sum divided by 2 gives the signed area - positive for clockwise.
   * @returns `true` if the polygon's points are arranged clockwise, `false` if counter-clockwise
   */
  isClockwise() {
    let area = 0;
    const points = this.points;
    const length = points.length;
    for (let i = 0; i < length; i += 2) {
      const x1 = points[i];
      const y1 = points[i + 1];
      const x2 = points[(i + 2) % length];
      const y2 = points[(i + 3) % length];
      area += (x2 - x1) * (y2 + y1);
    }
    return area < 0;
  }
  /**
   * Checks if this polygon completely contains another polygon.
   *
   * This is useful for detecting holes in shapes, like when parsing SVG paths.
   * For example, if you have two polygons:
   * ```ts
   * const outerSquare = new Polygon([0,0, 100,0, 100,100, 0,100]); // A square
   * const innerSquare = new Polygon([25,25, 75,25, 75,75, 25,75]); // A smaller square inside
   *
   * outerSquare.containsPolygon(innerSquare); // Returns true
   * innerSquare.containsPolygon(outerSquare); // Returns false
   * ```
   * @param polygon - The polygon to test for containment
   * @returns True if this polygon completely contains the other polygon
   */
  containsPolygon(polygon) {
    const thisBounds = this.getBounds(tempRect);
    const otherBounds = polygon.getBounds(tempRect2);
    if (!thisBounds.containsRect(otherBounds)) {
      return false;
    }
    const points = polygon.points;
    for (let i = 0; i < points.length; i += 2) {
      const x = points[i];
      const y = points[i + 1];
      if (!this.contains(x, y)) {
        return false;
      }
    }
    return true;
  }
  /**
   * Creates a clone of this polygon.
   * @returns - A copy of the polygon.
   */
  clone() {
    const points = this.points.slice();
    const polygon = new Polygon(points);
    polygon.closePath = this.closePath;
    return polygon;
  }
  /**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon.
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this polygon.
   */
  contains(x, y) {
    let inside = false;
    const length = this.points.length / 2;
    for (let i = 0, j = length - 1; i < length; j = i++) {
      const xi = this.points[i * 2];
      const yi = this.points[i * 2 + 1];
      const xj = this.points[j * 2];
      const yj = this.points[j * 2 + 1];
      const intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
      if (intersect) {
        inside = !inside;
      }
    }
    return inside;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this polygon including the stroke.
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke, 0.5 by default
   * @returns Whether the x/y coordinates are within this polygon
   */
  strokeContains(x, y, strokeWidth, alignment = 0.5) {
    const strokeWidthSquared = strokeWidth * strokeWidth;
    const rightWidthSquared = strokeWidthSquared * (1 - alignment);
    const leftWidthSquared = strokeWidthSquared - rightWidthSquared;
    const { points } = this;
    const iterationLength = points.length - (this.closePath ? 0 : 2);
    for (let i = 0; i < iterationLength; i += 2) {
      const x1 = points[i];
      const y1 = points[i + 1];
      const x2 = points[(i + 2) % points.length];
      const y2 = points[(i + 3) % points.length];
      const distanceSquared = squaredDistanceToLineSegment(x, y, x1, y1, x2, y2);
      const sign = Math.sign((x2 - x1) * (y - y1) - (y2 - y1) * (x - x1));
      if (distanceSquared <= (sign < 0 ? leftWidthSquared : rightWidthSquared)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the framing rectangle of the polygon as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */
  getBounds(out) {
    out || (out = new Rectangle());
    const points = this.points;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i];
      const y = points[i + 1];
      minX = x < minX ? x : minX;
      maxX = x > maxX ? x : maxX;
      minY = y < minY ? y : minY;
      maxY = y > maxY ? y : maxY;
    }
    out.x = minX;
    out.width = maxX - minX;
    out.y = minY;
    out.height = maxY - minY;
    return out;
  }
  /**
   * Copies another polygon to this one.
   * @param polygon - The polygon to copy from.
   * @returns Returns itself.
   */
  copyFrom(polygon) {
    this.points = polygon.points.slice();
    this.closePath = polygon.closePath;
    return this;
  }
  /**
   * Copies this polygon to another one.
   * @param polygon - The polygon to copy to.
   * @returns Returns given parameter.
   */
  copyTo(polygon) {
    polygon.copyFrom(this);
    return polygon;
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((pointsDesc, currentPoint) => `${pointsDesc}, ${currentPoint}`, "")}]`;
  }
  /**
   * Get the last X coordinate of the polygon
   * @readonly
   */
  get lastX() {
    return this.points[this.points.length - 2];
  }
  /**
   * Get the last Y coordinate of the polygon
   * @readonly
   */
  get lastY() {
    return this.points[this.points.length - 1];
  }
  /**
   * Get the first X coordinate of the polygon
   * @readonly
   */
  get x() {
    return this.points[this.points.length - 2];
  }
  /**
   * Get the first Y coordinate of the polygon
   * @readonly
   */
  get y() {
    return this.points[this.points.length - 1];
  }
}

export { Polygon };
//# sourceMappingURL=Polygon.mjs.map
