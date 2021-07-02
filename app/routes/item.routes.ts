import ItemController from '../controllers/item.controller'
import { FastifyInstance, RouteShorthandOptions } from "fastify";

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
}

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: ItemController.getItems,
}

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: ItemController.getItem,
}

// PING POC test
interface Query {
  name?: string
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
  },
}

function itemRoutes(fastify: FastifyInstance, options, done) {
  // ping route
  fastify.get<{Querystring: Query}>('/ping', opts, (request, reply) => {
    const query = request.query;
    console.log('querystring', query);
    reply.code(200).send({ pong: 'it worked!', name: query.name })
  });

  // Get all items
  fastify.get('/items', getItemsOpts)

  // Get single items
  fastify.get('/items/:id', getItemOpts)

  done()
}

export default itemRoutes;