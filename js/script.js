// Array of quote objects
const quotes = [
  {
    // where the quote comes from, like a speech or publication.
    // For example, "Famous Anonymous Jokes."
    // If there is no known publication, do not include this property on the object.
    // For example, 1997.
    // If there is no known date, then do not include this property on the object.
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

// => selects a random quote object from the quotes array
// => returns the randomly selected quote object
function getRandomQuote() {
  // console.log("Quotes Count: " + quotes.length);
  // returns 0 - 5 -> valid indexes
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // console.log(randomIndex);
  let randomQuote = quotes[randomIndex];
  // console.log(randomQuote);
  return randomQuote;
}

// => printQuote calls the getRandomQuote function and
//    stores the returned quote object in a variable
// => printQuote constructs a string containing the different properties
//    of the quote object using the following HTML template:
// => printQuote doesn't add a for a missing citation or
//    a if the year property is missing
// => printQuote displays the final HTML string to the page.
//    You can use this JS snippet to accomplish that:
//    document.getElementById('quote-box').innerHTML
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

  document.querySelector('body').style.backgroundColor = randomColor();
  // console.log(contentHTML);
  document.getElementById('quote-box').innerHTML = contentHTML;
}

/*
<p class="quote"> Quote Text</p>
<p class="source"> Author
     <span class="occupation"></span>
     <span class="citation">Where</span>  // OPTIONAL
     <span class="year">When</span>       // OPTIONAL
     <span class="tags"></span>
</p>

quote:
source:
occupation:
citation:
year:
tags:
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandomQuote();

// Displaying the initial random quote on the page
printQuote();



















//
