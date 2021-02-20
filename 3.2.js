const totalPeopleInBus = (arr) => arr.reduce((total, [enter, exit]) => total + enter - exit, 0);


console.log(totalPeopleInBus([
    [10, 0],
    [5, 3],
    [4, 4],
    [3, 8],
    [0, 2],
]))
















//const stops = [
// const inBus = stops.reduce(
//     (n, [gotIn, gotOut]) => n + gotIn - gotOut,
//     0
//     )