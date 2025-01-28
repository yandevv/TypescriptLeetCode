# Typescript + LeetCode
<center style="margin-bottom: 12px;">
<img src="" alt="Logo Typescript + LeetCode" style="margin-bottom: 12px;"/>

A repository intended to register my **LeetCode challenges** developed with **`Typescript`**.
</center>

## Table of Contents
- [Typescript + LeetCode](#typescript--leetcode)
  - [Table of Contents](#table-of-contents)
  - [How to Run a Challenge](#how-to-run-a-challenge)
    - [Installing Dependencies](#installing-dependencies)
    - [Executing Code](#executing-code)
  - [Easy Problems](#easy-problems)
  - [Medium Problems](#medium-problems)
  - [Hard Problems](#hard-problems)

## How to Run a Challenge
### Installing Dependencies
Almost every challenge is presented with some test cases and console logs to visualize them. So to execute the code, you can use `ts-node`, `tsx` or any Typescript compiler to execute and automatically compile code.

But firstly it's needed a version of [Node](https://nodejs.org/) to be able to install the CLI commands below.

To install and use any of them globally:

**Installing tsx:**
```bash
npm install -g tsx
```

or...

**Installing ts-node:**
```bash
npm install -g ts-node
```

### Executing Code
To execute any of the code challenges presented in this repository, you can just execute the code like below.

**With tsx:**
```bash
tsx ./mediumChallenges/primeSubtractionOperation.ts
```

**With ts-node:**
```bash
ts-node ./mediumChallenges/primeSubtractionOperation.ts
```

## Easy Problems
| Challenge Name                                                                                                                                                                | Topics                                                            | File                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 145. [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)                                                                        | Stack, Tree, Depth-First Search, Binary Tree                      | [binaryTreePostorderTraversal.ts](./easyChallenges/binaryTreePostorderTraversal.ts)                                       |
| 1455. [Check If a Word Occurs As a Prefix of Any Word in a Sentence](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/) | Two Pointers, String, String Matching                             | [checkIfAWordOccursAsAPrefixOfAnyWordInASentence.ts](./easyChallenges/checkIfAWordOccursAsAPrefixOfAnyWordInASentence.ts) |
| 1346. [Check If N and Its Double Exist](https://leetcode.com/problems/check-if-n-and-its-double-exist/description/)                                                           | Array, Hash Table, Two Pointers, Binary Search, Sorting           | [checkIfNAndItsDoubleExist.ts](./easyChallenges/checkIfNAndItsDoubleExist.ts)                                             |
| 2490. [Circular Sentence](https://leetcode.com/problems/circular-sentence/description/)                                                                                       | String                                                            | [circularSentence.ts](./easyChallenges/circularSentence.ts)                                                               |
| 70. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)                                                                                             | Math, Dynamic Programming, Memoization                            | [climbingStairs.ts](./easyChallenges/climbingStairs.ts)                                                                   |
| 2022. [Convert 1D Array Into 2D Array](https://leetcode.com/problems/convert-1d-array-into-2d-array/description/)                                                             | Array, Matrix, Simulation                                         | [convert1DArrayInto2DArray.ts](./easyChallenges/convert1DArrayInto2DArray.ts)                                             |
| 3005. [Count Elements With Maximum Frequency](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/)                                               | Array, Hash Table, Counting                                       | [countElementMaxFrequency.ts](./easyChallenges/countElementMaxFrequency.ts)                                               |
| 2185. [Counting Words With a Given Prefix](https://leetcode.com/problems/counting-words-with-a-given-prefix/description/)                                                     | Array, String, String Matching                                    | [countingWordsWithAGivenPrefix.ts](./easyChallenges/countingWordsWithAGivenPrefix.ts)                                     |
| 3042. [Count Prefix and Suffix Pairs I](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/description/)                                                           | Array, String, Trie, Rolling Hash, String Matching, Hash Function | [countPrefixAndSuffixPairsI.ts](./easyChallenges/countPrefixAndSuffixPairsI.ts)                                           |
| 1684. [Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/description/)                                             | Array, Hash Table, String, Bit Manipulation, Counting             | [countTheNumberOfConsistentStrings.ts](./easyChallenges/countTheNumberOfConsistentStrings.ts)                             |
| 1598. [Crawler Log Folder](https://leetcode.com/problems/crawler-log-folder/description/) | Array, String, Stack | [crawlerLogFolder.ts](./easyChallenges/crawlerLogFolder.ts) |
| 1957. [Delete Characters to Make Fancy String](https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/) | String | [deleteCharactersToMakeFancyString.ts](./easyChallenges/deleteCharactersToMakeFancyString.ts) |
| 2331. [Evaluate Boolean Binary Tree](https://leetcode.com/problems/evaluate-boolean-binary-tree/description/) | Tree, Depth-First Search, Binary Tree | [evaluateBooleanBinaryTree.ts](./easyChallenges/evaluateBooleanBinaryTree.ts) |
| 509. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/) | Math, Dynamic Programming, Recursion, Memoization | [fibonacciNumber.ts](./easyChallenges/fibonacciNumber.ts) |
| 1791. [Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/description/) | Graph | [findCenterOfStarGraph.ts](./easyChallenges/findCenterOfStarGraph.ts) |
| 1002. [Find Common Characters](https://leetcode.com/problems/find-common-characters/description/) | Array, Hash Table, String | [findCommonCharacters.ts](./easyChallenges/findCommonCharacters.ts) |
| 2485. [Find the Pivot Integer](https://leetcode.com/problems/find-the-pivot-integer/description/) | Math, Prefix Sum | [findThePivotInteger.ts](./easyChallenges/findThePivotInteger.ts) |
| 412. [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/description/) | Math, String, Manipulation | [fizzBuzz.ts](./easyChallenges/fizzBuzz.ts) |
| 1051. [Height Checker](https://leetcode.com/problems/height-checker/description/) | Array, Sorting, Counting Sort | [heightChecker.ts](./easyChallenges/heightChecker.ts) |
| 350. [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/) | Array, Hash Table, Two Pointers, Binary Search, Sorting | [intersectionOfTwoArraysII.ts](./easyChallenges/intersectionOfTwoArraysII.ts) |
| 463. [Island Perimeter](https://leetcode.com/problems/island-perimeter/description/) | Array, Depth-First Search, Breadth-First Search, Matrix | [islandPerimeter.ts](./easyChallenges/islandPerimeter.ts) |
| 2053. [Kth Distinct String in an Array](https://leetcode.com/problems/kth-distinct-string-in-an-array/description/) | Array, Hash Table, String, Counting | [kthDistinctStringInAnArray.ts](./easyChallenges/kthDistinctStringInAnArray.ts) |
| 703. [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/) | Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary Tree, Data Stream | [kthLargestElementInAStream.ts](./easyChallenges/kthLargestElementInAStream.ts) |
| 2373. [Largest Local Values in a Matrix](https://leetcode.com/problems/largest-local-values-in-a-matrix/description/) | Array, Matrix | [largestLocalValuesInAMatrix.ts](./easyChallenges/largestLocalValuesInAMatrix.ts) |
| 2441. [Largest Positive Integer That Exists With Its Negative](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/) | Array, Hash Table, Two Pointers, Sorting | [largestPositiveIntegerThatExistsWithItsNegative.ts](./easyChallenges/largestPositiveIntegerThatExistsWithItsNegative.ts)
| 860. [Lemonade Change](https://leetcode.com/problems/lemonade-change/description/) | Array, Greedy | [lemonadeChange.ts](./easyChallenges/lemonadeChange.ts) |
| 141. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/) | Hash Table, Linked List, Two Pointers | [linkedListCycle.ts](./easyChallenges/linkedListCycle.ts) |
| 14. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/) | String, Trie | [longestCommonPrefix.ts](./easyChallenges/longestCommonPrefix.ts) |
| 409. [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/description/) | Hash Table, String, Greedy | [longestPalindrome.ts](./easyChallenges/longestPalindrome.ts) |
| 1380. [Lucky Numbers in a Matrix](https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/) | Array, Matrix | [luckyNumbersInAMatrix.ts](./easyChallenges//luckyNumbersInAMatrix.ts) |
| 1460. [Make Two Arrays Equal by Reversing Subarrays](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/) | Array, Hash Table, Sorting | [makeTwoArraysEqualByReversingSubarrays.ts](./easyChallenges/makeTwoArraysEqualByReversingSubarrays.ts) |

## Medium Problems

## Hard Problems
