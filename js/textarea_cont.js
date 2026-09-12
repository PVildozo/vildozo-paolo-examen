const textarea = document.getElementById('comentario');
const charCount = document.getElementById('char-count');
const counterInfo = document.getElementById('counter-info');

// Obtiene el límite máximo desde el atributo maxlength del HTML
const maxChars = parseInt(textarea.getAttribute('maxlength'), 10);
const warningThreshold = Math.floor(maxChars * 0.9); // 90% de capacidad (270 caracteres)

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  
  // Actualiza el número visible
  charCount.textContent = currentLength;

  // Remueve clases de alerta previas
  counterInfo.classList.remove('warning', 'limit-reached');

  // Aplica colores de advertencia según la proximidad al límite
  if (currentLength >= maxChars) {
    counterInfo.classList.add('limit-reached');
  } else if (currentLength >= warningThreshold) {
    counterInfo.classList.add('warning');
  }
});