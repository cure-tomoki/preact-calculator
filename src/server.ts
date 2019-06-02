import * as Express from 'express';
import * as http from 'http';

const app = Express();
const server = http.createServer(app);
const port = 3000;

// static files
app.use(Express.static('dist'));
app.get('/', (_req: Express.Request, res: Express.Response) => {
  res.sendFile('index.html');
});

module.exports = server;

if (!module.parent) {
  server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App listening on port:${port}`);
  });
}
