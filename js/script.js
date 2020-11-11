/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "I hate people who are not serious about meals. It is so shallow of them",
   source: "Oscar Wilde",
   citation:"The Importance of Being Earnest", 
   year: 1895
  },
  {
     quote: "...the nose is generally the organ in which stupidity is most readily displayed",
   source: "Marcel Proust",
   citation:"Sodom and Gomorrah", 
   year: 1913
  },
  {
     quote: "The unknown element in the lives of other people is like that of nature, which each fresh scientific discovery merely reduces but does not abolish",
   source: "Marcel Proust",
   citation:"In Search of Lost Time", 
   year: 1913
  },
  {
     quote: "Habit is the ballast that chains the dog to his vomit",
   source: "Samuel Beckett",
   citation:"In Search of Lost Time", 
   year: 1975
  },
  {
     quote: "Two roads diverged in a wood, and I, I took the one less traveled by, And that has made all the difference",
   source: "Robert Frost",
   citation:"The Road Not Taken", 
   year: 1916
  },
  {
		quote: "A woman's mind is cleaner than a man's.",
		source: "Oliver Herford"
	},
	{
		quote: "Do not take life too seriously. You will never get out of it alive.",
		source: "Elbert Hubbard" 
	},
	{
		quote: "Always remember that you are absolutely unique. Just like everyone else.",
		source: "Jim Wright",
		citation: "1,001 Logical Laws, Accurate Axioms, Profound Principles, Trusty Truisms, Homey Homilies, Colorful Corollaries, Quotable Quotes, and Rambunctious Ruminations for All Walks of Life",
		year: 1979 
	},
	{
		quote: "People who think they know everything are a great annoyance to those of us who do.",
		source: "Isaac Asimov" 
	},	
	{
		quote: "Get your facts first, then you can distort them as you please.",
		source: "Mark Twain" 
	},	
	{
		quote: "I love deadlines. I like the whooshing sound they make as they fly by.",
		source: "Douglas Adams",
		citation: "The Salmon of Doubt",
		year: 2002
	},	
	{
		quote: "Procrastination is the art of keeping up with yesterday.",
		source: "Don Marquis", 
		citation: "Archy and Mehitabel",
		year: 1927
	},	
	{
		quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
		source: "Theodore Roosevelt" 
	},	
	{
		quote: "I can resist everything except temptation.", //The temptation to use Angular or MustacheJS html templating
		source: "Oscar Wilde",
		citation: "Lady Windermere's Fan"
	},	
	{
		quote: "One advantage of talking to yourself is that you know at least somebody's listening.",
		source: "Franklin P. Jones" 
	},	
	{
		quote: "Laziness is nothing more than the habit of resting before you get tired.",
		source: "Jules Renard" 
	},	
	{
		quote: "I never said most of the things I said.",
		source: "Yogi Berra" 
	},	
	{
		quote: "Go to Heaven for the climate, Hell for the company.",
		source: "Mark Twain",
		year: 1889
	} 
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(upper) {

  // Generate a random number from 0 to upper (length of the quotes array)
  const randomNumber = Math.floor( Math.random() * upper );

  let RandomQuote; // Variable to store the Random quote
  let details;     // Variable to store the citation and year if present
  
// Check if citation and year information is available for the quote
  if (quotes[randomNumber].citation){
    details = `<span class = "citation">${quotes[randomNumber].citation}</span>`
  } 

  if (quotes[randomNumber].year){
    details += `<span class = "year">${quotes[randomNumber].year}</span>`
  } 

// Create the RandomQuote string with details if available  
  if (details){
    RandomQuote = `<p class="quote">${quotes[randomNumber].quote}</p><p class="source">${quotes[randomNumber].source}${details}</p>`;
  } else {
    RandomQuote = `<p class="quote">${quotes[randomNumber].quote}</p><p class="source">${quotes[randomNumber].source}</p>`;
  }

  return RandomQuote;
};

/***
 * `printQuote` function
 * 
***/

function printQuote () {
  const message = getRandomQuote(quotes.length); // Get the Random quote

  const quotebox = document.getElementById("quote_box");
  quotebox.innerHTML = message; // Print Random quote to the html 
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);