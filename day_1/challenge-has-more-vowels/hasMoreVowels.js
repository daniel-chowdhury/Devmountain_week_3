function hasMoreVowels(word) {
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    let vowel_count = 0

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word.charAt(i) === vowels[j]) {
            vowel_count++
            break
        }
    }
}
return (vowel_count > word.length/2)
}

console.log(hasMoreVowels("SleepMore"))