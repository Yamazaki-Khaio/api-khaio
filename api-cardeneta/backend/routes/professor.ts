import express, { Request, Response } from 'express';

const router = express.Router();

// GET /professors
router.get('/', async (req: Request, res: Response) => {
    res.send('API is working!');
});

// GET /professors/:id
router.get('/:id', async (req: Request, res: Response) => {
    res.send('API is working!');
});

// POST /professors
router.post('/', async (req: Request, res: Response) => {
    res.send('API is working!');
});

// PUT /professors/:id
router.put('/:id', async (req: Request, res: Response) => {
    res.send('API is working!');
});

// DELETE /professors/:id
router.delete('/:id', async (req: Request, res: Response) => {
    res.send('API is working!');
});

export default router;
