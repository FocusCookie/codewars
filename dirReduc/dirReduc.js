function dirReduc(arr) {
  let inWord = arr.join("-");

  const ns = "NORTH-SOUTH";
  const sn = "SOUTH-NORTH";
  const ew = "EAST-WEST";
  const we = "WEST-EAST";

  while (
    inWord.includes(ns) ||
    inWord.includes(sn) ||
    inWord.includes(ew) ||
    inWord.includes(we)
  ) {
    if (inWord.includes(ns)) inWord = inWord.replace(ns, "");
    if (inWord.includes(sn)) inWord = inWord.replace(sn, "");
    if (inWord.includes(ew)) inWord = inWord.replace(ew, "");
    if (inWord.includes(we)) inWord = inWord.replace(we, "");

    // remove all multiple dashes
    inWord = inWord
      .split("-")
      .filter((x) => x !== "")
      .join("-");
  }

  return inWord !== "" ? inWord.split("-") : [];
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
