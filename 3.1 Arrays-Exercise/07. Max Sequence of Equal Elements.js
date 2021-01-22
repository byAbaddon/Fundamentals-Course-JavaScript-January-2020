function maxSequenceOfEqualElements(arr) {
    let longestSequence = []

    for (let i = 0; i < arr.length - 1; i++) {
        let tempSequence = []
        tempSequence.push(arr[i])

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempSequence.push(arr[i])
            } else {
                break
            }
        }

        if (longestSequence.length < tempSequence.length) {
            longestSequence = tempSequence
        }
    }

    return longestSequence.join(' ')
}

// console.log(maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]))
// console.log(maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]))