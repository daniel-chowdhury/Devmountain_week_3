function best(input_array) {
   let remainder = []
   let profit = []
   

   for (let i = 0; i < input_array.length; i++) {
    remainder = input_array.slice(i+1, input_array.length)
    let remainder_max = Math.max(...remainder)
    profit.push(remainder_max - input_array[i])
   }

   return Math.max(...profit)
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 2, 3, 4, 5]))
console.log(best([7, 6, 5, 6, 4, 3, 2, 1]))
console.log(best([7, 9, 5, 6, 3, 2]))
console.log(best([0, 100]))
