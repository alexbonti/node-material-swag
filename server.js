var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
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
