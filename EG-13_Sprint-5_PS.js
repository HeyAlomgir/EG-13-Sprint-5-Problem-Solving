
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




// 03. Search Insert Position

const searchInsert = function (nums, target) {
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

    return left;
};


// Test
// console.log(
//     "03. Search Insert Position:",
//     searchInsert([1, 3, 5, 6], 5)
// );






// 04. Maximum Depth of Binary Tree

const maxDepth = function (root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};

// Test

// const root04 = {
//     val: 3,
//     left: {
//         val: 9,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// };

// console.log("04. Maximum Depth of Binary Tree:", maxDepth(root04));








// 05. Invert Binary Tree

const invertTree = function (root) {
    if (root === null) {
        return null;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};




// Test

// const root05 = {
//     val: 4,
//     left: {
//         val: 2,
//         left: { val: 1, left: null, right: null },
//         right: { val: 3, left: null, right: null }
//     },
//     right: {
//         val: 7,
//         left: { val: 6, left: null, right: null },
//         right: { val: 9, left: null, right: null }
//     }
// };

// const inverted05 = invertTree(root05);

// const output05 = [
//     inverted05.val,
//     inverted05.left.val,
//     inverted05.right.val,
//     inverted05.left.left.val,
//     inverted05.left.right.val,
//     inverted05.right.left.val,
//     inverted05.right.right.val
// ];

// console.log("05. Invert Binary Tree:", output05);






// 06. Product of Array Except Self

const productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};


// Test
// console.log(
//     "06. Product of Array Except Self:",
//     productExceptSelf([1, 2, 3, 4])
// );




















