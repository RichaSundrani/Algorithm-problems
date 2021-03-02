/*
Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:
Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:
Input: nums1 = [2], nums2 = []
Output: 2.00000

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6
*/

// _______________ Working Solution _____________
var findMedianSortedArrays = function (nums1, nums2) {

    let x = nums1.concat(nums2);
    x.sort(function (nums1, nums2) {
        return nums1 - nums2;
    });
    let len = x.length;

    return len % 2 === 0 ? (x[Math.floor(len / 2) - 1] + x[Math.ceil(len / 2)]) / 2 : x[Math.floor(len / 2)];
};

// _______________ Working Solution _____________
var findMedianSortedArrays = function (nums1, nums2) {
    const joined = nums1.concat(nums2);
    joined.sort(function (a, b) {
        return a - b
    });
    const even = joined.length / 2,
        isOdd = joined.length % 2;

    if (isOdd > 0) {
        return joined[Math.floor(joined.length / 2)];
    } else {
        return (joined[even] + joined[even - 1]) / 2;
    };
};