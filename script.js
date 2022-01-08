const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

let apiQuotes = [];

// // page loader show
// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden=true;
// }
// //hide loading
// function complete(){
//     quoteContainer.hide = false;
//     loader.hidden=true;
// }

// Show new quote
function newQuote() {
    // Pick a random quote from api quotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check author field is black and replace with unknown
    if(!quote.author){
        quoteAuthor.textContent = 'unknown';
    }else{
        quoteAuthor.textContent = quote.author;
    }
    // check quote length to determine styling
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    } catch (error) {
        // Catch eeror here
    }
}
// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
     
}
// Event listener
newQuotebtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// on load
getQuotes();
