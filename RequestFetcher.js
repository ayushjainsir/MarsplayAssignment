const request = require('request');

request('https://my-json-server.typicode.com/ayushjainsir/MarsplayAssignment/db', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
console.log(res.body);
console.log(res.body.posts);
});