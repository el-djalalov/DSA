/*
There are multiple methods to compute the Hamming weight, including:
1. Bit Manipulation: This approach involves iterating each bit of the number one at a time to determine if it is set.
2. Brian Kernighan’s Algorithm: This efficient algorithm repeatedly clears the least significant set bit of the number until it becomes zero, counting the number of iterations.
3. Using Built-in Functions: Many programming languages offer built-in functions to directly compute the Hamming weight.
*/

/*
1. Iterative method
We use LSB (Least Significant Bit) to determine if current bit is 1
Because LSB is only when last digits/bits are both 1 otherwise 0
Consider num = 13 (binary 1101):
LSB check = 1101 & 0001 = 0001 (This gives 1)
LSB check=1101&0001=0001(This gives 1)
*/
