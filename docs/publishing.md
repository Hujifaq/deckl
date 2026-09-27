# Publish Deckl to npm

The package is prepared locally with a `deckl` executable, six agent adapters, ten bundled skills, and an MIT license. It has not been published by this project. `private: true` currently prevents an accidental registry release; local packing and installation still work.

## 1. Confirm the package identity

From the Deckl repository, with Node.js 22+ and npm installed:

```sh
npm login
npm whoami
npm view deckl name
```

If `npm view` returns a package, confirm that you own it before using that name. A registry `E404` can indicate that the name is unused; authentication or network errors do not establish availability. Availability can change before publication.

If the name is taken, choose an available unscoped name or a scope you own. For a scoped package, set `package.json`'s `name` to `@YOUR_NPM_USERNAME/deckl`, replacing the placeholder with your actual npm username or organization. Keep the binary name `deckl`. Update the README's npm and npx package names to match; the installed command stays `deckl`.

The current repository metadata is `https://github.com/Hujifaq/deckl`. Confirm it is your intended public repository. Push the README and assets to its `main` branch before release so npm's remotely linked artwork resolves.

## 2. Inspect and try the exact package

```sh
npm test
npm pack --dry-run
npm pack
```

For the current name and version, packing produces `deckl-0.1.0.tgz`. Inspect the listed files: the executable, agent registry, ten skill folders, supporting references, README, and license must be present. Credentials, local agent directories, and scratch files must be absent.

Try the packed archive locally without changing your personal agent directories:

```sh
npm exec --yes --package ./deckl-0.1.0.tgz -- deckl --help
npm exec --yes --package ./deckl-0.1.0.tgz -- deckl list
npm exec --yes --package ./deckl-0.1.0.tgz -- deckl install --agent claude --dry-run
```

You can also install that tarball globally yourself with `npm install -g ./deckl-0.1.0.tgz` and try `deckl --help`. Installing the npm command does not copy skills; `deckl install` performs that separate step. Verify discovery and invocation in each advertised agent, including its supported platforms and settings, before claiming end-to-end compatibility.

## 3. Publish when you are ready

Review the name, version, MIT license, package files, and release scope. Then remove the local publication guard and publish:

```sh
npm pkg delete private
npm publish --access public
```

Follow npm's authentication prompts. These commands create a public registry release. They have not been run by the assistant.

If you do not publish immediately, restore the guard with `npm pkg set private=true --json`.

## 4. Share the installation

Once the registry release is confirmed for the unscoped `deckl` name, users can run:

```sh
npx deckl install
```

Or keep the command installed:

```sh
npm install -g deckl
deckl install
```

For scripts and noninteractive environments:

```sh
npx deckl install --agent claude
npx deckl install --agent codex --scope project
```

Remove preview wording and the installation graphic's “after npm publication” label only after verifying the release. Keep the distinction between tested file installation and live agent behavior.

## Future releases

Update the changelog and version, run the checks, inspect the tarball, then publish a new version. npm versions cannot be overwritten. Updating the npm executable does not replace installed skill copies: users must preserve local edits and deliberately replace their installed folders.

References: [npm publishing](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages/), [package executables and files](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/).
