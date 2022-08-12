function totalFibonacci(): void {
    let fibonacciArr: Array<number> = [0,1];
    let total: number = 1;
    let a = 0;
    let b = 1;
    let c = 0;
    while (true){
        if (a + b == c){
            fibonacciArr.push(c);
            a = b;
            b = c;
            total += c;
        }
        c++;
        if (fibonacciArr.length == 20){
            break;
        }
    }
    console.log(fibonacciArr.toString())
    console.log(total)
}

totalFibonacci();