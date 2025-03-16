export default rehypeMathJaxChtml;
/**
 * Render elements with a `language-math` (or `math-display`, `math-inline`)
 * class with MathJax using CHTML.
 *
 * @param options
 *   Configuration (`options.chtml.fontURL` is required).
 * @returns
 *   Transform.
 */
declare const rehypeMathJaxChtml: (options?: Readonly<import("./create-plugin.js").Options> | null | undefined) => (tree: import("hast").Root, file: import("vfile").VFile) => undefined;
//# sourceMappingURL=chtml.d.ts.map