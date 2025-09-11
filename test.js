// app.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Backend!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

const x = 0.2;
const y = 0.3;
console.log("x + y", x + y);
console.log(x + y === 0.5);



const rockman = { buster: true };
const cutman = { cutter: true };
const gutsman = { superArm: true };

Object.setPrototypeOf(rockman, cutman);
Object.setPrototypeOf(cutman, gutsman);

console.log( "buster" in rockman);



const Person = {
  name: "Default_Name",
  sayHello: function () {
    return "Hi, I'm " + this.name;
  }
};

const p = Object.create(Person);

p.sayHello();

p.name = "Kuro";
p.sayHello();

Array.prototype.push("lol");
const empty = [];
empty[0];



class Guy {
  constructor(name) {
    this.name = name;
  };

  greeting() {
    return "Hello! My name is " + this.name + ".";
  };
};

const g = new Guy("Andy");

console.log(g.greeting);



class Costumer {
  constructor(name) {
    this.name = name;
    this._address = "taipei";
  };

  get address() {
    console.log("get");
    return this._address;
  };

  set address(value) {
    console.log("set");
    this._address = value;
  };
};