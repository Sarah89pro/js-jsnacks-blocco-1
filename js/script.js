/*Snack 3
Generatore di “nomi cognomi” casuali
prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati*/

var names = ["GIULIO", "ELENA", "ASIA", "ANTONELLO", "SILVIA"];
var surnames = ["ROSSI", "BIANCHI", "VERDI", "BLU", "AZZURRI"];

var fullNameList =[]; //empty for now, this array will be the container for my random data


/*var randomNames = names[Math.floor (Math.random() * names.length)];
var randomSurnames = surnames[Math.floor (Math.random() * surnames.length)];

console.log( "l'invitato è " + randomNames + " " + randomSurnames);
//great for extrapolating 1 data, but I want 3!*/


//FOR Cycle
/*for (var i = 0; i < 3; i++) {
    //create a random index for var names
    var randomNameIndex = Math.floor (Math.random() * names.length);//multiplication for the number that has to generated. From 0 to length (one number less)
    
    //create a random index for var surnames
    var randomSurnameIndex = Math.floor (Math.random() * surnames.length);
    
    //access to lists with random indexes, we put the random index (number) for the name and then for the surname
    var fullNames = names [randomNameIndex] + " " + surnames [randomSurnameIndex];
    
    //add the value to fullNameList
    fullNameList.push(fullNames);
}

console.log(fullNameList);*/




//WHILE Cycle
while (fullNameList.length < 3) {
    //create a random index for var names
    var randomNameIndex = Math.floor (Math.random() * names.length);//multiplication for the number that has to generated. From 0 to length (one number less)
    
    //create a random index for var surnames
    var randomSurnameIndex = Math.floor (Math.random() * surnames.length);
    
    //access to lists with random indexes, we put the random index (number) for the name and then for the surname
    var fullNames = names [randomNameIndex] + " " + surnames [randomSurnameIndex];
    
    //add the value to fullNameList
    fullNameList.push(fullNames);
}

console.log(fullNameList);













/*Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo*/

/*var number = parseInt(prompt ("Inserisci un numero "));
console.log(number);

if (number % 2 == 0 ) {
    console.log(number + " Il numero che hai inserito è pari");
    
} else {
    console.log(number +1 + " Il numero che hai inserito è dispari");
}*/












/*Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while*/

/*var size = 5; //I have to repeat the operation 5 times

var sum = 0; //the starting value of the sum is zero (no addition yet)*/

//FOR Cycle
/*for (var i = 0; i <= size; i++) { //repeat this code until the user enters a number 5 times
    var number = parseInt(prompt ("Inserisci un numero " + i + " di " + size));
    console.log(number);
    sum += number; // sum = sum+number
}

console.log("La somma dei valori che hai inserito è ", sum);*/

// WHILE Cycle
/*var counter = 1; // the value from which I start (set to 1 because it is the human start)

while (counter <= size) {
    var number = parseInt(prompt ("Inserisci un numero " + counter + " di " + size));
    console.log(number);

    sum += number; //sum = sum + number

    counter ++; //I have to increase it otherwise I can't get out of the loop
}

console.log("tot ", sum);*/