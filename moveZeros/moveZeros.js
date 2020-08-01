var moveZeros = function (arr) {
  let noZeros = arr.filter((element) => element !== 0);

  return noZeros.concat(Array(arr.length - noZeros.length).fill(0));
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
