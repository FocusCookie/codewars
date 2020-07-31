function removeNb(n) {
  const ints = [...Array(n).keys()].map((i) => i + 1);
  const sum = ints.reduce((acc, v) => acc + v);
  const result = [];

  console.log("sum ", sum);

  for (let i of ints) {
    let y = (sum - i) / (i + 1);
    if (Number.isInteger(y) && i !== y && y <= n) result.push([i, y]);
  }
  return result;
}

console.log(removeNb(26));
