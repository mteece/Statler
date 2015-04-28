var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Comment = mongoose.model('Comment');

/* GET edit page by ID . */
router.get('/:commentId', function(req, res, next) {
    var commentId = req.params.commentId;
    res.render('edit', { title: 'Express', id: commentId });
    //res.send('respond with a resource');
});

router.param('commentId', function(req, res, next, commentId) {
    var query = Comment.findById(commentId);

    query.exec(function (err, comment){
        if (err) { return next(err); }
        if (!comment) { return next(new Error('can\'t find comment')); }

        req.comment = comment;
        return next();
    });
});

module.exports = router;