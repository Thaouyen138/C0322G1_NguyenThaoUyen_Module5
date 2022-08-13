var fibonacciArr = [0, 1];
var total = 1;
var a = 0;
var b = 1;
var c = 0;
while (true) {
    if (a + b == c) {
        fibonacciArr.push(c);
        a = b;
        b = c;
        total += c;
    }
    c++;
    if (fibonacciArr.length == 20) {
        break;
    }
}
console.log(fibonacciArr.toString());
console.log(total);

