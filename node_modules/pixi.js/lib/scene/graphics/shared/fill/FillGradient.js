'use strict';

var Color = require('../../../../color/Color.js');
var adapter = require('../../../../environment/adapter.js');
var Matrix = require('../../../../maths/matrix/Matrix.js');
var ImageSource = require('../../../../rendering/renderers/shared/texture/sources/ImageSource.js');
var Texture = require('../../../../rendering/renderers/shared/texture/Texture.js');
var uid = require('../../../../utils/data/uid.js');
var deprecation = require('../../../../utils/logging/deprecation.js');
var definedProps = require('../../../container/utils/definedProps.js');

"use strict";
const emptyColorStops = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }];
const _FillGradient = class _FillGradient {
  constructor(...args) {
    /** Unique identifier for this gradient instance */
    this.uid = uid.uid("fillGradient");
    /** Type of gradient - currently only supports 'linear' */
    this.type = "linear";
    /** Array of color stops defining the gradient */
    this.colorStops = [];
    let options = ensureGradientOptions(args);
    const defaults = options.type === "radial" ? _FillGradient.defaultRadialOptions : _FillGradient.defaultLinearOptions;
    options = { ...defaults, ...definedProps.definedProps(options) };
    this._textureSize = options.textureSize;
    if (options.type === "radial") {
      this.center = options.center;
      this.outerCenter = options.outerCenter ?? this.center;
      this.innerRadius = options.innerRadius;
      this.outerRadius = options.outerRadius;
      this.scale = options.scale;
      this.rotation = options.rotation;
    } else {
      this.start = options.start;
      this.end = options.end;
    }
    this.textureSpace = options.textureSpace;
    this.type = options.type;
    options.colorStops.forEach((stop) => {
      this.addColorStop(stop.offset, stop.color);
    });
  }
  /**
   * Adds a color stop to the gradient
   * @param offset - Position of the stop (0-1)
   * @param color - Color of the stop
   * @returns This gradient instance for chaining
   */
  addColorStop(offset, color) {
    this.colorStops.push({ offset, color: Color.Color.shared.setValue(color).toHexa() });
    return this;
  }
  /**
   * Builds the internal texture and transform for the gradient.
   * Called automatically when the gradient is first used.
   * @internal
   */
  buildLinearGradient() {
    if (this.texture)
      return;
    const colorStops = this.colorStops.length ? this.colorStops : emptyColorStops;
    const defaultSize = this._textureSize;
    const { canvas, context } = getCanvas(defaultSize, 1);
    const gradient = context.createLinearGradient(0, 0, this._textureSize, 0);
    addColorStops(gradient, colorStops);
    context.fillStyle = gradient;
    context.fillRect(0, 0, defaultSize, 1);
    this.texture = new Texture.Texture({
      source: new ImageSource.ImageSource({
        resource: canvas
      })
    });
    const { x: x0, y: y0 } = this.start;
    const { x: x1, y: y1 } = this.end;
    const m = new Matrix.Matrix();
    const dx = x1 - x0;
    const dy = y1 - y0;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    m.scale(dist / defaultSize, 1);
    m.rotate(angle);
    m.translate(x0, y0);
    if (this.textureSpace === "local") {
      m.scale(defaultSize, defaultSize);
    }
    this.transform = m;
  }
  buildGradient() {
    if (this.type === "linear") {
      this.buildLinearGradient();
    } else {
      this.buildRadialGradient();
    }
  }
  buildRadialGradient() {
    if (this.texture)
      return;
    const colorStops = this.colorStops.length ? this.colorStops : emptyColorStops;
    const defaultSize = this._textureSize;
    const { canvas, context } = getCanvas(defaultSize, defaultSize);
    const { x: x0, y: y0 } = this.center;
    const { x: x1, y: y1 } = this.outerCenter;
    const r0 = this.innerRadius;
    const r1 = this.outerRadius;
    const ox = x1 - r1;
    const oy = y1 - r1;
    const scale = defaultSize / (r1 * 2);
    const cx = (x0 - ox) * scale;
    const cy = (y0 - oy) * scale;
    const gradient = context.createRadialGradient(
      cx,
      cy,
      r0 * scale,
      (x1 - ox) * scale,
      (y1 - oy) * scale,
      r1 * scale
    );
    addColorStops(gradient, colorStops);
    context.fillStyle = colorStops[colorStops.length - 1].color;
    context.fillRect(0, 0, defaultSize, defaultSize);
    context.fillStyle = gradient;
    context.translate(cx, cy);
    context.rotate(this.rotation);
    context.scale(1, this.scale);
    context.translate(-cx, -cy);
    context.fillRect(0, 0, defaultSize, defaultSize);
    this.texture = new Texture.Texture({
      source: new ImageSource.ImageSource({
        resource: canvas,
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge"
      })
    });
    const m = new Matrix.Matrix();
    m.scale(1 / scale, 1 / scale);
    m.translate(ox, oy);
    if (this.textureSpace === "local") {
      m.scale(defaultSize, defaultSize);
    }
    this.transform = m;
  }
  /**
   * Gets a unique key representing the current state of the gradient.
   * Used internally for caching.
   * @returns Unique string key
   */
  get styleKey() {
    return this.uid;
  }
  destroy() {
    this.texture?.destroy(true);
    this.texture = null;
  }
};
/**
 * Default options for creating a gradient fill
 * @property {PointData} start - Start point of the gradient (default: { x: 0, y: 0 })
 * @property {PointData} end - End point of the gradient (default: { x: 0, y: 1 })
 * @property {TextureSpace} textureSpace - Whether coordinates are 'global' or 'local' (default: 'local')
 * @property {number} textureSize - The size of the texture to use for the gradient (default: 256)
 * @property {Array<{offset: number, color: ColorSource}>} colorStops - Array of color stops (default: empty array)
 * @property {GradientType} type - Type of gradient (default: 'linear')
 */
_FillGradient.defaultLinearOptions = {
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  colorStops: [],
  textureSpace: "local",
  type: "linear",
  textureSize: 256
};
/**
 * Default options for creating a radial gradient fill
 * @property {PointData} innerCenter - Center of the inner circle (default: { x: 0.5, y: 0.5 })
 * @property {number} innerRadius - Radius of the inner circle (default: 0)
 * @property {PointData} outerCenter - Center of the outer circle (default: { x: 0.5, y: 0.5 })
 * @property {number} outerRadius - Radius of the outer circle (default: 0.5)
 * @property {TextureSpace} textureSpace - Whether coordinates are 'global' or 'local' (default: 'local')
 * @property {number} textureSize - The size of the texture to use for the gradient (default: 256)
 * @property {Array<{offset: number, color: ColorSource}>} colorStops - Array of color stops (default: empty array)
 * @property {GradientType} type - Type of gradient (default: 'radial')
 */
_FillGradient.defaultRadialOptions = {
  center: { x: 0.5, y: 0.5 },
  innerRadius: 0,
  outerRadius: 0.5,
  colorStops: [],
  scale: 1,
  textureSpace: "local",
  type: "radial",
  textureSize: 256
};
let FillGradient = _FillGradient;
function addColorStops(gradient, colorStops) {
  for (let i = 0; i < colorStops.length; i++) {
    const stop = colorStops[i];
    gradient.addColorStop(stop.offset, stop.color);
  }
}
function getCanvas(width, height) {
  const canvas = adapter.DOMAdapter.get().createCanvas(width, height);
  const context = canvas.getContext("2d");
  return { canvas, context };
}
function ensureGradientOptions(args) {
  let options = args[0] ?? {};
  if (typeof options === "number" || args[1]) {
    deprecation.deprecation("8.5.2", `use options object instead`);
    options = {
      type: "linear",
      start: { x: args[0], y: args[1] },
      end: { x: args[2], y: args[3] },
      textureSpace: args[4],
      textureSize: args[5] ?? FillGradient.defaultLinearOptions.textureSize
    };
  }
  return options;
}

exports.FillGradient = FillGradient;
//# sourceMappingURL=FillGradient.js.map
