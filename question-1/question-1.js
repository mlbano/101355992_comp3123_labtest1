function lowercaseWords(inputArray){
    let p1 = new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)){
            reject("Input is not an array.");
        }
        else{
            const filteredWords = inputArray
            .filter((item)=> typeof item === 'string')
            .map((word) => word.toLowerCase());

            if(filteredWords.length === 0){
                reject("No words were found.");
            }
            else{
                resolve(filteredWords);
            }
        }
    });
    return p1;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
console.log(lowercaseWords(mixedArray));