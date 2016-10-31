/*
    Q1
    Test cases
        // Check that dups are preserved
        [0,2,3], [1,3,4,5] => [0,1,2,3,3,4,5]

        // Check one number in each list
        [0], [] => [0]
        [], [0] => [0]

        // Check empty input
        [], [] => []

        // Check listB goes before listA
        [4,5], [3,7] => [3,4,5,7];

        // Check listA goes before listB
        [4,5], [7,8]  => [4,5,7,8]
*/
function mergeLists(listA, listB) {
    return mergeListsRecursive(listA, listB, []);
}

function mergeListsRecursive(listA, listB, result) {
    if (listA.length === 0 && listB.length > 0) {
        return result.concat(listB);
    } else if (listB.length === 0 && listA.length > 0) {
        return result.concat(listA);
    } else if (listA.length === 0 && listB.length === 0) {
        return result;
    }

    if (listA[0] < listB[0]) {
        result.push(listA.shift());
    } else {
        result.push(listB.shift());
    }

    return mergeListsRecursive(listA, listB, result);
}

/*
    Q2: Find largest product of three numbers in list
    Test Cases:
        [1,3,5,3,6,7] => 210;
        [-100,2,3,4,8,-300,-3] => 240000;
        [-1000,2,7,8,100] => 5600;
        [] => 0;
*/
function maxProductNumbers(numList) {
    var maxProduct = Number.MIN_VALUE;

    for (var i = 0, len = numList.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            for(var k = j + 1; k < len; k++) {
                if (numList[i] * numList[j] * numList[k] > maxProduct) {
                    maxProduct = numList[i] * numList[j] * numList[k];
                }
            }
        }
    }

    return (maxProduct === Number.MIN_VALUE) ? 0 : maxProduct;
}
