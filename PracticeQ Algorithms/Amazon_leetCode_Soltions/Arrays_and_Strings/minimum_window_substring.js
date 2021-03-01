/*
Minimum Window Substring
Given two strings s and t, return the minimum window in s which will contain all the characters in t.
If there is no such window in s that covers all characters in t, return the empty string "".
Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:
Input: s = "a", t = "a"
Output: "a"

Constraints:
1 <= s.length, t.length <= 10^5
s and t consist of English letters.
Follow up: Could you find an algorithm that runs in O(n) time?
*/

// _________ Working Solution _____________

function minWindow(s, t) {
    let map = {};
    t.split('').forEach(c => map[c] = (map[c] || 0) + 1);
    let count = t.length;   // remaining matching count
    let l = 0;
    let r = 0;
    let start = 0;
    let minLen = Infinity;
    while (r < s.length) {
        if (map[s[r++]]-- > 0) count--;
        while (count === 0) {   // valid
            if (r - l < minLen) {
                minLen = r - l;
                start = l;
            }
            if (map[s[l++]]++ === 0) count++; // make it invalid
        }
    }
    return minLen === Infinity ? '' : s.substr(start, minLen);
}

// ___________ Alternate Solution ______________
