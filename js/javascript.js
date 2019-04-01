// Method (recursion)
// version#1
let num = parseInt(prompt('Please, enter a number'));
while (Number.isNaN(num)) {
    alert('Please enter a number again');
    num = parseInt(prompt('Please, enter a number'));
}
function calcFibonacci(num) {
    if (num === 1) {
        return 1;
    } else if (num < 1)
        return 0;

    return calcFibonacci(num - 1) + calcFibonacci(num - 2);
}
alert('number of Fibonacci is:  ' +calcFibonacci(num));

//version#2
function calcFibonacci(num) {
    return num<=2 ? 1 : calcFibonacci(num-1)+calcFibonacci(num-2);
}
//versin#3
function calcFibonacci(num) {
    let res;
    if(num>=2) {
        res = calcFibonacci(num-1)+calcFibonacci(num-2);
    } else {
        res = num;
    }
    return res;
}

// Method (with two variables)
//version#1
let num = parseInt(prompt('Please, enter a number'));
while (Number.isNaN(num)) {
    alert('Please enter a number');
    num = parseInt(prompt('Please, enter a number'));
}
function calcFibonacci(num) {
    let a = 0,
        b = 1,
       result = b;
    if (num === 1) {
        return 1;
    } else if (num < 1) {
        return 0;
    }
    while (num > 1) {
        result = a + b;
        a = b;
        b = result;
        num--;
    }
    return result;
}
alert('number of Fibonacci is:  ' +calcFibonacci(num));

//version #2 shot
function calcFibonacci(num) {
    let first = 1,
        second = 1;
        for (let i = 3; i<=num; i++) {
            [first,second] = [second,first+second];
        }
        return second;
}
alert(calcFibonacci(num));

//Method #3 (Array)
// version #1
function calcFibonacci(num) {
    let arr = [1, 1];
    let count = 2;
    if (num === 1) {
        return 1;
    } else if (num < 1) {
        return 0;
    }
    while (count <= num) {
        let result = (arr[arr.length - 1] + (arr[arr.length - 2]));
        arr.push(result);
        count++;
    }
    return arr[num - 1];
}
alert('number of Fibonacci is:  ' +calcFibonacci(num));

//version #2
function calcFibonacci(num) {
    let fibNum = [1,1];
    for (let i = 2; i<num; i++) {
        fibNum.push(fibNum[i-1]+fibNum[i-2]);
    }
    return fibNum.slice(-1);
}
const result = calcFibonacci(6);
alert(result);