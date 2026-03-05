


let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let v = valeurs[i];
  let str = String(v);

  // Remplacer la chaîne vide par (chaine vide)
  if (str === "") {
    str = "(chaine vide)";
  }

  // Tester directement la valeur (truthy/falsy)
  if (v) {
    console.log(str + " -> truthy");
  } else {
    console.log(str + " -> falsy");
  }
}
