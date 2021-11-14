const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (method === 'GET') {
    // method GET
    if (url === '/') {
      // root
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>homework 1 - section 3</title></head>');
      res.write('<body><h1>Hello, this is my first server!!</h1></body>');
      res.write('<form action="/create-user" method="POST">');
      res.write('<input type="text" name="message"/>');
      res.write('<button type="submit">send</button>');
      res.write('</form>');
      res.write('</html>');
      return res.end();
    } else if (url === '/users') {
      // users
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>homework 1 - section 3</title></head>');
      res.write('<body><ul>');
      res.write('<li>User 1</li>');
      res.write('<li>User 2</li>');
      res.write('<li>User 3</li>');
      res.write('<li>User 4</li>');
      res.write('</ul></body>');
      res.write('</html>');
      return res.end();
    } else {
      // not found
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>homework 1 - section 3</title></head>');
      res.write('<body><h1>Page Not Found!!</h1></body>');
      res.write('</html>');
      return res.end();
    }
  } else if (method === 'POST' && url === '/create-user') {
    // method POST
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/create-user');
      return res.end();
    });
  }
};

exports.handler = requestHandler;
