const a = ['a', 'b']
let arr = [0, a, 'aaaa']
console.log(arr)

for (let item of arr) {
  console.log(item)
}

arr.push(2)

console.log(arr)

arr.splice(0, 1)
console.log(arr)

console.log(arr.length)

arr.unshift(1111)
console.log(arr)

const b = ['fenghao', 'hahaha']
arr = arr.concat(b)
console.log(arr)
