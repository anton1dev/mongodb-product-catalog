import { getDb } from '../db.js';

export const findUserByEmail = async (email) => {
  try {
    const userDoc = await getDb().db().collection('users').findOne({ email });
    return userDoc;
  } catch (err) {
    throw new Error('Error finding user by email');
  }
};

export const createUser = async (email, hashedPassword) => {
  try {
    const result = await getDb().db().collection('users').insertOne({
      email,
      password: hashedPassword
    });
    return result;
  } catch (err) {
    throw new Error('Error creating user');
  }
};
