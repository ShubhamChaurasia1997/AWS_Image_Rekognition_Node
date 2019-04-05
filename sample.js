 //the server object listens on port 8080
/*const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
		//console.log("running");
    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
//console.log('Node server running on port 3000'); 
		//console.log(data);
		*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
  }}
  }
var AWS = require('aws-sdk');
var uuid = require('uuid');
//var dd = new AWS.DynamoDB();
//var s3 = new AWS.S3();
//AWS.config.update({region:'us-west-2'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});
s3.config.update({
    accessKeyId: "AKIAJF67JZOV3CJ5HUMA",
    secretAccessKey: "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",
    "region": "us-west-2"   
});
AWS.config.update({
    accessKeyId: "AKIAJF67JZOV3CJ5HUMA",
    secretAccessKey: "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",
    "region": "us-west-2"   
});

var rekognition = new AWS.Rekognition();
var params = {
  Bucket: 'memes01', /* required */
  //Delimiter: 'jpg',
  //EncodingType: url,
  //Marker: '1.jpg',
  MaxKeys: 600
  //Prefix: '2',
  //RequestPayer: requester
};
s3.listObjects(params, function(err, datas) {
  
for(var m=0;m<5;m++){
	//sleep(5000);
	 var count=0;
	var params1 = {
  Image: { 
    //Bytes: new Buffer('...') || 'STRING_VALUE'
    S3Object: {
      Bucket: 'memes01',
      Name: datas.Contents[m].Key,
	  //Name: '434.gif',
      //Version: 'zQZ2OCFziVzy2eiba3FGllCQ6LHlmGGy'
    }
	
  } 
}
sleep(5000);
console.log(params1.Image.S3Object.Name);

rekognition.detectText(params1, function(err, data) {
	sleep(5000);
	
	
  if (err){console.log(err, err.stack);} //
	
  // an error occurred
  else{
		//JSON.stringify(data);
		var	i;
		//console.log(data);
		for(i=0;i<(data.TextDetections.length/2)-2;i++){
	print=data.TextDetections[i].DetectedText;
		console.log(" "+ print);
			//document.getElementById("demo").innerHTML += data.TextDetections[i].DetectedText;
		}       // successful response
			console.log("|");
}
		count=0;
}
	);
}});

  // successful response

   /*


*/