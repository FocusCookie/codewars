function dblLinear(n) {
  let tmp = [];

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3) tmp.push(2 * i + 1);
    if ((i + 1) % 6) tmp.push(3 * i + 1);
  }
  console.log([...new Set(tmp)]);
  return [...new Set(tmp)][n - 1];
}

console.log(dblLinear(20));
//TODO: NOT FINISHED DIDNT understood the exercise.... sequence
