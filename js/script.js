/*Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while*/

var size = 5; //I have to repeat the operation 5 times

var sum = 0; //the starting value of the sum is zero (no addition yet)

//FOR
for (var i = 0; i <= size; i++) { //repeat this code until the user enters a number 5 times
    var number = parseInt(prompt ("Inserisci un numero " + i + " di " + size));
    console.log(number);
    sum += number; // sum = sum+number
}

console.log("La somma dei valori che hai inserito è ", sum);

