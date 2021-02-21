const longest = (str) => {
    const words = {};
    const newstr = str.split(' ');
    for (const word of newstr) {
        words[word.length] = word;
    }
    return Object.values(words)[Object.keys(words).length - 1];
};
console.log(longest("good moorning and"));