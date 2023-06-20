import { Router } from "express";
import  ProdutcsController  from "@modules/products/controllers/ProdutcsController";


const productsRouter = Router();
const productsController = new ProdutcsController();
productsRouter.get('/', productsController.index);
productsRouter.get('/:id' , productsController.show);
productsRouter.post('/:id' , productsController.create);
productsRouter.put('/:id' , productsController.update);
productsRouter.delete('/:id' , productsController.delete);


export default productsRouter;
