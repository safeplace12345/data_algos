const isP = n => {
    // Is prime if n > 2 , && n % any[integer] === 1 . Excluding n itself because it always divides its self 
    if (n < 2) return false
    for (let index = 2; index < n; index++) {
        if(n % index === 0) return false
    }
    return true
}
console.log(isP(16))
console.log(isP(5)) // True
console.log(isP(4))
console.log(isP(1))