function streetFighterSelection(fighters, position, moves) {
  let passedChars = [];
  if (moves.length > 0)
    moves.forEach((move) => {
      const lastPosition = [...position];
      switch (move) {
        case "up":
          position[0] = 0;
          break;
        case "down":
          position[0] = 1;
          break;
        case "left":
          position[1] = position[1] - 1;
          position[1] = position[1] < 0 ? fighters[1].length - 1 : position[1];
          break;
        case "right":
          position[1] = position[1] + 1;

          position[1] = position[1] >= fighters[1].length ? 0 : position[1];

          break;
      }

      passedChars.push(fighters[position[0]][position[1]]);
    });

  return passedChars;
}

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

const initial_position = [0, 0];
const moves = ["up", "left", "right", "left", "left"];

console.log(streetFighterSelection(fighters, initial_position, moves));
