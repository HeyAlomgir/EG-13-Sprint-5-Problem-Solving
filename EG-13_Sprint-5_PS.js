
// 01. Remove Duplicates from Sorted Array

const removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// Test
// const nums01 = [1, 1, 2];
// const k01 = removeDuplicates(nums01);

// console.log("01. Remove Duplicates:", k01);




// 02. Binary Search

const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};


// Test
// console.log(
//     "02. Binary Search:",
//     search([-1, 0, 3, 5, 9, 12], 9)
// );





