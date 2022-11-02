// Parse out query string params
// GET /api/something?authorName=Yeet
// authorName = event['queryStringParameters']['authorName']
exports.handler = async function (event) {
  const quotes = require('./quotes.json');

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteResponse = {
    content: randomQuote.content,
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quoteResponse),
  };
};