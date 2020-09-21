'use strict'

callFunc('before')


function callFunc(elem) {
	console.log('hi call ', elem)
}

callFunc('after')


callFunc2('before') // error 


const callFunc2 = function(elem) {
	console.log('hi call ', elem)
}

callFunc2('after')


