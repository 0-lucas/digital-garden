/**
 * Create a renderer.
 *
 * @param {Options} options
 *   Configuration.
 * @param {OutputJax<LiteElement, LiteText, LiteDocument>} output
 *   Output jax.
 * @returns {Renderer}
 *   Rendeder.
 */
export function createRenderer(options: Options, output: OutputJax<LiteElement, LiteText, LiteDocument>): Renderer;
import type { Options } from './create-plugin.js';
import type { LiteElement } from 'mathjax-full/js/adaptors/lite/Element.js';
import type { LiteText } from 'mathjax-full/js/adaptors/lite/Text.js';
import type { LiteDocument } from 'mathjax-full/js/adaptors/lite/Document.js';
import type { OutputJax } from 'mathjax-full/js/core/OutputJax.js';
import type { Renderer } from './create-plugin.js';
//# sourceMappingURL=create-renderer.d.ts.map