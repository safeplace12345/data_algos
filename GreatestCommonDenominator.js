const GCD = (n1, n2) => {
    while (n1 !== n2) {
        if(n1 > n2){
            n1 = n1 - n2
        } else {
            n2 = n2 - n1
        }
    }
    return n1
}
console.log(GCD(81,9))

const recGCD = (n1, n2) => {
    // console.log({n2})
    if(n2 === 0) {
        return n1
    }
    return recGCD(n2, n1 % n2)
}

console.log('rec',recGCD(49,7))
// console.log(GCD(10,4))
// console.log(GCD(11,4))