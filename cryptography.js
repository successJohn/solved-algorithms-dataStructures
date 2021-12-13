// 1. Generate Letters of the Alphabet

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
console.log(alphabet);

function encrypt(words, num){
    let dars= [];
    //split words into array
    const splitted = words.split('');
    //run a loop to check for each element of the array in the alphabet
    for(let y of splitted){
        //get the position of the element "alphabet.indexOf(y), add the number and return the position in the alphabet"
        if(num === 1){
            dars.push(alphabet[((alphabet.indexOf(y) + num ))])
        }
        if(num > 1){
            dars.push(alphabet[(alphabet.indexOf(y) + num-1)])
        }
    }
    return dars.join('');
}

console.log(encrypt("abcd", 1))
console.log(encrypt("abcd", 5))
console.log(encrypt("abcd", 6))



function decrypt(words, num){
    let dars= [];
    //split words into array
    const splitted = words.split('');
    //run a loop to check for each element of the array in the alphabet
   
    for(let y of splitted){
        //get the position of the element "alphabet.indexOf(y), add the number and return the position in the alphabet"

        if(num >= 1){
            dars.push(alphabet[((alphabet.indexOf(y) - (num-1) ))])
        }

    }
    return dars.join('');
}

console.log(decrypt("efgh", 1))
console.log(decrypt("fghi", 5))
// decrypt not working perfectly
//console.log(encrypt("abcd", 6))