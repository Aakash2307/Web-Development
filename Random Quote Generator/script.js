const textEl = document.querySelector('.text');
const button = document.querySelector('button');

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "Success is not in what you have, but who you are.",
  "It always seems impossible until it’s done."
];


button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  textEl.textContent = quotes[randomIndex];
});


// let quotes = [];

// async function loadQuotes() {
//   try {
//     const response = await fetch('https://type.fit/api/quotes');
//     quotes = await response.json();
//     showRandomQuote(); // Show one on initial load
//   } catch (error) {
//     console.error("Failed to load quotes:", error);
//     document.querySelector('.text').textContent = "Unable to load quotes.";
//   }
// }

// function showRandomQuote() {
//   if (quotes.length === 0) return;

//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const quote = quotes[randomIndex];

//   const textEl = document.querySelector('.text');
//   textEl.textContent = `"${quote.text}" — ${quote.author || "Unknown"}`;

//   // Restart fade-in animation      
//   textEl.classList.remove('fade-in');
//   void textEl.offsetWidth; // Trigger reflow
//   textEl.classList.add('fade-in');
// }

// // Load quotes on page load
// window.onload = loadQuotes;

// // Button click shows new quote
// document.querySelector('button').addEventListener('click', showRandomQuote);
