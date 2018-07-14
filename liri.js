require("dotenv").config();
var keys= require("./keys.js");
var command= process.argv[2];
var fs = require('fs'); //file system
var twitter = require('twitter');
var request = require('request');
var api = new twitter(keys.twitter);
var params = {screen_name: "AttileoI"};

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

api.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
});
