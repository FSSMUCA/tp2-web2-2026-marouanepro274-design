let paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let compteurDiff = 0;

for (let [a, b] of paires) {
  let egalDouble = (a == b);
  let egalTriple = (a === b);

  // Comptez combien de paires donnent true avec == mais false avec ===
  if (egalDouble && !egalTriple) {
    compteurDiff++;
  }

  console.log(
    `${JSON.stringify(a)} == ${JSON.stringify(b)}         -> ${egalDouble}    |   ${JSON.stringify(a)} === ${JSON.stringify(b)}         -> ${egalTriple}`
  );
}

console.log("---");
console.log(`${compteurDiff} paire(s) où == et === donnent des résultats différents`);
