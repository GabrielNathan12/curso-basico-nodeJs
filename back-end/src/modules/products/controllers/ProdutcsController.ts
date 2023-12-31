import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import CreateProductService from "../services/CreateProductService";
import UpdadeProductService from "../services/UpdateProductService";
import DeleteProductService from "../services/DeleteProductService";

export default class ProdutcsController{
    public async index(request:Request , response:Response): Promise<Response>{
        const listProducts = new ListProductService();
        const products = await listProducts.execute();

        return response.json(products);
    }

    public async show(request:Request, response:Response): Promise<Response>{
        const {id} = request.params;
        const showProduct = new ShowProductService();

        const product = await showProduct.execute({id});
        return response.json(product);
    }

    public async create(request:Request, response:Response): Promise<Response>{
        const {name, price, quantity} = request.body;
        const creatProduct = new CreateProductService();

        const product = await creatProduct.execute({
            name,price, quantity
        })

        return response.json(product);
    }

    public async update(request:Request, response:Response): Promise<Response>{
        const {name, price, quantity} = request.body;
        const {id} = request.params;
        const updateProduct = new UpdadeProductService();
        const product = await updateProduct.execute({
            id,
            name,
            price,
            quantity
        });
        return response.json(product);
    }

    public async delete(request:Request, response:Response): Promise<Response>{
        const {id} = request.params;
        const deleteService = new DeleteProductService();
        await deleteService.execute({id});

        return response.json([]);
    }
}
