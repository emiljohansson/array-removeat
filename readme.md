# array-removeAt [![Build Status](https://travis-ci.org/emiljohansson/array-removeat.svg?branch=master)](https://travis-ci.org/emiljohansson/array-removeat)

> Removes an item from a specific position.

## Install

```
$ npm install --save array-removeat
```

## Usage

```js
var removeAt = require('array-removeat');
removeAt([1, 2, 3], 1);
// => [1, 3]
```

## API

### removeAt(array, index)

Returns the modified array.

#### array

Type: `array`

The array to modify.

#### index

Type: `index`

Position where to modify the array.

## License

MIT © Emil Johansson
