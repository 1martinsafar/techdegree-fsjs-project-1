// Array of quote objects
const quotes = [
  {
    quote: "You can do anything but not everything",
    source: "David Allen",
    occupation: "American management consultant and author",
    citation: "Making It All Work",
    year: "2009",
    tags: "focus",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    source: "Albert Einstein",
    occupation: "German-born theoretical physicist",
    tags: "motivational",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    occupation: "British statesman, army officer, and writer",
    tags: "inspirational",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    occupation: "Chinese teacher, editor, politician, and philosopher",
    tags: "motivational",
  },
  {
    quote: "I always wanted to be somebody, but now I realize I should have been more specific.",
    source: "Lily Tomlin",
    occupation: "American actress, comedian, writer, singer, and producer",
    tags: "humor",
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    source: "Mark Twain",
    occupation: "American writer, humorist, entrepreneur, publisher, and lecturer",
    tags: "encouraging",
  }
];

// Refreshes the quote each 30 seconds
let refreshQuote = setInterval(printQuote, 30000);

// Returns a random number 0-255
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// Returns a random RGB color
function randomColor() {
  let color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

// returns a randomly selected quote object
function getRandomQuote() {
  // returns 0 - 5 -> valid indexes
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  return randomQuote;
}

// Displays the final quote content to the page
function printQuote() {
  let quote = getRandomQuote();
  let contentHTML = '';
  contentHTML += '<p class="quote">' + quote.quote + '</p>';
  contentHTML += '<p class="source">' + quote.source;
  contentHTML += '<span class="occupation">' + quote.occupation + '</span>';
  if (quote.citation) {
    contentHTML += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    contentHTML += '<span class="year">' + quote.year + '</span>';
  }
  contentHTML += '<span class="tags">' + quote.tags + '</span>';
  contentHTML += '</p>';

  // Resetting the quote refresh when the button is clicked (to avoid too fast refresh)
  clearInterval(refreshQuote);
  refreshQuote = setInterval(printQuote, 30000);
  // Changing the background color to a randomly generated color
  document.querySelector('body').style.backgroundColor = randomColor();
  // Displaying the quote content
  document.getElementById('quote-box').innerHTML = contentHTML;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Displaying the initial random quote on the page
printQuote();






//
