'use strict';

var Color = require('../../../color/Color.js');
var Texture = require('../../../rendering/renderers/shared/texture/Texture.js');
var getGlobalMixin = require('../../container/container-mixins/getGlobalMixin.js');
var assignWithIgnore = require('../../container/utils/assignWithIgnore.js');

"use strict";
const _Particle = class _Particle {
  constructor(options) {
    if (options instanceof Texture.Texture) {
      this.texture = options;
      assignWithIgnore.assignWithIgnore(this, _Particle.defaultOptions, {});
    } else {
      const combined = { ..._Particle.defaultOptions, ...options };
      assignWithIgnore.assignWithIgnore(this, combined, {});
    }
  }
  /** Gets or sets the alpha value of the particle. */
  get alpha() {
    return this._alpha;
  }
  set alpha(value) {
    this._alpha = Math.min(Math.max(value, 0), 1);
    this._updateColor();
  }
  /** Gets or sets the tint color of the particle. */
  get tint() {
    return getGlobalMixin.bgr2rgb(this._tint);
  }
  set tint(value) {
    if (typeof value === "number") {
      this._tint = value;
    } else {
      this._tint = Color.Color.shared.setValue(value ?? 16777215).toBgrNumber();
    }
    this._updateColor();
  }
  _updateColor() {
    this.color = this._tint + ((this._alpha * 255 | 0) << 24);
  }
};
/** Default options for constructing with options */
_Particle.defaultOptions = {
  anchorX: 0,
  anchorY: 0,
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  rotation: 0,
  tint: 16777215,
  alpha: 1
};
let Particle = _Particle;

exports.Particle = Particle;
//# sourceMappingURL=Particle.js.map
