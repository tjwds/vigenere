const input = "attackatdawn";
const key = "LEMONLEMONLE";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const table = [];

letters.forEach((_, index) => {
  let j = index;
  const row = [];
  for (let i = 0; i < letters.length; i++) {
    row[i] = letters[j];
    if (j === letters.length - 1) {
      j = 0;
    } else {
      j++;
    }
  }
  table.push(row);
});

const encode = function (input, key) {
  const toTranslate = input.toUpperCase();
  const columns = key.split("");
  const result = toTranslate.split("").reduce((translated, letter, index) => {
    const rowIndex = letters.indexOf(letter);
    if (rowIndex === -1) {
      return translated + letter;
    }

    const columnIndex = letters.indexOf(columns[index]);

    return translated + table[columnIndex][rowIndex];
  }, "");

  return result;
};

const decode = function (input, key) {
  const toTranslate = input.toUpperCase();
  const columns = key.split("");
  const result = toTranslate.split("").reduce((translated, letter, index) => {
    const rowIndex = letters.indexOf(letter);
    if (rowIndex === -1) {
      return translated + letter;
    }

    const thisCypherLetter = columns[index];
    const columnIndex = letters.indexOf(thisCypherLetter);

    return translated + letters[table[columnIndex].indexOf(letter)];
  }, "");

  return result;
};

console.log(encode(input, key));

console.log(decode(encode(input, key), key));
