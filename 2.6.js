function centuryFromYear(year) {
    if (year % 100 !== 0)
        var x = Math.floor(year / 100) + 1;
    else
        var x = Math.floor(year / 100);

    return x;
}

console.log(centuryFromYear(1900))