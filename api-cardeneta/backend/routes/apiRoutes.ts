import { Router } from 'express';
import { listarAlunos } from '../controllers/alunosController';
import { listarNotas } from '../controllers/notasController';
import { listarProfessores } from '../controllers/professoresController';

const router = Router();

router.get('/alunos', listarAlunos);
router.get('/notas', listarNotas);
router.get('/professores', listarProfessores);

export default router;
