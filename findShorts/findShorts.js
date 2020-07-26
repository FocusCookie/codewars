function findShorts(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

console.log(findShorts("hallo this is aa test"));
