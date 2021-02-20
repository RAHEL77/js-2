var array = [1, 2, 3];
array.forEach(function(i) {
    console.log(i);
});

const arr = [1, 2, 3];
const map1 = arr.map(function(num) {
    return num
});
console.log(map1)


///filter
const arr3 = [{ count: 1, kind: "soft" }, { count: 2, kind: "white" }, {
    count: 1,
    kind: "black"
}];
const filter1 = arr3.filter(function(array) {
    return array.count === 1;
});
console.log(filter1)