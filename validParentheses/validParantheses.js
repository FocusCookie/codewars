function validParentheses(parens) {
  if (0 <= parens.length <= 100) {
    let opening = 0;
    let closing = 0;

    for (let i = 0; i <= parens.length - 1; i++) {
      parens[i] === "(" ? opening++ : closing++;

      if (opening - closing < 0) {
        return false;
      }
    }
    return opening === closing;
  } else {
    false;
  }
}
