import express from 'express';
const router = express.Router();

import authRoutes from './auth';
import userRoutes from './user';

router.get('/check', (req, res) => {
    res.send('Ok');
});

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;