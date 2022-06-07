//1)
let obj = {
    country: 'Ukraine',
    capital: 'Kyiv',
    population: '44,13 mil',
    superpower: 'ukrainians'
}

function propsCount(obj) {
    let count = 0;
    for(key in obj) {
        count ++;
    }
    return count;
}

console.log(propsCount(obj));

//2)
let count = Object.keys(obj).length;
console.log(count)


