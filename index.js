'use strict'

const Benchmark = require('benchmark')
const lodash = require('lodash')
const underscore = require('underscore')
const suite = new Benchmark.Suite('assign')

const source1 = { a: 1, b: 2, c: 3 }
const source2 = {
	c: 0,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 15,
	o: 15,
	p: 16,
}

// add tests
suite
	.add('lodash#assign 1', () => {
		lodash.assign({}, source1)
	})
	.add('underscore#assign 1', () => {
		underscore.assign({}, source1)
	})
	.add('Object#assign 1', () => {
		Object.assign({}, source1)
	})
	.add('lodash#assign 2', () => {
		lodash.assign({}, source1, source2)
	})
	.add('underscore#assign 2', () => {
		underscore.assign({}, source1, source2)
	})
	.add('Object#assign 2', () => {
		Object.assign({}, source1, source2)
	})

// add listeners
suite
	.on('cycle', (event) => console.log(String(event.target)))
	.on('complete', () => {
		console.log('Fastest is ' + suite.filter('fastest').pluck('name'))
		console.log('Slowest is ' + suite.filter('slowest').pluck('name'))
	})

// run async
suite
	.run({ defer: true })
