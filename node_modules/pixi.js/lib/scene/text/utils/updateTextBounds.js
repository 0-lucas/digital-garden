'use strict';

var updateQuadBounds = require('../../../utils/data/updateQuadBounds.js');

"use strict";
function updateTextBounds(batchableSprite, text) {
  const { texture, bounds } = batchableSprite;
  updateQuadBounds.updateQuadBounds(bounds, text._anchor, texture);
  const padding = text._style.padding;
  bounds.minX -= padding;
  bounds.minY -= padding;
  bounds.maxX -= padding;
  bounds.maxY -= padding;
}

exports.updateTextBounds = updateTextBounds;
//# sourceMappingURL=updateTextBounds.js.map
