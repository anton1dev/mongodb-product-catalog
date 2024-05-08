import httpStatus from 'http-status';
import { loginUser, signupUser } from './auth-service.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUser(email, password);

  if (result.success) {
    res.status(httpStatus.OK).json({ message: result.message, token: result.token });
  } else {
    res.status(httpStatus.UNAUTHORIZED).json({ message: result.message });
  }
};

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const result = await signupUser(email, password);

  if (result.success) {
    res.status(httpStatus.CREATED).json({ message: result.message, token: result.token, user: { email: result.email } });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: result.message });
  }
};
