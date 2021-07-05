import Item from '../entity/Item'
import CreateItemDTO from '../dtos/CreateItemDTO'

export default interface ItemRepository {
    saveItem(item: CreateItemDTO) : Promise<Item>;
}