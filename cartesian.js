const cart = (arr1, arr2) => {
  const temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      temp.push([arr1[i], arr2[j]]);
    }
  }
  return temp;
};

console.log(recCart([1, 2], [3, 4]));
