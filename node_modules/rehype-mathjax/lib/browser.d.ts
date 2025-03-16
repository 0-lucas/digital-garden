export default rehypeMathJaxBrowser;
/**
 * Render elements with a `language-math` (or `math-display`, `math-inline`)
 * class with MathJax with marker for MathJax in the browser.
 *
 * @param [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
declare const rehypeMathJaxBrowser: (options?: Readonly<import("./create-plugin.js").Options> | null | undefined) => (tree: import("hast").Root, file: import("vfile").VFile) => undefined;
//# sourceMappingURL=browser.d.ts.map