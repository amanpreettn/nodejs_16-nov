var http = require("http");
var data = require("./data.json");
var querystring = require("querystring");
var url=require("url")

var server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  const parsed = url.parse(req.url);
  const query = querystring.parse(parsed.query);
  console.log(query)
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const filters = query;
    const filterUser = data.filter((user) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    console.log(filterUser)
    res.end(JSON.stringify(filterUser));
    //res.end(JSON.stringify(data.filter(value => value.username.includes(query.q))));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server has started on port 3000");
});
