

let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

var statue;
let nouveau_solde = 0;


let sous_total = prix * quantite;
let reduction = 0;

if(codePromo == null &&  estMembre == true){

console.log(reductionPourcentage)

reduction = reductionPourcentage

}

else{

    console.log(0)

    reduction = 0;
}

reduction = ( (3 *prix) / 100) *10;

let total_final = sous_total - reduction

nouveau_solde = soldeCompte - total_final


if(soldeCompte >= total_final ){

  console.log("Paiement accepté")

  statue = "Paiement accepté"




}

else {

console.log("Solde insuffisant")

}


console.log( 
 
   " ===== RÉCAPITULATIF =====","\n",
"Produit " ,":", "Clavier mécanique\n",
"Quantité" ,":", quantite,"\n",
"Prix unit",":", prix ,":", "MAD","\n",
"Sous-total",":",sous_total.toFixed(2) ,":", "MAD","\n",
"Réduction",":", reduction.toFixed(3) ,":", "MAD","\n",
"Total"    ,":", total_final.toFixed(3) ,":", "MAD","\n",
"Statut"   ,":", statue,"\n",
"Solde"    ,":", nouveau_solde  ,":","MAD","\n",
"========================="

)
