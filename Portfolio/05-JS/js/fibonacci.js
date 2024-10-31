// Objeto para almacenar los números de Fibonacci calculados previamente
var memo = {};

function fibonacci() {
    "use strict";
    // Obtener el valor de entrada y convertirlo a un número entero
    var n = parseInt(document.getElementById("num").value);
    
    // Validar la entrada para asegurar que es un número positivo
    if (isNaN(n) || n < 0) {
        document.getElementById("fibonacciLbl").innerText = "Please enter a valid positive number";
        return;
    }
    
    // Calcular el valor de Fibonacci usando la función f(n)
    var val = f(n);
    
    // Mostrar el resultado en el HTML
    document.getElementById("fibonacciLbl").innerText = `Fibonacci= ${val}`;
}

function f(n) {
    // Verificar si el número ya está en el objeto memo
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }
    
    // Calcular el número de Fibonacci
    let value;
    if (n <= 0) {
        value = 0;
    } else if (n === 1) {
        value = 1;
    } else {
        value = f(n - 1) + f(n - 2);
    }
    
    // Guardar el valor calculado en memo para uso futuro
    memo[n] = value;
    return value;
}

// Asignar el evento al botón después de que se cargue la página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", fibonacci);
});
