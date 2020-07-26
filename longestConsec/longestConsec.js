function longestConsec(strarr, k) {
  if (strarr.length === 0 || strarr.length < k || k <= 0) {
    return "";
  } else {
    if (strarr.length === k) {
      return strarr.join("");
    } else {
      let leftest = 0;
      let rightest = 0;

      for (let i = 0; i < k; i++) {
        leftest += strarr[i].length;
      }

      for (let i = strarr.length - 1; i > strarr.length - 1 - k; i--) {
        rightest += strarr[i].length;
      }

      leftest < rightest ? strarr.shift() : strarr.pop();

      return longestConsec(strarr, k);
    }
  }
}
