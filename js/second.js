const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus expedita nulla aspernatur rerum alias molestias perspiciatis minus tenetur beatae, reiciendis iste officia obcaecati assumenda similique perferendis. Nulla, asperiores maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus expedita nulla aspernatur rerum alias molestias perspiciatis minus tenetur beatae, reiciendis iste officia obcaec";

function WRAS(text) {
  text = text.replace("\n", "").trim();

  let EditText = text.replace(" ", "");

  const words = text.split(" "),
    checked = [];

  words.forEach((word) => {
    if (checked.filter((e) => e.word === word).length == 0) {
      const TextWithoutWord = EditText.replace(new RegExp(word , "g"),""),
        repeat = (EditText.length - TextWithoutWord.length) / word.length;

      checked.push({ word: word, repeat: repeat });
    }
  });

  checked.sort((a, b) => {
    if (a.repeat > b.repeat) return a;
  });

  return checked;
}

console.log(WRAS(text));
