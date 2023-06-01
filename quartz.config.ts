import { buildQuartz } from "./quartz"
import Head from "./quartz/components/Head"
import Header from "./quartz/components/Header"
import { ContentPage, CreatedModifiedDate, Description, FrontMatter, GitHubFlavoredMarkdown, Katex, ObsidianFlavoredMarkdown, RemoveDrafts, ResolveLinks, SyntaxHighlighting } from "./quartz/plugins"

export default buildQuartz({
  configuration: {
    siteTitle: "🪴 Quartz 4.0",
    enableSPA: true,
    ignorePatterns: ["private", "templates"],
    theme: {
      typography: { // loaded from Google Fonts
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: '#faf8f8',
          lightgray: '#e8e8e8',
          gray: '#dadada',
          darkgray: '#4e4e4e',
          dark: '#141021',
          secondary: '#284b63',
          tertiary: '#84a59d',
          highlight: 'rgba(143, 159, 169, 0.15)',
        },
        darkMode: {
          light: '#1e1e21',
          lightgray: '#292629',
          gray: '#343434',
          darkgray: '#d4d4d4',
          dark: '#fbfffe',
          secondary: '#7b97aa',
          tertiary: '#84a59d',
          highlight: 'rgba(143, 159, 169, 0.15)',
        },
      }
    }
  },
  plugins: {
    transformers: [
      new FrontMatter(),
      new Katex(),
      new Description(),
      new CreatedModifiedDate({
        priority: ['frontmatter', 'filesystem'] // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      new SyntaxHighlighting(),
      new GitHubFlavoredMarkdown(),
      new ObsidianFlavoredMarkdown(),
      new ResolveLinks(),
    ],
    filters: [
      new RemoveDrafts()
    ],
    emitters: [
      new ContentPage({
        Head: Head,
        Header: Header
      })
    ]
  },
})
