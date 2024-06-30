const combinations = arr => {
    if(arr.length < 1) return [[]]

    const firstEl = arr[0]
    const restArr = arr.slice(1)
    const combosWithoutFirst = combinations(restArr)
    const combosWithFirst = []
    combosWithoutFirst.forEach(combo => {
        combosWithFirst.push([...combo, firstEl])
    })

    return [...combosWithoutFirst, ...combosWithFirst]
}
console.log(combinations(["A", "B", "C"]));
console.log(combinations([1, 2, 3]));
console.log(combinations([]));
