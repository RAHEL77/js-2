function weirdWord(str) {
    let arr = str.split("");
    for (i = 0; i < arr.length; i += 2) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr.join('');
}

console.log(weirdWord("great day today"));