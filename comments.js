// Create web server
// Create a web server that listens for incoming requests and responds with a static HTML file. The HTML file should include a script that fetches comments from a JSON file and displays them on the page. The JSON file should contain an array of comments. Each comment should have a username and a message.

// Use the following JSON file to populate the comments:

// {
//   "comments": [
//     {
//       "username": "Alice",
//       "message": "Hello!"
//     },
//     {
//       "username": "Bob",
//       "message": "Hi!"
//     }
//   ]
// }

// The web server should listen on port 3000.

// Your solution should be placed in a file called comments.js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<!DOCTYPE html>');
      res.write('<html>');
      res.write('<head>');
      res.write('<title>Comments</title>');
      res.write('</head>');
      res.write('<body>');
      res.write('<h1>Comments</h1>');
      res.write('<ul id="comments"></ul>');
      res.write('<script>');
      res.write('const comments = ' + data + ';');
      res.write('const commentsList = document.getElementById("comments");');
      res.write('for (const comment of comments.comments) {');
      res.write('const li = document.createElement("li");');
      res.write('li.textContent = comment.username + ": " + comment.message;');
      res.write('commentsList.appendChild(li);');
      res.write('}');
      res.write('</script>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});