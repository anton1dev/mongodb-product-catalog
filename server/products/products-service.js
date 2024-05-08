import { Decimal128 } from 'mongodb';
import { getAllProducts, getProductById, addProduct } from './products-repository.js';

export const getAllProductsService = async () => {
  try {
    return await getAllProducts();
  } catch (err) {
    throw new Error('Error getting all products');
  }
};

export const getProductByIdService = async (id) => {
  try {
    return await getProductById(id);
  } catch (err) {
    throw new Error('Error getting product by ID');
  }
};

export const addProductService = async (productData) => {
  try {
    const { name, description, price } = productData;

    return await addProduct({
      name,
      description,
      price: Decimal128.fromString(price.toString()),
      image
    });
  } catch (err) {
    throw new Error('Error adding product');
  }
};
