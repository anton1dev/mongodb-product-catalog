import { getAllProductsService, getProductByIdService, addProductService } from './products-service.js';
import httpStatus from 'http-status';

export const getAllProducts = async (req, res, next) => {
  const products = await getAllProductsService();
  res.json(products);
};

export const getProductById = async (req, res, next) => {
  const productId = req.params.id;
  const product = await getProductByIdService(productId);
  res.json(product);
}

export const addProduct = async (req, res, next) => {
  const productData = req.body;
  const productId = await addProductService(productData);
  res.status(httpStatus.CREATED).json({ message: 'Product added: ', productId });
};
