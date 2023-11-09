import { Router } from 'express';
import UserController from './userController';


const routes = Router();


routes.post('/login', UserController.login);
routes.get('/', UserController.index);
routes.get('/:id', UserController.show);
routes.post('/', UserController.store);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.destroy);

export default routes;
