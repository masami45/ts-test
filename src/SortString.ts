import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input one line of words (S): ", function(text) {
  const sort = new SortString(text);
  sort.procVowel();
  sort.procConsonant();
  rl.close();
});

export class SortString {
  text: string;
  vowel_list: string;

  constructor(text: string) {
    this.text = text;
    this.vowel_list = "aeiou";

    console.log(`Input words: ${this.text}`);
  }

  public procVowel() {
    const splitedVowel = this.vowel_list.split('');
    const splitedText = this.text
      .toLowerCase()
      .replace(/\s/g, '')
      .split('');
    let res = [];

    for (let i = 0; i < splitedText.length; i++) {
      if (splitedVowel.includes(splitedText[i])) {
        res.push(splitedText[i]);
      }
    }
    const sortingChar = this.sortChar(res);
    console.log(`Ordered vowel chars: ${sortingChar}`);
  }

  public procConsonant() {
    const splitedVowel = this.vowel_list.split('');
    const splitedText = this.text
      .toLowerCase()
      .replace(/\s/g, '')
      .split('');
    let res = [];

    for (let i = 0; i < splitedText.length; i++) {
      if (!splitedVowel.includes(splitedText[i])) {
        res.push(splitedText[i]);
      }
    }
    const sortingChar = this.sortChar(res);
    console.log(`Ordered consonant chars: ${sortingChar}`);
  }

  private sortChar(res: string[]) {
    let uniqueChar: string[] = [];
    let dupChar: string[] = [];
    for (const chara of res) {
      if (!uniqueChar.includes(chara)) {
        uniqueChar.push(chara);
      } else {
        dupChar.push(chara);
      }
    }

    for (const charas of dupChar) {
      uniqueChar.splice(uniqueChar.indexOf(charas) + 1, 0, charas);
    }

    return uniqueChar.join('');
  }
}
