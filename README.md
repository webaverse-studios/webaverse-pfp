<!-- markdownlint-disable -->

<img src="public/images/screenshots/base_page.png" width=100% />

<p align="center">
    <a href="https://github.com/webaverse-studios/webaverse-pfp/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/webaverse-studios/webaverse-pfp" />
    </a>
    <a href="https://discord.gg/webaverse">
        <img src="https://img.shields.io/discord/906925486049992755.svg?logo=discord" alt="chat on Discord">]
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=webaverse">
        <img src="https://img.shields.io/twitter/follow/webaverse?style=social&logo=twitter" alt="follow on Twitter">
    </a>
</p>

<h1 align="center">Webaverse-Studios PFP</h1>
<!-- markdownlint-enable -->

## Setup

1. Setup base .yarnrc.yml file with auth token

```bash
<.yarnrc.yml>
...
npmRegistries:
  //npm.pkg.github.com:
    npmAuthToken: "<personal auth token>"
...
```

2. Install dependencies and start development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

**app**:

- Folders are used to define routes. A route is a single path of nested folders, following the hierarchy from the root folder down to a final leaf folder that includes a page.js file.
- Files are used to create UI that is shown for the route segment. See special files.

**pages**:

- Next.js api routes are still defined here.

**styles**:

- All css definited within this folder. This is also the generation point for tailwind.

**ui**:

- Contains all UI components that are used within the app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [App dir docs](https://beta.nextjs.org/docs/routing/fundamentals) - Next.js 13 introduced a new file-system based router built on top of React Server Components with support for layouts, nested routing, loading states, error handling, and more

You can check out [the Next.js GitHub reposito](https://github.com/vercel/next.js/)[![All Contributors](https://img.shields.io/github/all-contributors/webaverse-studios/webaverse?color=ee8449&style=flat-square)](#contributors)ry - your feedback and contributions are welcome!

## Libraries Used

- [yarn berry](https://github.com/yarnpkg/berry): Yarn is a modern package manager split into various packages
- [nextjs](https://nextjs.org/): The React Framework for the Web
- [tailwindcss](https://tailwindcss.com/): utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup

## License

Except where noted (below and/or in individual files), all code in this repository is dual-licensed under:

- MIT License ([LICENSE-MIT](LICENSE-MIT) or [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<!-- markdownlint-restore -->

<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
