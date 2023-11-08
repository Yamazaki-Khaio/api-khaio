import express, { Application, Request, Response } from 'express';
import sequelize from './server/config/sequelize';
import User from './server/services/users/userRouters';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }
// Rota para testar a conexão com o banco de dados
  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send(process.env.DB_URI);
    });

    //rota do user
    this.app.use('/users', User)

  }

  public listen(): void {
    sequelize.authenticate().then(() => {
      this.app.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000');
      }
      );
    }
    ).catch((error) => {
      console.log('Não foi possível conectar com o banco de dados: ', error);
      sequelize.close();
    }
    );
  }
}

const app = new App();
app.listen();
