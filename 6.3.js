function longest(a, b) {
    let arr = a + b

    let obj = {};
    for (const letter of arr) {
        obj[letter] = obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }
    arr = Object.keys(obj);
    // let a2 = Object.values(obj)
    // console.log(a2)
    return arr.sort().join('');
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));