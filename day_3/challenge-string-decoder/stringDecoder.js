
let decoder = (code) => {
    let string_arr = []
    for (let i = 0; i < code.length; i++) {
        if (isNaN(code[i]) === false) {
            string_arr.push(code[i + 1 + Number(code[i])])
        }
    }
    return string_arr.join('')
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('0r'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))


