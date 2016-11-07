var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


router.get('/posts/:post', function (req, res) {
  res.json(req.post);
});

router.put('/posts/:post/upvote', function (req, res, next) {
  req.post.upvote(function (err, post) {
    if (err) { return next(err); }

    res.json(post);
  });
});

router.get('/posts', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) { return next(err); }

    res.json(posts);
  });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error('can\'t find post')); }

    req.post = post;
    return next();
  });
});

module.exports = router;