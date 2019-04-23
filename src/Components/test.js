
/*
 * Complete the 'countPrimeStrings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function countPrimeStrings(s) {
    // Write your code here

    // find all possible prime numbers in the given string
    let primeNumbers = permutatePrimeNumbers(s);
    return primeNumbers.length;
}

function returnPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1 && num;
}

function permutatePrimeNumbers(str) {
    let arr = [];
    for (let i = 0, j = 1; i < str.length; i++ , j++) {
        arr[i] = str.substring(i, j);
    }

    let len = Math.pow(2, arr.length);
    let permutations = [];
    for (let i = 0; i < len; i++) {
        let temp;
        for (let j = 0; j < arr.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += arr[j];
            }
        }
        if (temp !== "") {
            // check if it's prime number before adding to array
            permutations.push(returnPrimeNumber(temp));
        }
    }
    return permutations;
}

countPrimeStrings();

