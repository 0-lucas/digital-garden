'use strict';

var Matrix = require('../../../../maths/matrix/Matrix.js');
var Rectangle = require('../../../../maths/shapes/Rectangle.js');

"use strict";
const tempTextureMatrix = new Matrix.Matrix();
const tempRect = new Rectangle.Rectangle();
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

exports.generateTextureMatrix = generateTextureMatrix;
//# sourceMappingURL=generateTextureFillMatrix.js.map
