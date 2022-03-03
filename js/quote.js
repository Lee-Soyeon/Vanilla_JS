const quotes = [
    {
        quote: "Seize the day",
        author: ""
    },
    {
        quote: "I don't want a perfect life, I want a happy life",
        author: ""
    },
    {
        quote: "This is how life is",
        author: ""
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote