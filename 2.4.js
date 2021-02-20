function diff(arr) {
    arr = arr.sort((b, a) => b - a);
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
    // when 1,1,1,21 => if 1!==1
    // when 0.5,1,1, => if 0.5!=1
}

console.log(diff([1, 1, 1, 21, 1]));