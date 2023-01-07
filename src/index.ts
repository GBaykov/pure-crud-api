import http from 'node:http';
import { config } from 'dotenv';
config();
import { v4 as uuid } from 'uuid';
import { IUSER, IUSERS } from './types/user';
import DB from './DB';

const PORT = process.env.PORT;
console.log(PORT);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/api/users') {
    try {
      if (req.method === 'GET') {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(DB));
      } else if (req.method === 'POST') {
        // res.end(JSON.stringify(DB));

        const body: Array<Buffer> = [];

        req.on('data', (data) => {
          body.push(Buffer.from(data));
        });

        req.on('end', () => {
          const newUser: IUSER = JSON.parse(body.toString());
          if (!newUser.username || !newUser.age || !newUser.hobbies) {
            res.writeHead(404);
            res.write(
              'Error: incorrect properties. Person mast have age, name, hobbies'
            );
            res.end();
          } else {
            res.writeHead(201, {
              'Content-Type': 'application/json',
            });
            newUser.id = uuid();
            DB.push(newUser);

            res.end(JSON.stringify(newUser));
          }
        });
      }
    } catch {
    } finally {
    }
  }

  // res.end(
  //   JSON.stringify({
  //     data: 'server on res.end!',
  //   })
  // );
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`);
});
