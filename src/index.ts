import http from 'node:http';
import { config } from 'dotenv';
config();

// import DB from './DB';

const PORT = process.env.PORT;
console.log(PORT);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url) {
  }

  console.log(req.url);
  console.log(req.method);

  res.end(
    JSON.stringify({
      data: 'server on res.end!',
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});
