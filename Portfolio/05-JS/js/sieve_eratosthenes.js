// Función que implementa la criba de Eratóstenes para encontrar números primos menores a n
var sieve = function(n) {
  "use strict";

  // Crear un arreglo de booleanos, donde inicialmente asumimos que todos los números son primos
  var array = new Array(n + 1).fill(true);
  var primes = [];

  // El 0 y 1 no son primos
  array[0] = array[1] = false;

  // Implementar el algoritmo de la criba de Eratóstenes
  for (var i = 2; i <= Math.sqrt(n); i++) {
      if (array[i]) {
          for (var j = i * i; j <= n; j += i) {
              array[j] = false; // Marcar como no primo
          }
      }
  }

  // Recoger todos los números que quedaron marcados como primos
  for (var i = 2; i <= n; i++) {
      if (array[i]) primes.push(i);
  }

  return primes;
};

// Función para manejar el evento del botón y mostrar los resultados en el HTML
document.getElementById("btn").addEventListener("click", function() {
  var num = parseInt(document.getElementById("num").value);
  
  // Validación del número ingresado
  if (isNaN(num) || num <= 1) {
      document.getElementById("primes").innerText = "Please enter a valid number greater than 1.";
      return;
  }
  
  // Obtener los primos usando la criba de Eratóstenes
  var primes = sieve(num);
  
  // Mostrar los números primos en el HTML
  document.getElementById("primes").innerText = primes.join(", ");
});
