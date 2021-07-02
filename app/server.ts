import fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const PORT = 5000;

// application
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

interface Query {
  name?: string
}

interface Params {
  bar?: string
}

interface Body {
  baz?: string
}

interface Headers {
  a?: string
}


const opts: RouteShorthandOptions = {
  schema: {
    querystring: {  
      type: 'object',
      properties: {
        name: { type: 'string', }
      },
      required: ['name']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          },
          name: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get<{Querystring: Query}>('/ping', opts, (request, reply) => {
  const query = request.query;
  console.log('querystring', query);
  reply.code(200).send({ pong: 'it worked!', name: query.name })
});

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