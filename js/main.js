//opdracht 1
function sayHallo(message) {
    return message;
}

console.log(sayHallo("Hallo wereld"));

//opdracht 2
function rekenSom(a, b) {
    return a + b;
}

console.log(rekenSom(5, 10));

//opdracht 3
function verwelkom(Welkom, naam) {
    return Welkom + " " + naam;  
}

console.log(verwelkom("Welkom", "Mohammed"));  

//opdracht 4
function vermeningvuldig(a, b) {
    return a * b;
} 

console.log(vermeningvuldig(4, 5));

//opdracht 5
const vermeningvuldige = (a, b) => a * b;
console.log(vermeningvuldige(4, 5));

//opdracht 6
[1, 2, 3, 4, 5].forEach(function(num) {
    console.log(num)
});

//opdracht 7
function withLogs(functionToRun) {
    console.log("Function: " + functionToRun.name);
    functionToRun();
}
  
  function yourFunction() {
    console.log("Dit is de inhoud van je functie!");
}
  
  withLogs(yourFunction);
  
//opdracht 8
function berekenverschil(a, b) {
    return a - b;
}

const verschil = (berekenverschil(10, 4));
console.log(verschil);

//opdracht 9
