function parOuImpar(y) {

 var x = parseInt(y.toString().charAt( y.length - 1 ))
 
 if (x === 0) {return "Par"}
 if (x === 2) {return "Par"}
 if (x === 4) {return "Par"}
 if (x === 6) {return "Par"}
 if (x === 8) {return "Par"}
 else {return "Impar"}
 
}
