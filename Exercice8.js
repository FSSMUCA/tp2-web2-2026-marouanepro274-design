

let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"



console.log("=====RAPPORT UTILISATEUR=====")

//supprimer les espaces au début 
 console.log("nom" ,":", nom.trim())


//convertir en nombre entier. Si le résultat est NaN ou <= 0 → valeur invalide
 let _age = parseInt(age)

 if(_age == NaN || _age <= 0 ){ console.log( "valeur invalide")}

 console.log( "age" , ":", _age)


//doit contenir "@" ET un "." après le "@". Valide ou invalide
let atIndex = email.indexOf("@");
let dotIndex = email.indexOf(".", atIndex);

if (dotIndex >= atIndex + 1) { 

console.log( "email" , ":", email , "valide" )

}

 console.log( "email" , ":", email , "invalide" )


 //extraire uniquement la partie numérique avec parseInt()
  let _scoreJeu = parseInt(scoreJeu)

 console.log( "scoreJeu" , ":", _scoreJeu )


//la chaîne "false" doit devenir le booléen false
res_boolean = (Boolean( !estAdmin))

console.log("estAdmin" , ":", res_boolean )


//utiliser ?? pour donner la valeur par défaut
let res = derniereConnexion ?? "Jamais connecte"

console.log( "derniereConnexion" , ":" , res)



// onvertir en nombre. Si c'est 0 après conversion → afficher "Aucune connexion", sinon le nombre
let _nombreConnexions = parseInt(nombreConnexions)

if(_nombreConnexions == 0) {console.log(" nombreConnexions" ,":", "Aucune coonnexion")}

else{

    console.log("nombreConnexions" , ":" , _nombreConnexions)

}