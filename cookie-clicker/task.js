document.addEventListener("DOMContentLoaded", () => {
    var clickCounterElement = document.getElementById("clicker__counter");
  
    var cookieElement = document.getElementById("cookie");
  
    var clickCounter = 0;
  
    cookieElement.addEventListener("click", () => {
      clickCounter++;
      clickCounterElement.textContent = clickCounter;
  
      cookieElement.width *= 1.2;
      cookieElement.height *= 1.2;
  
      setTimeout(() => {
        cookieElement.width /= 1.2;
        cookieElement.height /= 1.2;
      }, 100);
    });
  });
  
  