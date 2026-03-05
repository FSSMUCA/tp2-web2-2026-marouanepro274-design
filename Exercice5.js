

let table = [0, NaN , Infinity , -Infinity , 42 , 3.14 , Number.MAX_SAFE_INTEGER+1 , -0]

for( i = 0; i<table.length ; i++){


if(Number.isNaN(table[i])){

    console.log( table[i] , ":", "INVALIDE")
}

else if(((table[i] / 1) === Infinity) || (table[i] / 1) === -Infinity){

    console.log(table[i] , ":", "INFINI")
}



else if(1 / table[i]  === -Infinity ){

console.log( table[i] , ":", "ZERO NEGATIF")
}


else if(  Number.isSafeInteger(table[i]) ){

console.log(table[i] , ":","ENTIER SUR")
}

else if((Number.isInteger(table[i]))){

console.log(table[i] , ":", "ENTIER HORS LIMITES")
}

else{
    console.log(table[i] , ":", "DECIMAL")
}
}