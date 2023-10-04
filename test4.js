function doesTheAlphabetExits(str){
const alphabets = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
const lowercase = str.toUpperCase(alphabets);
for (let alphabet of alphabets){
    if (!lowercase.includes(alphabet)){
        return false;
    }   
}
return true;
}
const givenWord= 'The quick brown fox jumps over the la dog'
console.log(doesTheAlphabetExits(givenWord))
