import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import Product from "../entities/Product";

export class ProductRepository {
    @InjectRepository(Product)
    private repository: Repository<Product>
    constructor() {

    }

    public async findByName(name: string): Promise<Product | undefined> {
        const product = await this.repository.findOne({
            where: {
                name
            }
        });
        return product || undefined;
    }
}
