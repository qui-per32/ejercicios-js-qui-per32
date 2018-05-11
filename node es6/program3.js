var inputs = process.argv.slice(2);
var letters = inputs.map(x => x[0]);
let result = "";
    for (const letter of letters) {
        result += letter;        
    }
console.log(`[${inputs}] becomes "${result}"`);