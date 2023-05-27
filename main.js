const url = "https://api.adviceslip.com/advice",
  quoteNum = document.querySelector(".quote-num"),
  quoteText = document.querySelector(".quote-text"),
  generateBtn = document.querySelector(".generate-quote");

generateBtn.addEventListener("click", generateQuote);

function generateQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let advice = data.slip.advice;
      let adviceId = data.slip.id;
      quoteText.textContent = advice;
      quoteNum.textContent = adviceId;
      localStorage.setItem("quote-text", quoteText.textContent);
      localStorage.setItem("quote-num", quoteNum.textContent);
    });
}
if (localStorage.getItem("quote-text")) {
  quoteText.textContent = localStorage.getItem("quote-text");
}
if (localStorage.getItem("quote-num")) {
  quoteNum.textContent = localStorage.getItem("quote-num");
}
