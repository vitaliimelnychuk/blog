---
title: Code coverage as a part of CI/CD
date: 25 Feb 2021
description: This article describes how to make Github Actions working for you. Sometimes we so busy to automate to make us less busy. I am sharing the common workflow that you can just copy from project to project and adding code coverage changes based checking at the end.
---

This article is not related to my current job, but reflects all my side projects and shows how far you can go once you have an idea in mind.

It started this autumn when I developed a few personal projects to try out new technologies/libs. Mostly, for daily basics I am using [TDD](_https://en.wikipedia.org/wiki/Test-driven_development_) approach and unit testing is mandatory for me as it easy to support and covers most critical cases.

## My Github workflow

Mostly, I am a big fun of [Github Actions](_https://github.com/features/actions_). I was so thrilled once beta was release last year and decided to move everything from CircleCI to Github Actions.

### Invest a few minutes in your project feature

If you are reading this and worked on something very legacy you understand this from the beginning. Things are going to be complicated event we try to keep them simple and think they will not be. Of course, there are a lot of ways how you can avoid it, the question how much time you have to invest to project setup.
Once new idea comes, the last thing we want is to think how we can deploy it or how to setup CI.

### Have a workflow that you can just copy

What I really like in Github Actions they are so intuitive. Even, first time looking there you can change commands and make it as you need.

I am using a few workflows that I am copying from project to project just to have everything settled up and improve as project growth. It makes everything clean at the begging without additional complexity and still give a lot of space for future improvements.

### Linting/Formatting/Tests

This is the first I suggest to add to your project (if you don’t have one) that will improve your daily basics development and team mood.
One thing that I think should be reviewed by other developers - _code styling_. Static code analysers are so great can be configurable to make it done even before someone else start looking to the code. Sometimes, it’s not only about saving time, it’s also improve your team communication and focus on something that is really better. Instead of argufying on indentation, unwed variables issues you can talk about optimising performance. I am not trying to say that code styling is not important - it’s so important but it’s something that should be defined once and followed without a lot of attention.

Here is basic workflow, where you are able just to copy to project and maybe change commands based on the tools you are using. This one is for Node.js application that are using _eslint_, _prettier_, _yarn_. As a note, all these commands should have been described in package.json file.

```yaml
name: CI

on: [push]

jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.13.1
        uses: actions/setup-node@v1
        with:
          node-version: 12.13.1
      - name: Cache node modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: node_modules-v1-${{ hashFiles('yarn.lock') }}
          restore-keys: |
            node_modules-

      - name: Install dependencies
        run: yarn

      - name: Run linting checks
        run: yarn lint

      - name: Run formatting checks
        run: yarn format-check

      - name: Run tests
        run: yarn test
```

## Code coverage

It was general working evening, me and my colleague were working on the new Node.js service and ended up with code review.

Usually, I am making `git checkout {review_branch}` before making Github review. I am doing this to check tests, coverage and how everything is organized.

I don’t really like this process, actually I hate it sometimes. Sometimes, I have something I am working on and it’s on the unfinished state. It’s going to be total mess to stashing these changed switching branches and so on and this all only for checking total code coverage.

At that point, I started research - what we can use for code coverage instant Github responses. As far, as we are using Github mostly for everything why we just run some command that gives us report about current coverage?

### Tool requirements

There are some great tools that are really powerful for code coverage reports like [https://coveralls.io/](https://coveralls.io/) and [https://about.codecov.io/](https://about.codecov.io/).

I am not going to describe pros/cons of solutions we already have on the cloud and what’s they give us. They both are great if you are looking for third-party as code-coverage analyser. At that time I was looking for something that I can easily make a part of my workflow that I will copy from project to project and enjoy using.

In my mind, I was looking for tool to make it a part of review workflow, where you have everything integrated in Github and avoid switching somewhere else.

- Should be built over Github Actions
- Updates code coverage trend for incoming changes
- Show lines of uncovered files

Those are three main things we wanted to have automated without additional third-party service.

## Barecheck

There is no better way of spending autumn evening than on writing something new for you, especially if you are going to use it in daily basics. P.S. This is how a few barecheck projects where started.

[GitHub - barecheck/code-coverage-action](https://github.com/barecheck/code-coverage-action) - GitHub Action that generates code coverage reports.
I wanted to share it with everyone as a part of daily routine that we all have.

The action is built over **_lcov_** code coverage report by parsing code coverage results and gives just summary statistic in the comment.

<img
  src="/static/img/articles/2021-02-25/barecheck-comment.png"
  width="100%"
/>

I have been enjoying using it for a few months and wanted to share with everyone, It’s already released on [Barecheck - Code Coverage · Actions · GitHub Marketplace · GitHub](https://github.com/marketplace/actions/barecheck-code-coverage) and can be added as a separate workflow to your project

```yaml
name: Code Coverage

on: [pull_request]

jobs:
  base_branch_cov:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          ref: ${{ github.base_ref }}
      - name: Use Node.js 12.13.1
        uses: actions/setup-node@v1
        with:
          node-version: 12.13.1

      - name: Install dependencies
        run: yarn

      - name: Run test coverage
        run: yarn coverage

      - name: Upload code coverage for ref branch
        uses: actions/upload-artifact@v2
        with:
          name: ref-lcov.info
          path: ./coverage/lcov.info

  checks:
    runs-on: ubuntu-latest
    needs: base_branch_cov
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.13.1
        uses: actions/setup-node@v1
        with:
          node-version: 12.13.1

      - name: Download code coverage report from base branch
        uses: actions/download-artifact@v2
        with:
          name: ref-lcov.info

      - name: Install dependencies
        run: yarn

      - name: Run test coverage
        run: yarn coverage

      #  Compares two code coverage files and generates report as a comment
      - name: Generate Code Coverage report
        id: code-coverage
        uses: barecheck/code-coverage-action@v0.2.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          lcov-file: './coverage/lcov.info'
          base-lcov-file: './lcov.info'
          minimum-ratio: 0 # Fails Github action once code coverage is decreasing
          send-summary-comment: true
```

This example shows how you can force on the code coverage by failing jobs with lower coverage. It’s also worth to mention that action is working more with /comparing/ changes so you easily can start with projects that already have low coverage but you want to improve it.

I hope you enjoyed reading that I shared today to make everyday’s routine better and give it a try.
