function analyzeSentence(sentence) {
    sentence = sentence.trim(); 
    let length = 0;
    let words = 0;
    let vowels = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i);
        
        if (char.match(/[a-zA-Z]/)) { // Check if the character is alphabetic
            length++;
            if (char.match(/[aeiouAEIOU]/)) { // Check if it's a vowel
                vowels++;
            }
        } else if (char === ' ') { // Count words based on spaces
            words++;
        }
    }
    
    // Adding the last word after the loop 
    words++;
    
    return [length, words, vowels];
}

let sentence = "Hello,i am Jennifer Mmesoma";
let [length, words, vowels] = analyzeSentence(sentence);

console.log("Length of the sentence:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);
