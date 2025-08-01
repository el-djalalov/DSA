/*
The Longest Common Substring (LCS) problem asks: Given two strings (let's call them str1 and str2), find the longest contiguous sequence of characters that appears in both strings in the same order, without any interruptions.
Key points:
"Substring" means the characters must be contiguous (next to each other). This is different from "subsequence," where characters can be non-contiguous (e.g., skipping letters).
We want the longest one. If there are multiple with the same length, we can return any (or all, depending on the implementation).
Examples:
str1 = "abcde", str2 = "abfce" → Longest common substring: "bc" (length 2)
str1 = "helloworld", str2 = "worldhello" → Longest common substring: "hello" or "world" (both length 5; we can pick one)
str1 = "apple", str2 = "banana" → Longest common substring: "a" (length 1)
Edge cases: Empty strings? Identical strings? No common substring?

*Brainstorming Approaches:
-Naive Approach: Recursive or Brute Force:
Check every possible substring of str1 and see if it exists in str2. For each starting index in str1, expand the substring as long as it matches something in str2.
Time complexity: O(n * m * min(n, m)) where n = length of str1, m = length of str2. (Basically, up to O(n^3) in worst case—slow for long strings!)
Why it's bad? Inefficient for large inputs (e.g., strings of 1000+ chars).

-Better Approach: Dynamic Programming (DP):
We'll use a 2D table (array of arrays) to track the lengths of common substrings ending at each position.
Why DP? It avoids recomputing overlaps by building solutions from smaller subproblems.
Time complexity: O(n * m) – much faster!
Space complexity: O(n * m) for the table, but we can optimize if needed (e.g., to O(min(n,m)) with 1D arrays).
*/

/**
 * Finds the length of the Longest Common Subsequence (LCS) between two strings using recursion.
 *
 * @param {string} A - The first input string.
 * @param {string} B - The second input string.
 * @returns {number} The length of the longest common subsequence between A and B.
 */

function LCSRecursive(A, B) {
	function helper(i, j) {
		// Base case: if one string is exhausted
		if (i === A.length || j === B.length) {
			return 0; // No more characters to match
		}

		// If characters match, move both indices and add 1 to the length of LCS
		if (A[i] === B[j]) {
			return 1 + helper(i + 1, j + 1); // Match found
		} else {
			// If characters do not match, find the maximum LCS
			return Math.max(helper(i + 1, j), helper(i, j + 1));
		}
	}
	return helper(0, 0); // Start from the beginning of both strings
}

// DP approach, which is more efficient for larger strings

function LCSDP(str1, str2) {
	let m = str1.length;
	let n = str2.length;

	let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
}
console.log(LCSRecursive("abcadde", "abcafde")); // Output: 6
console.log(LCSDP("abcadde", "abcafde")); // Output: 6
