function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}

console.log(sum_pairs(l1, 10));

/* Working code but timeout */

/* var sum_pairs = function (ints, s) {
    let foundPairs = [];
  
    if (ints.length === 0 && s === 0) {
      return [0, 0];
    } else {
         ints.forEach((value, index) => {
    [...ints].slice(index + 1).find((element, foundIndex) => {
      const distance = foundIndex;
      if (value + element === s && distance < result.distance) {
        result = { pair: [value, element], distance: distance };
      } else {
        return false;
      }
    });
  }); 


      const initialLength = ints.length;
      const shadowInts = [...ints];
  
      for (let i = 0; i < initialLength; i++) {
        const firstPairValue = shadowInts.shift();
        const secPairValue = shadowInts.find(
          (value) => firstPairValue + value === s
        );
  
        if (secPairValue !== undefined)
          foundPairs.push({
            pairDistance: shadowInts.indexOf(secPairValue) + i,
            pair: [firstPairValue, secPairValue],
          });
      }
  
      return foundPairs.sort((a, b) => a.pairDistance - b.pairDistance)[0]
        ? foundPairs.sort()[0].pair
        : undefined;
    }
  }; */
