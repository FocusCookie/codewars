function add(...n) {
  return Object.assign(add.bind(null, ...n), {
    valueOf: () => n.reduce((a, c) => a + c, 0),
  });
}
