const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("welcome to our about page");
  } else {
    res.end(`
    <p>page not found</p>
    <a href="/">back</a>
    `);
  }
});

server.listen(5000);
