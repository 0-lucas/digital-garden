'use strict';

var Point = require('../../../maths/point/Point.js');
var matrixAndBoundsPool = require('../bounds/utils/matrixAndBoundsPool.js');

"use strict";
const toLocalGlobalMixin = {
  /**
   * Returns the global position of the container.
   * @param point - The optional point to write the global value to.
   * @param skipUpdate - Should we skip the update transform.
   * @returns - The updated point.
   * @memberof scene.Container#
   */
  getGlobalPosition(point = new Point.Point(), skipUpdate = false) {
    if (this.parent) {
      this.parent.toGlobal(this._position, point, skipUpdate);
    } else {
      point.x = this._position.x;
      point.y = this._position.y;
    }
    return point;
  },
  /**
   * Calculates the global position of the container.
   * @param position - The world origin to calculate from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform.
   * @returns - A point object representing the position of this object.
   * @memberof scene.Container#
   */
  toGlobal(position, point, skipUpdate = false) {
    const globalMatrix = this.getGlobalTransform(matrixAndBoundsPool.matrixPool.get(), skipUpdate);
    point = globalMatrix.apply(position, point);
    matrixAndBoundsPool.matrixPool.return(globalMatrix);
    return point;
  },
  /**
   * Calculates the local position of the container relative to another point.
   * @param position - The world origin to calculate from.
   * @param from - The Container to calculate the global position from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform
   * @returns - A point object representing the position of this object
   * @memberof scene.Container#
   */
  toLocal(position, from, point, skipUpdate) {
    if (from) {
      position = from.toGlobal(position, point, skipUpdate);
    }
    const globalMatrix = this.getGlobalTransform(matrixAndBoundsPool.matrixPool.get(), skipUpdate);
    point = globalMatrix.applyInverse(position, point);
    matrixAndBoundsPool.matrixPool.return(globalMatrix);
    return point;
  }
};

exports.toLocalGlobalMixin = toLocalGlobalMixin;
//# sourceMappingURL=toLocalGlobalMixin.js.map
