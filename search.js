const lnSch = (arr , target) => {
    for (el in arr) {
        if(arr[el] === target) {
            return el
        }
    }
    return -1
}
const recLnSch = (arr , target, index) => {
    if(index === arr.length){
        return -1
    }
    if(arr[index] === target) {
        return index
    }
    return recLnSch(arr, target, index + 1)
}

console.log("recLnSch: ", recLnSch([-5,1,5,7,20,10], 7, 0))
console.log("recLnSch: ", recLnSch([-5,1,5,7,20,10], 10, 0))
console.log("recLnSch: ", recLnSch([-5,1,5,7,20,10], 30, 0))
console.log("lnSch: ", lnSch([-5,1,5,7,20,10], 7))
console.log("lnSch: ", lnSch([-5,1,5,7,20,10], 10))
console.log("lnSch: ", lnSch([-5,1,5,7,20,10], 30))

const bnSch = (arr , target) => {
    const sorted = arr.sort((a, b) => a > b)
    let lIndex = 0, rIndex = sorted.length -1
    while(lIndex <= rIndex) {
        let middleIndex = Math.floor((lIndex + rIndex)  / 2)
        console.log({middleIndex})
        if(sorted[middleIndex] === target) {
            return middleIndex
        }
        if(target < sorted[middleIndex]) {
            rIndex = middleIndex - 1
        } else {
            lIndex = middleIndex + 1  
        }
    }
    return -1
}
console.log("bnSch: ", bnSch([-5,1,5,7,20,10], 7))
console.log("bnSch: ", bnSch([-5,1,5,7,20,10], 10))
console.log("bnSch: ", bnSch([-5,1,5,7,20,10], 20))

const recBnsch = (arr, tgt, left = 0, right = arr.length - 1) => {
    let mid = Math.floor(left  + right / 2)
    if(tgt === arr[mid]) {
        return mid
    }
    if(tgt < arr[mid]) {
        return recBnsch(arr, tgt, left, mid - 1)
    } else {
        return recBnsch(arr, tgt, mid - 1 , right)
    }
}
console.log("recBnsch: ", recBnsch([-5,1,5,7,10,20], 7))
console.log("recBnsch: ", recBnsch([-5,1,5,7,10,20], 10))
console.log("recBnsch: ", recBnsch([-5,1,5,7,10,20], 20))