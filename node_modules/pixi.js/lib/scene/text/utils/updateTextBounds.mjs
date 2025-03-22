import { updateQuadBounds } from '../../../utils/data/updateQuadBounds.mjs';

"use strict";
function updateTextBounds(batchableSprite, text) {
  const { texture, bounds } = batchableSprite;
  updateQuadBounds(bounds, text._anchor, texture);
  const padding = text._style.padding;
  bounds.minX -= padding;
  bounds.minY -= padding;
  bounds.maxX -= padding;
  bounds.maxY -= padding;
}

export { updateTextBounds };
//# sourceMappingURL=updateTextBounds.mjs.map
