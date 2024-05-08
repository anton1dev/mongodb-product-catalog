import pkg from 'bcryptjs';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { findUserByEmail, createUser } from './auth-repository.js';
import { SALT_LENGTH, TOKEN_EXP_TIME } from '../config/config.js';

const { hash, compare } = pkg;
const { sign } = jwt;

const createToken = () => {
  return sign({}, 'secret', { expiresIn: TOKEN_EXP_TIME });
};

export const loginUser = async (email, password) => {
  try {
    const userDoc = await findUserByEmail(email);

    if (!userDoc) {
      return { success: false, status: httpStatus.UNAUTHORIZED, message: 'Authentication failed, invalid username or password.' };
    }

    const result = await compare(password, userDoc.password);

    if (!result) {
      return { success: false, status: httpStatus.UNAUTHORIZED, message: 'Authentication failed, invalid username or password.' };
    }

    const token = createToken();

    return { success: true, status: httpStatus.OK, message: 'Authentication succeeded!', token };
  } catch (err) {
    return { success: false, status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
  }
};

export const signupUser = async (email, password) => {
  try {
    const hashedPW = await hash(password, SALT_LENGTH);
    const result = await createUser(email, hashedPW);
    const token = createToken();

    return { success: true, status: httpStatus.CREATED, message: 'User created successfully!', token, email };
  } catch (err) {
    return { success: false, status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Creating a user failed!' };
  }
};
