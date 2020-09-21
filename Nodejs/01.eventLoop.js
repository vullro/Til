'use strict'
// 스택 LIFO
const stack = []
stack.push(1)
stack.push(2)
stack.push(3)

console.log('stack before : ', stack)

var s= stack.pop()
console.log('stack.pop : ', s)

console.log('stack after : ', stack)


// 큐 FIFO

const queue = []
queue.push(4)
queue.push(5)
queue.push(6)

console.log('queue before : ', queue)

var q = queue.shift()

console.log('queue.shift : ', q)

console.log('queue after : ', queue)

