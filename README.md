<!-- <p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p> -->

**⚠ WARNING: A naive prototype running an unstable genius. 🚧**

# Code with a Large Language Model

Coding in your IDE is great. Coding along with Copilot in your IDE can be even better, especially for unit tests.

What if we could steer LLMs code-writing with unit tests, and do Test Driven Development with the language model by describing in plain words what we want, have the language model write tests and iterate on implementation until the tests are green, linting passes and other code analysis checks succeeds.

# High level steps

These are the outline of high level steps it could take.

## Problem definition

Open an issue to describe what you want implemented. You probably need to steer the model with guidance as to where in the code base, give it some boundaries like "an express.js middleware that does XYZ".

This action will the use a large language model like OpenAI's GPT with prompt chaining to start working on your issue. It might reply back outlining the steps it plans to take, and perhaps you want to steer it based on this by replying back with your edits (optional).

## Write unit tests

Once the plan is a go, it will create a branch, write the unit tests for the planned changes and submit a draft pull request where you can view the tests. You can again edit the tests to steer the model, or comment with changes you want done.

## Iterate on implementation

Once the tests are written, it will start implementation and use checks on the PR as feedback for each commit. Once the tests pass, and all checks pass it will consider its job done until told otherwise.

It probably needs some upper limit as to how many times it can do this final loop so it doesn't run wild and drive up you action minutes consumption.

🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖 🤖

---

> Ignore below, from template

## Create an action from this template

Click the `Use this Template` and provide the new repo details for your action

## Code in Main

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies

```bash
$ npm install
```

Build the typescript and package it for distribution

```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
import * as core from '@actions/core';
...

async function run() {
  try {
      ...
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:

```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Validate

You can now validate the action by referencing `./` in a workflow in your repo (see [test.yml](.github/workflows/test.yml))

```yaml
uses: ./
with:
  creativity: 0.7
  ghToken: ${{ secrets.GITHUB_TOKEN }}
```

See the [actions tab](https://github.com/actions/typescript-action/actions) for runs of this action! :rocket:

## Usage:

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action
