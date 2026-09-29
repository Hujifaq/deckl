# Release a Deckl update

The package name is `@hujifaq/deckl`. The installed executable is `deckl`. The unscoped `deckl` name was rejected by npm, so keep the scoped name in installation examples.

The arrow-key setup is a local change pending release. Publishing a new version is required before npm users receive it.

## Check the update

From the Deckl repository:

```sh
npm test
node bin/deckl.mjs install --dry-run
npm pack --dry-run
```

Use arrows, Space, and Enter to preview setup. Escape or Ctrl+C cancels. Inspect the package list for `bin/deckl.mjs`, `scripts/setup.mjs`, the installer, six adapters, all ten skills and references, README, and MIT license.

## Choose a fresh version

```sh
npm whoami
npm view @hujifaq/deckl versions
```

The publishing account should be `hujifaq` or another authorized maintainer. If necessary, run `npm login`. Never reuse a published version, even if it has been unpublished. If the local version matches the latest published version, increment it:

```sh
npm version patch --no-git-tag-version
```

For local `0.1.0`, that produces `0.1.1`. If `0.1.1` already exists in the registry, choose a higher unused version instead. Review `package.json` before continuing.

## Publish

Update the changelog and remove the README and installation artwork's next-release labels once this release is ready. Commit and push the README and assets to GitHub so npm's remote images resolve. Then run:

```sh
npm publish --access public
```

Complete npm's authentication. The output must finish with a success line such as `+ @hujifaq/deckl@0.1.1`. A generated tarball alone does not confirm publication.

## Verify and share

```sh
npm view @hujifaq/deckl version
npx @hujifaq/deckl@latest install --dry-run
```

Users can launch setup with `npx @hujifaq/deckl@latest install`, or update the global command:

```sh
npm install -g @hujifaq/deckl@latest
deckl install
```

Updating the command does not replace existing skill copies. Preserve any local edits before moving an installed skill folder aside and installing the new copy.

References: [scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/), [package executables and files](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/).
