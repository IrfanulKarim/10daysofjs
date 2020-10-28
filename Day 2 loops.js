'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
var i;
// var vowel = "aieou";
var consonent =[];
function vowelsAndConsonants(s) {
    for ( i in s){
        if(s[i]== "a" || s[i]=="e" ||s[i]=="i" ||s[i]=="o" ||s[i]=="u"){
            console.log(s[i]);
        }
        else{
            consonent+=s[i] + '\n';
        }
    }

    console.log(consonent);

}

////////////////////////////    Another way     /////////////////  

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
var i;
var vowel = "aieou";
var consonent =[];
function vowelsAndConsonants(s) {
    for ( i in s){
        if(vowel.includes(s[i])){
            console.log(s[i]);
        }
        else{
            consonent+=s[i] + '\n';
        }
    }

    console.log(consonent);

}

