import express, { Application, Request, Response } from 'express';
import sequelize from './server/config/sequelize';



class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send(process.env.DB_URI);
    });
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
