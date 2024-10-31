// Función principal que se ejecuta al hacer clic en el botón
function igpayAtinlay() {
  // Obtener el texto ingresado
  const str = document.getElementById("txtVal").value;
  
  // Verificar si el texto está vacío
  if (!str) {
      document.getElementById("pigLatLbl").innerText = "Please enter some text.";
      return;
  }

  // Dividir el texto en palabras
  const wordArray = str.split(" ");
  const returnArray = [];

  // Procesar cada palabra para convertirla a Pig Latin
  for (let word of wordArray) {
      let pigLatinWord = "";
      // Si la palabra comienza con una vocal
      if (/^[aeiouAEIOU]/.test(word)) {
          pigLatinWord = word + "way";
      } else {
          // Si la palabra comienza con una o más consonantes
          let consonantCluster = "";
          let i = 0;
          while (i < word.length && !/[aeiouAEIOU]/.test(word[i])) {
              consonantCluster += word[i];
              i++;
          }
          pigLatinWord = word.slice(i) + consonantCluster + "ay";
      }
      returnArray.push(pigLatinWord);
  }

  // Mostrar el resultado en el elemento HTML
  document.getElementById("pigLatLbl").innerText = returnArray.join(" ");
}

// Asignar el evento al botón al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn").addEventListener("click", igpayAtinlay);
});
