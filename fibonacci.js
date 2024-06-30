const fib = n => {
    let seq = [0,1]
    for (let i = 2; i <= n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2] 
    }
    return seq
}
console.log(fib(8))
console.log(fib(5))
console.log(fib(1))