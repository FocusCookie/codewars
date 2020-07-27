function encrypt(text, n) {
  let leftover = "";
  let cutout = "";

  if (n === 0 || n <= 0 || text === null || text === "") {
    return text;
  } else {
    for (let i = 0; i < text.length; i++) {
      i % 2 === 0 ? (cutout += text[i]) : (leftover += text[i]);
    }

    return encrypt(leftover + cutout, n - 1);
  }
}

function decrypt(encryptedText, n) {
  console.log("n ", n);

  if (n === 0 || n <= 0 || encryptedText === null || encryptedText === "") {
    return encryptedText;
  } else {
    let tmp = "";
    let middle;
    const modulo = encryptedText.length % 2;
    if (modulo === 0) {
      middle = encryptedText.length / 2;
    } else {
      middle = Math.floor(encryptedText.length / 2);
    }

    for (let i = middle; i < encryptedText.length; i++) {
      tmp += encryptedText[i];
      tmp += encryptedText[i - middle];
    }

    return decrypt(modulo ? tmp.slice(0, -1) : tmp, n - 1);
  }
}

let rounds = 1;

let word_1 = "Hallo!";
let word_1_encrypted = "";

console.log("Start", word_1);
console.log("Start.length", word_1.length);
word_1_encrypted = encrypt(word_1, rounds);
word_1_decrypted = decrypt(word_1_encrypted, rounds);
console.log("encrypted", word_1_encrypted);
console.log("encrypted.length", word_1_encrypted.length);
console.log("decrypted", word_1_decrypted);
console.log("decrypted.length", word_1_decrypted.length);
