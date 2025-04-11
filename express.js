const express = require("express"); // importing the express framework --- npm install express -- to download the package/module/framework

const server = express(); // creating an express application/server

server.get("/", (req, res) => {
  res.send("Hello world!!-- landing");
});

server.get("/login", (req, res) => {
  res.send("Login html page/form");
});

server.post("/login", (req, res) => {
  // verify the info against the db
  res.status(402);
  res.send("Password or email incorrect");
});
// dynamic routes

server.get("/listing/:productId", (req, res) => {
  console.log(req.params.productId); // params- parameter
  // go to the db , find SELECT products WHERE product_id = req.params.id
  // render a html template with the found product details
  res.send(
    "Sending a html template with infomartion about product " +
      req.params.productId
  );
});

// templating in js -- ejs templating language

server.listen(8001, () => console.log("App running on port 8001")); // start the server - tell node js to wait for incoming http requests using the computers network interface
