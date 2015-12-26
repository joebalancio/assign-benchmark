# Assign Benchmark

Benchmarks [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [lodash](https://lodash.com/)'s `_.assign`, and [Underscore](http://underscorejs.org/)'s `_.assign`

## Installation

```js
npm install
```

## Usage

```js
npm start
```

## Example Output

```
lodash#assign 1 x 2,766,210 ops/sec ±1.13% (95 runs sampled)
underscore#assign 1 x 4,397,290 ops/sec ±0.73% (98 runs sampled)
Object#assign 1 x 956,923 ops/sec ±1.02% (92 runs sampled)
lodash#assign 2 x 908,126 ops/sec ±1.29% (93 runs sampled)
underscore#assign 2 x 1,341,048 ops/sec ±1.09% (93 runs sampled)
Object#assign 2 x 305,436 ops/sec ±0.86% (92 runs sampled)
Fastest is underscore#assign 1
Slowest is Object#assign 2
```

## Conclusion

List of implementations ordered by fastest to slowest

1. Underscore's `_.assign`
1. Lodash's `_.assign`
1. `Object.assign`
