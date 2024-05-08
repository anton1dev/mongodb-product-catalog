import { join } from 'path';

import express, { static as staticServer } from 'express';
import pkg from 'body-parser';

import { initDb } from './db.js';
import { setCORSHeaders } from './middleware/corsMiddleware.js';
import { serveStaticFiles } from './middleware/staticMiddleware.js';
import authRouter from './auth/auth-router.js';
import productsRouter from './products/products-router.js';
import { errorHandler } from './middleware/errorHandler.js';
import { DEFAULT_PORT } from './config/config.js';

const PORT = process.env.BE_PORT || DEFAULT_PORT;

const app = express();
const { json } = pkg;

app.use(json());
app.use('/images', serveStaticFiles);

app.use(setCORSHeaders);

app.use('/products', productsRouter);
app.use('/', authRouter);

app.use(errorHandler);

initDb((err, db) => {
  if (err) {
  } else {
    app.listen(PORT);
  }
});

