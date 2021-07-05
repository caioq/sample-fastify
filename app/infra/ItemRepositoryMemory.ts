import Item from '../entity/Item'
import ItemRepository from '../repository/ItemRepository'
import CreateItemDTO from '../dtos/CreateItemDTO'

export default class ItemRepositoryMemory implements ItemRepository {
    
    items = [
        {
            id: 1,
            name: 'Caneta'
        }
    ];

    async saveItem({ name }: CreateItemDTO): Promise<Item> {
        const item = {
            id: this.items.length + 1,
            name
        }
        this.items.push(item);

        return item;
    }
}