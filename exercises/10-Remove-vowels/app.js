// Your code goes here
const rapid = (str) => {
    let resultado ="";
    for(let i = 0; i<str.length; i++) {
        let  char = str[i].toLowerCase();
        if ('aeiou'.includes(char)){
            continue;
        }
        resultado += char.toUpperCase();
    }
    return resultado
};
// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
