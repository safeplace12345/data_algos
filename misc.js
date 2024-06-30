function fb(n) {
    let fb = [0, 1]
    for (let i = 2; i <= n; i++) {
      fb[i] = fb[i - 2] + fb[i - 1]
    }
    return fb
  }
  function fb2(n) {
    let a = 0, b = 1, c , res = [0,1];
    for (let i = 1; i < n; i++) {
      c = a + b
      res.push(c)
      a = b
      b = c
    }
    return res
  }
  
  function fac(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
      res = res * i
    }
    return res 
  }
  
  function isPrime(n) {
    // A prime number is a number that can not be divided by any number higher than 2 and return 0
    if(n < 2) {
      return false
    }
    for(let i = 2; )
  }