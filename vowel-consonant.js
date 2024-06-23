const prompt = require('prompt-sync')(); 


let inputString = prompt("Input one line of words (S): ")                                                       

function findVowels(text) {
    const vowels = "aeiouAEIOU";
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
       if(vowels.includes(text[i])) {
        result += text[i].toLowerCase()
       }
    }
    return result;
}

function findConsonant(text) {
    const vowels = "aeiouAEIOU";
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
       if(!vowels.includes(text[i])) {
        result += text[i].toLowerCase().replace(/ /g,"")
       }
    }
    return result;
}

let vowelsFound = findVowels(inputString)
let consonantFound = findConsonant(inputString)

console.log(`Vowel characters: ${vowelsFound}`)
console.log(`Consonant Characters: ${consonantFound}`)
