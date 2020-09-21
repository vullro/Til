'use strict'

const obj = {
	title : 'node.js'
}

const newObj = {
	name : 'bypark'
}

const a = Object.assign(obj, newObj)

console.log('Object assign : ', a )

// spread

const spreadObj = {
	...obj,
	...newObj
}

console.log('Spread Obj : ', spreadObj)

const arr = [1,2,3]
const arr2 = ['가', '나', '다']

const spreadArr = [
	...arr,
	...arr2
]
console.log('Spread Arr : ', spreadArr)
