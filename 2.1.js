function sumTwoSmallestNumbers(numbers) {
    let result = numbers.sort((a, b) => a - b)
        .slice(0, 2);

    var sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

const numbers = [10, 343445353, 3453445, 3453545353453]

console.log(sumTwoSmallestNumbers(numbers))