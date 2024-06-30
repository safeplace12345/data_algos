const stairs = (n) => {
  const temp = [1, 2];
  for (let i = 2; i < n; i ++) {
    temp[i] = temp[i - 1] + temp[i - 2]
  } 
  return temp[n - 1];
};

console.log(stairs(4));
console.log(stairs(5));
console.log(stairs(1));
console.log(stairs(0));
