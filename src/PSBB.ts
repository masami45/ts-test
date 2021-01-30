import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input the number of families: ", function(families) {
  rl.question("Input the number of members in the family\n (separated by a space): ", function(members) {
    const psbb = new PSBB(families, members);
    psbb.print();
    rl.close();
  });
});

export class PSBB {
  families: number;
  members: string[];

  constructor(families: string, members: string) {
    this.families = parseInt(families);
    this.members = members.split(' ');
  }

  print() {
    if (this.members.length !== this.families) {
      return console.log("Input must be equal with count of family");
    }
    const minimumBus = this.getMinimumBus(this.members);
    console.log(`Minimum bus required is: ${minimumBus}`);
  }

  private getMinimumBus(arr: string[]): number {
    let total = 0;
    let maxPass = 4;

    for (let i in arr) {
      total += parseInt(arr[i]);
    }
    
    return Math.ceil(total / maxPass);
  }
}

