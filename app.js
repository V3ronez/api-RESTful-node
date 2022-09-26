/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();
import './src/database/connection';
import express from 'express';
import homeRoutes from './src/routes/Api/homeRoutes';
import userRoutes from './src/routes/Api/userRoutes';
import tokenRoutes from './src/routes/Api/tokenRoute';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // this.app.use('/api', [homeRoutes, userRoutes]);
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/token', tokenRoutes);
  }
}

export default new App().app;
