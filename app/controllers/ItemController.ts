import ItemRepositoryMemory from "../infra/ItemRepositoryMemory"
import CreateItem from '../usecases/CreateItem'

export default class ItemController {

    static async create (req, res) {
        const { name } = req.body;
        const itemRepository = new ItemRepositoryMemory();
        
        const createItemService = new CreateItem(itemRepository);
        const item = await createItemService.execute({ name });
        res.send(item);
    }
}