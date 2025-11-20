const quoteText = document.querySelector(".quote");
const quoteBtn = document.getElementById("new-quote");
const authorName = document.querySelector(".name");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
const synth = speechSynthesis;

const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Discipline is the bridge between goals and achievement.", author: "Jim Rohn" },
  { text: "Your only limit is you.", author: "Krish Tarbada" },
  { text: "Small steps every day lead to big results.", author: "Smit Patel" },
  { text: "Do something today that your future self will thank you for.", author: "Hitesh Bharwad" }
];

function loadQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.innerText = random.text;
  authorName.innerText = random.author;
}

quoteBtn.addEventListener("click", loadQuote);

speechBtn.addEventListener("click", () => {
  let utter = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  synth.cancel();
  synth.speak(utter);

  speechBtn.classList.add("active");
  utter.onend = () => speechBtn.classList.remove("active");
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText} — ${authorName.innerText}`);
  alert("Quote copied!");
});

twitterBtn.addEventListener("click", () => {
  let text = `${quoteText.innerText} — ${authorName.innerText}`;
  let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

loadQuote();