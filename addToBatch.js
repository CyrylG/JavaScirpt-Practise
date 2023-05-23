const addToBatch = (array, number) => {
    if (array.length < 5) {
        newArray = array.concat(number);
        return newArray;
    } else {
        return array;
    }
}

module.exports = addToBatch;