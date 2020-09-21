'use strict'

const arr = [20,3,2,1,65,43]
// map
const newArr = arr.map(elem => { 
	return elem + 1 
})

console.log( 'map : ', newArr)


// filter 

const filter = arr.filter(elem => elem > 5)

console.log( 'filter : ', filter)
