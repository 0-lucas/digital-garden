import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import { StaticResources } from "../../resources"
import { EmitCallback, QuartzEmitterPlugin } from "../types"
import { ProcessedContent } from "../vfile"
import { Fragment, jsx, jsxs } from 'preact/jsx-runtime'
import { render } from "preact-render-to-string"
import { ComponentType } from "preact"
import { HeadProps } from "../../components/Head"
import { googleFontHref, templateThemeStyles } from "../../theme"
import { GlobalConfiguration } from "../../cfg"
import { HeaderProps } from "../../components/Header"

import styles from '../../styles/base.scss'

interface Options {
  Head: ComponentType<HeadProps>
  Header: ComponentType<HeaderProps>
}

export class ContentPage extends QuartzEmitterPlugin {
  name = "ContentPage"
  opts: Options

  constructor(opts: Options) {
    super()
    this.opts = opts
  }

  async emit(cfg: GlobalConfiguration, content: ProcessedContent[], resources: StaticResources, emit: EmitCallback): Promise<string[]> {
    const fps: string[] = []

    // emit styles
    emit({
      slug: "index",
      ext: ".css",
      content: templateThemeStyles(cfg.theme, styles)
    })
    fps.push("index.css")
    resources.css.push(googleFontHref(cfg.theme))

    for (const [tree, file] of content) {
      // @ts-ignore (preact makes it angry)
      const content = toJsxRuntime(tree, { Fragment, jsx, jsxs, elementAttributeNameCase: 'html' })

      const title = file.data.frontmatter?.title
      const { Head, Header } = this.opts
      const doc = <html>
        <Head
          title={title ?? "Untitled"}
          description={file.data.description ?? "No description provided"}
          slug={file.data.slug!}
          externalResources={resources} />
        <body>
          <div id="quartz-root" class="page">
            <Header title={cfg.siteTitle} slug={file.data.slug!} />
            <article>
              {file.data.slug !== "index" && <h1>{title}</h1>}
              {content}
            </article>
          </div>
        </body>
        {resources.js.filter(resource => resource.loadTime === "afterDOMReady").map(resource => <script key={resource.src} src={resource.src} />)}
      </html>

      const fp = file.data.slug + ".html"
      await emit({
        content: "<!DOCTYPE html>\n" + render(doc),
        slug: file.data.slug!,
        ext: ".html",
      })

      fps.push(fp)
    }
    return fps
  }
}
