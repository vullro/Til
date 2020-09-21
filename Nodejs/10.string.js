'use strict'

const string = 'node.js 올인원 패키지'

let isStartsWith = string.startsWith('n')
let isIncludes = string.includes(',')
let isEndsWith = string.endsWith('지')
console.log(isStartsWith)
console.log(isIncludes)
console.log(isEndsWith)

const checkIfContains =() => {
	if ( isStartsWith && isIncludes && isEndsWith){
		return true
	}
}

console.log(checkIfContains())
