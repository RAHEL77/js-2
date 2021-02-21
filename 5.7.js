const shortWord = (str) => {
    const words = {};
    const newstr = str.split(' ');
    for (const word of newstr) {
        words[word.length] = word;
    }
    return Object.keys(words)[0];
};
console.log(shortWord("good moorning and"));