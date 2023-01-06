import http from 'node:http';
import {config} from 'dotenv';
config();
import DB from './DB';

import 'node:net';
import 'node:url';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'server on res.end!',
    }));
  });
  

  server.listen(PORT, () => {
    console.log(`Server is running on PORT  ${PORT}`)
  })