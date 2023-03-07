import { Router } from 'express';

export const ventasRouter = Router();
ventasRouter.get('/ventas', (req, res) => { res.json([]); });
ventasRouter.post('/ventas', (req, res) => { res.json([]); });
ventasRouter.put('/ventas', (req, res) => { res.json([]); });
ventasRouter.delete('/ventas', (req, res) => { res.json([]); });
