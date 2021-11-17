var http = require("http");
var data = require("./data.json");

var server = http.createServer((req, res) => {
  if (req.url == "/users" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else if (req.url.match(/\/users\/([A-Za-z0-9]+)/) && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var pathname=req.url.split("/")[2];
    console.log(pathname)
    var ndata = data.filter((data) => {
     // console.log(data);
     return data.branchname==pathname
    });
    console.log(ndata)
    res.end(JSON.stringify(ndata));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
    console.log("Server has started on port 3000");
  });
  