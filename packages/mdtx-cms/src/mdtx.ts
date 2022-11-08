export const htmlContent = {
    "basics\\HowToStart.md": {
        "content": "\r\n# Hello world\r\n",
        "data": {
            "title": "How to start"
        },
        "excerpt": ""
    },
    "mdTestFile.md": {
        "content": "\r\n# Markdown syntax guide\r\n\r\n## Headers\r\n\r\n# This is a Heading h1\r\n\r\n## This is a Heading h2\r\n\r\n### This is a\r\n\r\n#### This is a Heading h4\r\n\r\n##### This is a test Heading h5\r\n\r\n###### This is a Heading h6\r\n\r\n## Emphasis\r\n\r\n_This text will be italic_  \r\n_This will also be italic_\r\n\r\n**This text will be bold**  \r\n**This will also be bold**\r\n\r\n_You **can** combine them_\r\n\r\n## Lists\r\n\r\n### Unordered\r\n\r\n- Item 1\r\n- Item 2\r\n- Item 2a\r\n- Item 2b\r\n\r\n### Ordered\r\n\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n1. Item 3a\r\n1. Item 3b\r\n\r\n## Images\r\n\r\n![This is a alt text.](/aexol_full_logo.png 'This is a sample image.')\r\n\r\n## Links\r\n\r\nYou may be using [Markdown Live Preview](https://markdownlivepreview.com/).\r\n\r\n## Blockquotes\r\n\r\n> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\r\n>\r\n> > Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\r\n\r\n## Tables\r\n\r\n| Syntax    | Description |\r\n| --------- | ----------- |\r\n| Header    | Title       |\r\n| Paragraph | Text        |\r\n\r\n## Blocks of code\r\n\r\n```\r\nlet message = 'Hello world';\r\nalert(message);\r\n```\r\n\r\n## Inline code\r\n\r\nThis web site is using `aexol-studio/mdtx`.\r\n",
        "data": {
            "link": "changelog",
            "title": "Changelog",
            "order": 99
        },
        "excerpt": ""
    },
    "Changelog.md": {
        "content": "# MDtx [![NPM Version](https://img.shields.io/npm/v/mdtx.svg?style=flat)](https://www.npmjs.com/package/mdtx) [![NPM Version](https://img.shields.io/github/checks-status/aexol-studio/mdtx/main)](https://www.npmjs.com/package/mdtx) [![NPM Version](https://img.shields.io/github/last-commit/aexol-studio/mdtx)](https://github.com/aexol-studio/mdtx)\r\n\r\nInspired by generative programming and weed :). So I was learning Elm language at home usually in the evening and now I am missing all this generative stuff from Elm libs in TS.\r\n\r\n![Alt Text](sandbox/mdtx-nextjs-example/public/PresentationOfMDtx.gif)\r\n\r\n# What is MDtx?\r\n\r\n- When you add **Markdown** files with gray matter it will generate typings for those,\r\n- Genereted typings from **Markdowns** can get automatically convert into html structure,\r\n- There is **Next JS Plugin** to work faster with MDtx on NextJS,\r\n\r\n# What we serve?\r\n\r\n## [![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/aexol-studio/mdtx?color=yellow&filename=%2Fpackages%2Fmdtx-cli%2Fpackage.json&label=CLI&style=for-the-badge)](https://github.com/aexol-studio/mdtx) | [![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/aexol-studio/mdtx?color=green&filename=%2Fpackages%2Fmdtx-core%2Fpackage.json&label=CORE&style=for-the-badge)](https://github.com/aexol-studio/mdtx/tree/main/packages/mdtx-core) | [![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/aexol-studio/mdtx?color=white&filename=%2Fpackages%2Fmdtx-plugin-nextjs%2Fpackage.json&label=NextJS-plugin&style=for-the-badge)](https://github.com/aexol-studio/mdtx/tree/main/packages/mdtx-plugin-nextjs)\r\n\r\n## Readme CLI\r\n\r\n#### Instaling MDtx\r\n\r\n```\r\nnpm i mdtx\r\n```\r\n\r\n#### Initializing MDtx\r\n\r\n```\r\nmdtx init\r\n```\r\n\r\n#### After initalize config file mdtx.json apear as that:\r\n\r\n```\r\n{\r\n  \"in\": \"./content\",\r\n  \"out\": \"./src\",\r\n}\r\n```\r\n\r\n- in: string - means folder with content, **(default: \"./content\")**\r\n- out: string - means folder to generate mdtx.ts file, **(default: \"./src\")**\r\n\r\n#### Optionally:\r\n\r\n- markdownToHtml: boolean - allow mdtx covert md content to html content. **(default: false)**\r\n\r\n#### Watch mode (on \"in\" path)\r\n\r\n```\r\nmdtx\r\n```\r\n\r\n#### Build mode (trigger once)\r\n\r\n```\r\nmdtx -b\r\n```\r\n\r\n#### [Readme CORE](https://github.com/aexol-studio/mdtx/tree/main/sandbox/mdtx-example/Readme.md)\r\n\r\n#### [Readme NextJS Plugin](https://github.com/aexol-studio/mdtx/tree/main/sandbox/mdtx-nextjs-example/Readme.md)\r\n\r\n## Roadmap\r\n\r\n- [x] NextJS plugin\r\n- [ ] Gatsby plugin\r\n- [ ] Tree building\r\n- [ ] Summary building\r\n- [ ] Other language generation\r\n",
        "data": {},
        "excerpt": ""
    }
} as const