// Función para obtener los factores primos de un número y mostrar el resultado
function getPrimeFactors() {
  // Obtener el número ingresado por el usuario
  var n = parseInt(document.getElementById("num").value);
  
  // Validar que el número es un entero positivo
  if (isNaN(n) || n <= 1) {
      document.getElementById("pf").innerText = "Please enter a valid integer greater than 1.";
      return;
  }
  
  // Llamar a la función que encuentra los factores primos
  var factors = findPrimeFactors(n);
  
  // Mostrar los factores primos en el HTML
  document.getElementById("pf").innerText = "Prime Factors: " + factors.join(", ");
}

// Función que encuentra los factores primos de un número dado
function findPrimeFactors(n) {
  var factors = [];
  var i = 2;

  // Encontrar los factores primos
  while (n > 1) {
      if (n % i === 0 && isPrime(i)) {
          factors.push(i);
          n /= i;
      } else {
          i++;
      }
  }

  return factors;
}

// Función auxiliar que verifica si un número es primo
function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
