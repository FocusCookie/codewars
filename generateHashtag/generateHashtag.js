function generateHashtag(str) {
  let result = "";
  if (str.trim().length > 0)
    result =
      str.length > 0
        ? "#" +
          str
            .split(" ")
            .filter((word) => word.length > 0)
            .map((word) => {
              return word[0].toUpperCase() + word.slice(1);
            })
            .join("")
        : (result = false);

  return result.length <= 140 && result ? result : false;
}

console.log(generateHashtag("   "));

let test = "klein ";
