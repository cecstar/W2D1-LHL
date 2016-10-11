var request = require("request");
var url = require("url");

function readHTML (url, print) {
  request(url, function(err, response, body) {
    if(err) {
      throw err;
  }
  print(body);
  });
}
function printHTML(htmlData) {
    console.log(htmlData);
}

readHTML("http://www.example.com", printHTML);

//   var body = "";

//   var requestOptions = {
//     host: url,
//     path: "/"
//   };
// }
//     request.get(requestOptions, (response) => {


//     response.on("data", function(data) {
//       body += data;
//     });

//     response.on("end", function() {
//       console.log(body);
//     });
//   });
// }