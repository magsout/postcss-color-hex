# postcss-color-hex [![Travis Build Status](https://travis-ci.org/magsout/postcss-color-hex.svg)](https://travis-ci.org/magsout/postcss-color-hex) 

> [PostCSS](https://github.com/postcss/postcss) plugin to transform rgba() to hexadecimal.

## Installation

```bash
$ npm install postcss-color-hex
```

## Usage

```js
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var colorHex = require("postcss-color-hex")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(colorHex())
  .process(css)
  .css
```

Using this `input.css`:

```css
body {
  background: rgba(153, 221, 153, 0.8);
  border: solid 1px rgba(100,102,103,.3);
}

```

you will get:

```css
body {
  background: #99DD99;
  background: rgba(153, 221, 153, 0.8);
  border: solid 1px #646667;
  border: solid 1px rgba(100,102,103,.3);
}
```

Checkout [tests](test) for more examples.

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

    $ git clone https://github.com/magsout/postcss-color-hex.git
    $ git checkout -b patch-1
    $ npm install
    $ npm test

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
