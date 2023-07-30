This repository has two solutions to the challenge "There are two-letter strings, "AA", "AB" and "BB", which appear AA, AB and BB times respectively." (it's completely described later)

Usage:

1. Clone the repository

2. Install node (if not previously installed)

3. Open a terminal and run: node <file_name> aa_number ab_number bb_number

Example: node domino 1 2 4


CHALLENGE:

There are two-letter strings, "AA", "AB" and "BB", which appear AA, AB and BB times respectively.

The task is to join some of these strings to create the longest possible string which does not contain "AAA" or "BBB".

For example, having AA = 5, AB = 0 and BB = 2, it is possible to join five strings by taking both of the "BB" strings and three of the "AA" strings. Then they can be joined into "AA-BB-AA-BB-AA" "AABBAABBAA". Note that it is not possible to add another "AA" string as the result would then contain "AAA".


Write a function:

 solution(AA: number, AB: number, BB: number): string;

that, given three integers AA, AB and BB, returns the longest string that can be created according to the rules described above. If there is more than one possible answer, the function may return any of them.

Examples: 
1. Given AA = 5, AB = 0 and BB = 2, the function should return "AABBAABBAA", as explained above.

2. Given AA = 1, AB = 2 and BB = 1, possible results are "BBABABAA", "ABAABBAB", "ABABAABB" Or "AABBABAB".

3. Given AA = 0, AB = 2 and BB = 0, the  should return "ABAB".

4. Given AA = 0, AB = 0 and BB = 10, the  should return "BB".

Assume that: 
• AA, AB and BB are integers within the range [0..10];
• the resulting string will not be empty.

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

END OF CHALLENGE


The first solution is bruteforce recursive, and has 4 variations:

brute force evaluating all possible combinations, no matter how many times the AAA or BBB appears

brute force stopping the analysis of further combinations when one AAA or BBB is found (attenuated brute force)

This two solutions also are implemented in two versions, one as a classic-consecutive "for" using only one processor, and the other using multi proccessor with .forEach array method of javascript/node.

All this solutions give all possible combinations, but are n^2 or log(n) O.

All of them counts the time elapsed between start and end, to give the possibility of compare them.


The second solution is a "domino like" approach. The problem is analysed as chips of domino. The reasoning is this:

1. AB chips can be undefinely interconnected.
2. AB chips can be attached to any string that ends/begins with AA or BB, except if it begins with BB and ends with AA, but in this case all BBAA binomies can be inverted to AABB, so it's the same.
3. AB chips can't connect AA or BB in the middle of two of them (it's impossible to put a AA or BB in the middle of two AB)
4. So, previous considerations leads to this: no matter of how many AB exist, the most longer array will be in the form of 
(any combination of AABB) + all AB

so, that leads to think about how AA and BB can be combined:

If AA and BB are equal, the result will be AABB repeated as times as AA and BB exist.
if not equal, the result will be (a combination of AABB as many time of minnor of them) with an BB at the beginning if there are more BB than AA, or a AA at the end if there are more BB than AA

5. Edge cases:

    a. All 0 lead to empty string and 0 length

    b. 0 BB or 0 AA leads to all AB plus one AA or BB

    c. As mentioned in first consideration, AB = 0 leads to some combination of AABB


Taking all previous into account, the algorithm will create one possible case of the all longer strings possible, so it answers the challenge, but it doesn't give all the possible results.

This algorithm is n^1 O, most efficient.