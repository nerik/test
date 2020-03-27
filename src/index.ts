const a: number = 45;
interface Test {
  b: string;
}

interface Test2 {
  c: number;
}

const lll: Test | Test2 = {
  b: "rr",
  c: 42
};

const c: Test = {
  b: "lol"
};

console.log(c);
console.log(lll);
