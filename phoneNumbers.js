const checkLength = (number) => {
    if (number.length < 11) {
        return true;
    } else {
        return false;
    };
};

const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength);
};

const numbers = ['000000', '45678', '23456789876543456']
console.log(filterLongNumbers(numbers))
