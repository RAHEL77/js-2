function camelCase(str) {
    let arr = str.split("-");
    for (const word of arr) {
        let newWord = word.replace(word[0], word[0].toUpperCase());
        arr[arr.indexOf(word)] = newWord;

    }
    return arr.join('')
}

console.log(camelCase("best-full-stack-course-in-israel"));