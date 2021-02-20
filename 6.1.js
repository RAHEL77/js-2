function mumbling(str) {
    let arr = str.split("");
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        arr2.push(`${arr[i].toUpperCase()}${arr[i].toLowerCase().repeat(i)}`);
    }
    return arr2.join('-');
}

console.log(mumbling("nfjs"))