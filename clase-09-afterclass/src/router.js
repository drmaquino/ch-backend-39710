import { Router } from 'express';
import { middlewareDeRecibirImagenes } from './middlewareDeRecibirImagenes.js';

export const router = Router();

router.post('/imagenes', middlewareDeRecibirImagenes, (req, res, next) => {
    res.send(req.file);
});
