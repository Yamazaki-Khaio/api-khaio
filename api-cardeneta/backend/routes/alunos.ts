import express from 'express';
import { Request, Response } from 'express';
import saveAlunos from '../controllers/alunosController';

const router = express.Router();

// GET all alunos
router.get('/alunos', (req: Request, res: Response) => {
    
    res.send({"message": "Hello World!"});
});

// GET aluno by ID
router.get('/alunos/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    // code to retrieve aluno with specified ID from database
    res.send(`Retrieving aluno with ID ${id}`);
});

// POST new aluno
router.post('/alunos', (req: Request, res: Response) => {
    const aluno = req.body;

    // code to add new aluno to database
    res.send(`Adding new aluno: ${JSON.stringify(aluno)}`);
    saveAlunos(aluno);

    
    
});

// PUT update aluno by ID
router.put('/alunos/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const aluno = req.body;
    // code to update aluno with specified ID in database
    res.send(`Updating aluno with ID ${id}: ${JSON.stringify(aluno)}`);
});

// DELETE aluno by ID
router.delete('/alunos/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    // code to delete aluno with specified ID from database
    res.send(`Deleting aluno with ID ${id}`);
});

export default router;
