/**
 * Shift right number to left if its lesser than numToInsert or right if its greater
 */
const insertSrt = (arr, seq = "ASC") => {
  
    for (let i = 0; i < arr.length; i++){
        let NTI = arr[i], prevNum = i - 1
        while (prevNum >= 0 && arr[prevNum] > NTI) {
            console.log({NTI, prevNum},arr[prevNum])
            arr[prevNum + 1] = arr[prevNum]
            prevNum = prevNum - 1
        }
        arr[prevNum + 1] = NTI
    }
    return arr;
};
// console.log("insertSrt: ", insertSrt([-5, 1, 5, 7, 20, 10], "DESC"));
// console.log("insertSrt: ", insertSrt([10, 1, 5, 4, 11, 10]));
// console.log("insertSrt: ", insertSrt([-10, 1, 40, 4, 7, 10]));
console.log("insertSrt: ", insertSrt([55, 1, 5, -7, 20, 10], "DESC"));

