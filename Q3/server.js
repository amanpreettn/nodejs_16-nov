var http = require("http");
var fs = require("fs");

var HomePage = fs.readFileSync("index.html");

var server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url == "/" || req.url == "/home") {
    res.write(HomePage);
    res.end("You are at Home Page");
  } else if (req.url == "/about") {
    res.write(HomePage);
    res.end("You are at About Page");
  } else if (req.url == "/contactus") {
    res.write(HomePage);
    res.end("You are at ContacUs Page");
  } else {
    res.end("<h1>error 404 Page not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server has started on port 3000");
});
