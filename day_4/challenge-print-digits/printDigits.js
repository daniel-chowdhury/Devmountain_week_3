
// function printDigits(num) {
//     while (num > 0) {
//         let digit_right = num%10
//         console.log(digit_right)
//         num = (num - (num%10))/10
//     }
// }

// printDigits(1)
// console.log("------------")
// printDigits(314)
// console.log("------------")
// printDigits(8596668)
// console.log("------------")



function printDigits (num) {
    while (num > 0) {
        let digit = num % 10
        console.log(digit)
        num = Math.floor(num /= 10)
    }
}


printDigits(764833)