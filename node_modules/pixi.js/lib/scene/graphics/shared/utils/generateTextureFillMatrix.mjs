import { Matrix } from '../../../../maths/matrix/Matrix.mjs';
import { Rectangle } from '../../../../maths/shapes/Rectangle.mjs';

"use strict";
const tempTextureMatrix = new Matrix();
const tempRect = new Rectangle();
function generateTextureMatrix(out, style, shape, matrix) {
  const textureMatrix = style.matrix ? out.copyFrom(style.matrix).invert() : out.identity();
  if (style.textureSpace === "local") {
    const bounds = shape.getBounds(tempRect);
    textureMatrix.translate(-bounds.x, -bounds.y);
    textureMatrix.scale(1 / bounds.width, 1 / bounds.height);
  } else {
    textureMatrix.translate(style.texture.frame.x, style.texture.frame.y);
    textureMatrix.scale(1 / style.texture.source.width, 1 / style.texture.source.height);
    const sourceStyle = style.texture.source.style;
    if (sourceStyle.addressMode === "clamp-to-edge") {
      sourceStyle.addressMode = "repeat";
      sourceStyle.update();
    }
  }
  if (matrix) {
    textureMatrix.append(tempTextureMatrix.copyFrom(matrix).invert());
  }
  return textureMatrix;
}

export { generateTextureMatrix };
//# sourceMappingURL=generateTextureFillMatrix.mjs.map
