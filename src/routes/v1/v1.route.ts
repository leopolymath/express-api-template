import { Router } from 'express';
import PingController from '@/controllers/v1/ping.controller';
import { Routes } from '@interfaces/routes.interface';
import PersonController from '@/controllers/v1/person.controller';

class RouterV1 implements Routes {
  public router = Router();
  public path = '';
  private pingController = new PingController();
  private personController = new PersonController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.pingController.hello);
    this.router.get('/status', this.pingController.status);

    this.router.get('/person', this.personController.getPerson);
  }
}

export default RouterV1;
