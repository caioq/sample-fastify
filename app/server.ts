import fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import itemRoutes from './routes/item.routes'

const PORT = 5000;

// application
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

server.register(itemRoutes)

// server
const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();