# Vote Logic

[![Build Status](https://travis-ci.org/davidmaitland/vote-logic.svg?branch=master)](https://travis-ci.org/davidmaitland/vote-logic) [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/davidmaitland/vote-logic?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

![votelogic-suggestions](http://i.imgur.com/biPi44v.png "Vote Logic Suggestions")

Vote Logic is a realtime feature/suggestion voting platform for projects, companies and organisations.

This project is the frontend to the counterpart API project [vote-logic-server](https://github.com/davidmaitland/vote-logic-server).

**WARNING:** Vote Logic is currently under heavy development and cannot be used for production.

## Features

- Truncated suggestion summaries in overview (30/12/14)
- Suggestion total count (28/12/14)
- Sort suggestions by popularity or date created (04/12/14)
- Add notes to suggestions (29/11/14)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation for development

* `git clone git@github.com:davidmaitland/vote-logic.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

