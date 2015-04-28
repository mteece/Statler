/*
* // tutorial13.json
 [
 {"author": "Pete Hunt", "text": "This is one comment"},
 {"author": "Jordan Walke", "text": "This is *another* comment"}
 ]
* */

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    author: String,
    text: String
});

mongoose.model('Comment', CommentSchema);