import { warn } from '../../../../utils/logging/warn.mjs';
import { GraphicsPath } from '../path/GraphicsPath.mjs';
import { parseSVGDefinitions } from './parseSVGDefinitions.mjs';
import { parseSVGFloatAttribute } from './parseSVGFloatAttribute.mjs';
import { parseSVGStyle } from './parseSVGStyle.mjs';

"use strict";
function SVGParser(svg, graphicsContext) {
  if (typeof svg === "string") {
    const div = document.createElement("div");
    div.innerHTML = svg.trim();
    svg = div.querySelector("svg");
  }
  const session = {
    context: graphicsContext,
    defs: {},
    path: new GraphicsPath()
  };
  parseSVGDefinitions(svg, session);
  const children = svg.children;
  const { fillStyle, strokeStyle } = parseSVGStyle(svg, session);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.nodeName.toLowerCase() === "defs")
      continue;
    renderChildren(child, session, fillStyle, strokeStyle);
  }
  return graphicsContext;
}
function renderChildren(svg, session, fillStyle, strokeStyle) {
  const children = svg.children;
  const { fillStyle: f1, strokeStyle: s1 } = parseSVGStyle(svg, session);
  if (f1 && fillStyle) {
    fillStyle = { ...fillStyle, ...f1 };
  } else if (f1) {
    fillStyle = f1;
  }
  if (s1 && strokeStyle) {
    strokeStyle = { ...strokeStyle, ...s1 };
  } else if (s1) {
    strokeStyle = s1;
  }
  const noStyle = !fillStyle && !strokeStyle;
  if (noStyle) {
    fillStyle = { color: 0 };
  }
  let x;
  let y;
  let x1;
  let y1;
  let x2;
  let y2;
  let cx;
  let cy;
  let r;
  let rx;
  let ry;
  let points;
  let pointsString;
  let d;
  let graphicsPath;
  let width;
  let height;
  switch (svg.nodeName.toLowerCase()) {
    case "path":
      d = svg.getAttribute("d");
      if (svg.getAttribute("fill-rule") === "evenodd") {
        warn("SVG Evenodd fill rule not supported, your svg may render incorrectly");
      }
      graphicsPath = new GraphicsPath(d, true);
      session.context.path(graphicsPath);
      if (fillStyle)
        session.context.fill(fillStyle);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "circle":
      cx = parseSVGFloatAttribute(svg, "cx", 0);
      cy = parseSVGFloatAttribute(svg, "cy", 0);
      r = parseSVGFloatAttribute(svg, "r", 0);
      session.context.ellipse(cx, cy, r, r);
      if (fillStyle)
        session.context.fill(fillStyle);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "rect":
      x = parseSVGFloatAttribute(svg, "x", 0);
      y = parseSVGFloatAttribute(svg, "y", 0);
      width = parseSVGFloatAttribute(svg, "width", 0);
      height = parseSVGFloatAttribute(svg, "height", 0);
      rx = parseSVGFloatAttribute(svg, "rx", 0);
      ry = parseSVGFloatAttribute(svg, "ry", 0);
      if (rx || ry) {
        session.context.roundRect(x, y, width, height, rx || ry);
      } else {
        session.context.rect(x, y, width, height);
      }
      if (fillStyle)
        session.context.fill(fillStyle);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "ellipse":
      cx = parseSVGFloatAttribute(svg, "cx", 0);
      cy = parseSVGFloatAttribute(svg, "cy", 0);
      rx = parseSVGFloatAttribute(svg, "rx", 0);
      ry = parseSVGFloatAttribute(svg, "ry", 0);
      session.context.beginPath();
      session.context.ellipse(cx, cy, rx, ry);
      if (fillStyle)
        session.context.fill(fillStyle);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "line":
      x1 = parseSVGFloatAttribute(svg, "x1", 0);
      y1 = parseSVGFloatAttribute(svg, "y1", 0);
      x2 = parseSVGFloatAttribute(svg, "x2", 0);
      y2 = parseSVGFloatAttribute(svg, "y2", 0);
      session.context.beginPath();
      session.context.moveTo(x1, y1);
      session.context.lineTo(x2, y2);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "polygon":
      pointsString = svg.getAttribute("points");
      points = pointsString.match(/\d+/g).map((n) => parseInt(n, 10));
      session.context.poly(points, true);
      if (fillStyle)
        session.context.fill(fillStyle);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "polyline":
      pointsString = svg.getAttribute("points");
      points = pointsString.match(/\d+/g).map((n) => parseInt(n, 10));
      session.context.poly(points, false);
      if (strokeStyle)
        session.context.stroke(strokeStyle);
      break;
    case "g":
    case "svg":
      break;
    default: {
      warn(`[SVG parser] <${svg.nodeName}> elements unsupported`);
      break;
    }
  }
  if (noStyle) {
    fillStyle = null;
  }
  for (let i = 0; i < children.length; i++) {
    renderChildren(children[i], session, fillStyle, strokeStyle);
  }
}

export { SVGParser };
//# sourceMappingURL=SVGParser.mjs.map
