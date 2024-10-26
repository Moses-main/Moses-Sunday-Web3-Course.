function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name !== "none");
  if (scripts.length === 0) return "No dominant direction";

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

/*
HELPER FUNCTIONS and the dummy files are below :
1. countBy Function
2. characterScript Function
3. SCRIPTS dummy file

*/

// The count by function

function countBy(items, groupName) {
  let counts = [];
  for (let item in items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name === name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}

// The characterScript function

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// The textScript function
function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name})}`;
    })
    .join(".");
}

// SCRIPTS dummy text
const SCRIPTS = [
  {
    name: "Latin",
    ranges: [
      [65, 91],
      [97, 123],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_alphabet",
  },
  {
    name: "Arabic",
    ranges: [
      [1536, 1541],
      [1542, 1548],
      [1563, 1564],
    ],
    direction: "rtlde",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_alphabet",
  },
  {
    name: "Han",
    ranges: [
      [65, 91],
      [97, 123],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_alphabet",
  },
];

console.log(dominantDirection("Hello World"));
