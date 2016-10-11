var http = require("http");
var url = require("url");

function readHTML (url, callback) {

  var body = "";

  var requestOptions = {
    host: url,
    path: "/"
  };
    http.get(requestOptions, (response) => {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      body += data;
    });

    response.on("end", function() {
      console.log(body);
    });
  });
}

function printHTML(htmlData) {
    console.log(htmlData);
}

readHTML("www.example.com", printHTML);