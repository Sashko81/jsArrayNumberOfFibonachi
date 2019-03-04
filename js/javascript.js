// version#1
let num = parseFloat(prompt('Please, enter a number'));
while (Number.isNaN(num)) {
    alert('Please enter a number');
    num = parseFloat(prompt('Please, enter a number'));
}

function fibonacci(num) {
    if (num === 1) {
        return 1;
    } else if (num < 1)
        return 0;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

alert('number of Fibonacci is:  ' +fibonacci(num));

//version#2
let num1 = parseFloat(prompt('Please, enter a number'));
while (Number.isNaN(num1)) {
    alert('Please enter a number');
    num1 = parseFloat(prompt('Please, enter a number'));
}

function fibonacci1(num1) {
    let a = 0
      , b = 1
      , result = b;
    if (num1 === 1) {
        return 1;
    } else if (num1 < 1) {
        return 0;
    }
    while (num1 > 1) {
        result = a + b;
        a = b;
        b = result;
        num1--;
    }

    return result;
}

alert('number of Fibonacci is:  ' +fibonacci1(num1));

//version#3 
let num2 = parseFloat(prompt('Please, enter a number'));
while (Number.isNaN(num2)) {
    alert('Please enter a number');
    num2 = parseFloat(prompt('Please, enter a number'));
}
function fibonacci2(num2) {
    let arr = [1, 1];
    let count = 2;
    if (num2 === 1) {
        return 1;
    } else if (num2 < 1) {
        return 0;
    }
    while (count <= num2) {
        let result = (arr[arr.length - 1] + (arr[arr.length - 2]));
        arr.push(result);
        count++;
    }
    return arr[num2 - 1];
}
alert('number of Fibonacci is:  ' +fibonacci2(num2));
