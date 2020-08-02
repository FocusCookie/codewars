Array.prototype.square = function () {
  return this.map((value) => value * value);
};

Array.prototype.average = function () {
  return this.length === 0
    ? NaN
    : this.reduce((acc, value) => (acc += value)) / this.length;
};

Array.prototype.cube = function () {
  return this.map((value) => Math.pow(value, 3));
};

Array.prototype.sum = function () {
  return this.reduce((acc, value) => (acc += value));
};

Array.prototype.even = function () {
  return this.filter((value) => value % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((value) => value % 2 !== 0);
};
