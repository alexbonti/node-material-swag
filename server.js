var express = require("express"),
    app = express();

var port = process.env.PORT || 80;
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get("/kafkain", function (request, response) {
  console.log('HIT')
  response.end("confirmed");
});


app.get("/lovequote", function (request, response) {
  console.log('Love')
  let quote=loveGenerator()
  response.json(quote);
});

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);


app.get("/random/basic", function (request, response) {
  var max = request.query.number;
  console.log(max)
  if(max===undefined){
    max=100
  }
  console.log(max)
  let ran=Math.floor(Math.random() * max);
  console.log(ran)

  response.end(ran.toString());
});


app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();

var quotes = {
  "quotes": [
    {quote: "The best love is the kind that awakens the soul, that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.",
    author: "The Notebook "},
    {quote: "I look at you and see the rest of my life in front of my eyes.",
    author: ""},
    {quote: "The greatest happiness of life is the conviction that we are loved, loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo"},
    {quote: "All, everything that I understand, I only understand because I love.",
    author: "Leo Tolstoy"},
    {quote: "And remember, as it was written, to love another person is to see the face of God.",
    author: "Les Miserables "},
    {quote: "I'm much more me when I'm with you.",
    author: ""},
    {quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart." ,
    author: "Helen Keller "},
    {quote: "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
    author: "T. Tolis"},
    {quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    author: "Angelita Lim  "},
    {quote: "In order to be happy oneself it is necessary to make at least one other person happy.",
    author: "Theodor Reik"},
    {quote: "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that.",
    author: "Woody Allen"},
    {quote: "There's no substitute for a great love who says, 'No matter what's wrong with you, you're welcome at this table.'",
    author: "Tom Hanks"},
    {quote: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
    author: "Leo Christopher"},
    {quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "A. A. Milne"},
    {quote: "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    author: "Jodi Picoult, My Sister's Keeper"},
    {quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    author: "Lord of The Rings"},
    {quote: "You are my best friend, my human diary and my other half. You mean the world to me and I LOVE YOU.",
    author: ""},
    {quote: "If I know what love is, it is because of you." ,
    author: "Herman Hesse"},
    {quote: "Don’t forget I’m just a girl, standing in front of a boy, asking him to love her.",
    author: "Anna to William in Notting Hill"},
    {quote: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
    author: ""},
    {quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche"},
    {quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    author: "When Harry Met Sally"},
    {quote: "At the touch of love everyone becomes a poet.",
    author: "Plato"},
    {quote: "I realized I was thinking of you, and I began to wonder how long you'd been on my mind. Then it occurred to me: Since I met you, you've never left.",
    author: ""},
    {quote: "Pleasure of love lasts but a moment. Pain of love lasts a lifetime.",
    author: "Bette Davis"},
    {quote:  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao-Tzu"},
    {quote: "Love is like war: easy to begin but very hard to stop.",
    author: "H. L. Mencken"},
    {quote: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
    author: ""},
    {quote: "We are shaped and fashioned by those we love." ,
    author: "Geothe"},
    {quote: "When love is not madness it is not love." ,
    author: "Pedro Calderón de la Barca"},
    {quote: "You have bewitched me body and soul, and I love, I love, I LOVE YOU.",
    author: "Pride & Prejudice"},
    {quote: "Love is so short, forgetting is so long." ,
    author: "Pablo Neruda"},
    {quote: "One word frees us of all the weight and pain of life: That word is love." ,
    author: "Sophocles"},
    {quote: "I wish I could turn back the clock. I'd find you sooner and love you longer.",
    author: ""},
    {quote:  "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
    author: "Julia Roberts"},
    {quote: "The greatest thing you'll ever learn Is to love and be loved in return.",
    author: "Unforgettable with Love by Natalie Cole"},
    {quote: "I have decided to stick to love, hate is too great a burden to bear.",
    author: "Martin Luther King, Jr."},
    {quote: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    author: "Oscar Wilde"},
    {quote: "Better to have lost and loved than never to have loved at all.",
    author: "Ernest Hemingway"},
    {quote: "All you need is love. But a little chocolate now and then doesn't hurt.",
    author: "Charles Schulz"},
    {quote: "Where there is love there is life.",
    author: "Mahatma Gandhi"},
    {quote:  "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you.",
    author: ""},
    {quote: "And in the end, the love you take, is equal to the love you make.",
    author: "Paul McCartney"},
    {quote: "Because I could watch you for a single minute and find a thousand things that I love about you.",
    author: ""},
    {quote: "There is a madness in loving you, a lack of reason that makes it feel so flawless.",
    author: "Leo Christopher"},
    {quote:  "All of me loves all of you.",
    author: "John Legend, All of Me"}
  ]
}


let loveGenerator=()=>{
  let index = Math.floor(Math.random() * quotes.quotes.length);
  let quote = quotes.quotes[index].quote;
  let author = quotes.quotes[index].author == "" ? "Unknown" : quotes.quotes[index].author;
  let completeQuote={quote,author}

  return completeQuote
  
}
