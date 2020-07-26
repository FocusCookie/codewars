function anagrams(word, words) {
  function convertToNumericValue(wordToConvert) {
    return wordToConvert
      .toLowerCase()
      .split("")
      .map((x) => x.charCodeAt(0))
      .reduce((a, b) => a + b);
  }

  return words.filter(
    (item) => convertToNumericValue(word) === convertToNumericValue(item)
  );
}

console.log(anagrams("test", ["hallo", "ttes", "stau", "test"]));
