let obj = {
    country: 'Ukraine',
    capital: 'Kyiv',
    population: '44,13 mil',
    superpower: 'ukrainians',
    value: 'independence'
}


function showProps(obj) {
    let array1 = [];
    let array2 = [];
    for(key in obj) {
        array1.push(key + ': ' + obj[key]);
    }
    for(key in obj) {
        array2.push(obj[key]);
    }
    console.log(array1);
    console.log(array2);
}

showProps(obj);