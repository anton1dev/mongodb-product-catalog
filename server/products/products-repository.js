import { getDb } from '../db.js';

export const getAllProducts = async () => {
  try {
    const cursor = getDb().db().collection('products').find();
    const products = await cursor.toArray();

    return products.map(productDoc => {
      productDoc.price = productDoc.price.toString();

      return productDoc;
    });
  } catch (err) {
    throw new Error('Error getting all products');
  }
};

export const getProductById = async (id) => {
  try {
    const productDoc = await getDb().db().collection('products').findOne({ _id: new ObjectId(id) });
    productDoc.price = productDoc.price.toString();

    return productDoc;
  } catch (err) {
    throw new Error('Error getting product by ID');
  }
};

export const addProduct = async (productData) => {
  try {
    const result = await getDb().db().collection('products').insertOne(productData);

    return result.insertedId;
  } catch (err) {
    throw new Error('Error adding product');
  }
};
