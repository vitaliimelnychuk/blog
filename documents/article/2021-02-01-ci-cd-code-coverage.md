---
title: Code coverage as a part of CI/CD
date: 02 Feb 2021
description: Testing is important part of daily software development.
---

This article is not related to my current job, but reflects all my side projects and show how far tou can go once you have an idea in mind.

It started this autumn when I developed a few personal projects to try out new technologies/libs. Mostly, for daily basics I am using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) approach and unit testing is mandatory for me as it easy to support and covers most critical cases.

## My Github workflow

In most of my projects I am using [Github Actions](https://github.com/features/actions).

Generally, I am starting project with current workflows setup:

- CI checks workflow

  This is basic workflows that we are running for all `push` events. It's our main workflow that is actually most important, we use in daily basics. Here is example how it looks like

```yml
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

There is nothing so special - just commands we are using the most to control code consistency. Of course, they all can be run on your local machine as well, but are you really sure they were run?

- Staging deployment

Basically, we are running this workflow from `staging`. This is just one more layer before changes go to production.

- Production deployment

The same as for staging but environment is different. I am using AWS for all projects but the idea here is to have just an workflow to deploy your changed somewhere.

## Idea

It was general working evening, me and my collegue were working on the new Node.js service and ended up with code review.

Usually, I am making `git checkout {review_branch}` before making Github review. I am doing this to check tests, coverage and how everything organized.

I don't really like this process, actually I hate it sometimes. Sometimes, I have something I am working on and it's on the unfinished state. It's going total mess to stashing these changed switching branches and so on and this all only for checking total code coverage

At that point, I started research - what we can use for code coverage instant Github responses. As far, as we are using Github mostly for everything why we just run some command that gives us report about current coverage?
