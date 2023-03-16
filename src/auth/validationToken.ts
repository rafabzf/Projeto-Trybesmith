import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'trybesmith';

const loginToken = (data:object) => jwt.sign({ data }, secret, {
  algorithm: 'HS256',
  expiresIn: '1d',
});

const tokenValidation = (token:string) => jwt.verify(token, secret);

export default {
  loginToken,
  tokenValidation,
};