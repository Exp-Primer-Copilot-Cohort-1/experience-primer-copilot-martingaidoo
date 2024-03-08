// Create web server   
var express = require('express');
var app = express();

// Create a route: /comments
app.get('/comments', function(req, res) {
    res.end('Comments');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
```

**Run the web server**

```bash
$ node comments.js
Listening on port 3000
```

**Open your browser and navigate to http://localhost:3000/comments**

You should see the text "Comments" in your browser.

**Add a route for /comments/new**

```javascript
// Path: comments.js
// Create web server   
var express = require('express');
var app = express();

// Create a route: /comments
app.get('/comments', function(req, res) {
    res.end('Comments');
});

// Create a route: /comments/new
app.get('/comments/new', function(req, res) {
    res.end('New Comment');
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
```

**Run the web server**

```bash
$ node comments.js
Listening on port 3000
```

**Open your browser and navigate to http://localhost:3000/comments/new**

You should see the text "New Comment" in your browser.

**Add a route for /comments/:id**

```javascript
// Path: comments.js
// Create web server   
var express = require('express');
var app = express();

// Create a route: /comments
app.get('/comments', function(req, res) {
    res.end('Comments');
});

// Create a route: /comments/new
app.get('/comments/new', function(req, res) {
    res.end('New Comment');
});

// Create a route: /comments/:id
app.get('/comments/:id', function(req, res) {
    res.end('Comment ' + req.params.id);
});

// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
```

**Run the web server**

```bash
$ node comments.js
Listening on port 3000
```

**Open your browser and navigate to http://localhost:3000/comments/123**

You should see the text "Comment 123" in your browser.

**Add a route for
