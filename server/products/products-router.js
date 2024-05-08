import { Router } from 'express';
import { getAllProducts, getProductById, addProduct } from './products-controller.js';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/:id', getProductById);

productsRouter.post('', addProduct);

export default productsRouter;
