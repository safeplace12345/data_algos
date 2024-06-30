const bubbleSrt = (arr , seq = "ASC") => {
// // its all about swapping element positions based on the last one based on a condition of anything was swapped
let swapped = true
while (swapped) {
    for(let j = 0; j < arr.length - 1; j++) {
        if(seq === 'ASC') {
            if(arr[j] > arr[j + 1] ) {
                    let toSwap = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = toSwap           
                    swapped = true;
                } else {
                    swapped = false;
                }
            }
         else {
            if(arr[j] < arr[j + 1] ) {
                    let toSwap = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = toSwap           
                    swapped = true;
                } else {
                    swapped = false;
                }
            }
        }
    }
    return arr
}
console.log("bubbleSrt: ", bubbleSrt([-5,1,5,7,20,10], 'DESC'))
console.log("bubbleSrt: ", bubbleSrt([10,1,5,4,11,10]))
console.log("bubbleSrt: ", bubbleSrt([-10,1,40,4,7,10]))
console.log("bubbleSrt: ", bubbleSrt([-5,1,5,7,20,10], 'DESC'))


const quickSort = (arr, seq = 'ASC') => {
    // We need a pivot for comparison on each recurssion and base case
    if(arr.length < 2) {
        return arr
    }
    let left = [], right = []
    const pivot = arr[arr.length - 1]
    for(let i = 0; i < arr.length -1 ; i++) {
        if(seq === 'ASC') {
            if(arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i]) // 20
            }
        } else {
            if(arr[i] > pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i]) // 20
            }
        }
    }
    // console.log({left, pivot, right})
    return [...quickSort(left) , pivot, ...quickSort(right)]
}
console.log("quickSort: ", quickSort([-5,1,5,7,20,10]))

const mergeSort = (arr, seq = 'ASC') => {
    // We need to split array into single arrays
    // on each recurssion and base case to return it
    if(arr.length < 2) {
        return arr
    }    
    let mid = Math.floor(arr.length /2)
    // Recurssion line
    let left = mergeSort(arr.splice(0, mid)) , right = mergeSort(arr)
    // Recurssion line
    let temp = []
    while (left.length && right.length) {
        if(left[0] <= right[0]) {
            temp.push(left.shift())
        } else {
            temp.push(right.shift())
        }
    }
    return [...temp, ...left, ...right]  
}
console.log("mergeSort: ", mergeSort([-5,1,7,5,20,10]))