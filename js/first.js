const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus expedita nulla aspernatur rerum alias molestias perspiciatis minus tenetur beatae, reiciendis iste officia obcaecati assumenda similique perferendis. Nulla, asperiores maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus expedita nulla aspernatur rerum alias molestias perspiciatis minus tenetur beatae, reiciendis iste officia obcaec";

function WRAS(text) {
  text = text.replace("\n", " ").trim();

  const words = text.split(" "),
    checked = [];

  words.forEach((word) => {
    if (checked.filter((e) => e.word === word).length > 0) {
      checked.forEach((obj) => {
        if (obj.word == word) {
          ++obj.repeat;
        }
      });
    } else {
      checked.push({ word: word, repeat: 1 });
    }
  });

  checked.sort((a, b) => {
    if (a.repeat > b.repeat) return a;
  });

  return checked;
}

console.log(WRAS(text));