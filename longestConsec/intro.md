Slightly Clearer Description
Task
You are given an array of string inputs strarr and an integer k.

Your task is to return the longest possible string that can be derived by combining k consecutive elements of the input strarr.

Example
longest_consec(["red", "orange", "yellow", "green", "blue", "indigo", "violet"], 2) should return "orangeyellow"

Notes
In the case of there being multiple possible matches, only the first one will be considered correct.

In any of the following cases, the return value should be an empty string "":

strarr.length === 0
strarr.length < k
k <= 0

Solution which works but not as in the instructions, because its not taken the order of the given array input order
let result = "";
let sorted = strarr.sort((a, b) => {
return a.length - b.length;
});

    while (k > 0) {
      result += sorted.pop();
      k--;
    }
    return result;
