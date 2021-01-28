import { Greeter } from "./Greeter";

class greet extends Greeter {
  greet() {
    console.log(this.greeting);
  }
}

let greeter = new greet("Hello World!");
greeter.greet();
