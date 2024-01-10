document.addEventListener('DOMContentLoaded', () => {
    var timerElement = document.getElementById('timer');
    var seconds = parseInt(timerElement.textContent);
    var intervalId = setInterval(() => {
      seconds--;
      timerElement.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
      }
    }, 1000);
  });
  