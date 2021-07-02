let items = [
  { id: '1', name: 'Item One' },
  { id: '2', name: 'Item Two' },
  { id: '3', name: 'Item Three' },
];

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params

  const item = items.find((item) => item.id === id)

  reply.send(item)
}

export default {
  getItem,
  getItems
}