const http = require("http"); // http module

const myApp = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 402;
  res.end("Hello there!!! your server speaking - Albert's server");
});
// Eld0hub9786
myApp.listen(8000); // node - wait incomin http requests via channel 8000

// express js

// module / package / framework / library  -- in the context of js
// list commonly used js modules/packages for js web developers (backend)