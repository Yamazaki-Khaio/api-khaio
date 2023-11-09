import { Router } from 'express';
import UserController from './userController';
import { loginRequired } from '../../middleware/authenticate';


const routes = Router();


routes.post('/login', UserController.login);
routes.get('/', UserController.index);
routes.get('/:id', loginRequired , UserController.show);
routes.post('/', UserController.store);
routes.put('/:id', loginRequired , UserController.update);
routes.delete('/:id', loginRequired, UserController.destroy);

export default routes;
