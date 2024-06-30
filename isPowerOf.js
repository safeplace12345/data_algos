const isPw = (n, power) => {
    // Is powerOf(n) if n === 2^x , Basically if we can multipy 2 multiple times to get this number,
    // Otherwise its not a powerOf(n)
    if (n < 2) return true // All powers are beyond 2, 3, etc
    for (let index = power; index <= n; index++) {
        if(n % power !== 0) return false
        n = n / power
    }
    return true
}
console.log(isPw(16, 2)) //True
console.log(isPw(27, 3)) //True
console.log(isPw(20, 3)) // False
console.log(isPw(4, 2)) //True
console.log(isPw(5, 2)) //False
console.log(isPw(1, 2)) //True