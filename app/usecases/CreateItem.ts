import Item from '../entity/Item'
import ItemRepository from '../repository/ItemRepository'
import CreateItemDTO from '../dtos/CreateItemDTO'

export default class CreateItem {

    readonly itemRepository: ItemRepository;

    constructor (itemRepository: ItemRepository) {
        this.itemRepository = itemRepository;
    }

    async execute(item: CreateItemDTO): Promise<Item> {
        return this.itemRepository.saveItem(item);
    }
}