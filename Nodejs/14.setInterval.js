'use strict'

setInterval(()=>{
	console.log('setInterval')
}, 1000)

setImmediate(()=>{
	console.log('setImmediate')
})

setTimeout(()=>{
	console.log('setTimeout')
}, 0)
