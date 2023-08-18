import express from 'express';
import { createServer } from 'http';

import expressConfig from './config/express';
import routes from './routes';

// setup server
const app = express();
export const server = createServer(app);

// setup express
expressConfig(app);
// routes
routes(app);

export default app;

// node -> server.listen{
//   express -> app.listen
//   graphql -> grahpqlserver.listen
//   socket.io -> socketserver.listen
// }

// express -> app.listen(() => { console.info(`Server running 🤖🚀 at http://localhost:${PORT}`); })
// graphql -> grahpqlserver.listen
// socket.io -> socketserver.listen