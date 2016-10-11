var request = require("request");
var url = require("url");

function readHTML (urlImport, callback) {

  var body = "";

  var requestedData = {
    host: url,
    path: urlImport
};

request.get(requestedData, (response) => {
  //response.setEncoding("utf8");
  //response.on("data", function(data) {
  //  console.log("Data chunk received, line 12: ", data.length);
  });
 // response.on("end", function() {
  console.log("End! Response Stream Completed.");
  };
}

readHTML("www.example.com", function printHTML (htmlData) {
  console.log(htmlData);
});