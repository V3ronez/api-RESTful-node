/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();
import './src/database/connection';
import express from 'express';
import home from './src/routes/Api/homeRoutes';

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
    this.app.use('/', home);
  }
}

export default new App().app;
