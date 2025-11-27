import express from 'express';
import { postUser, postLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/createUser', postUser);
router.post('/login', postLogin)

export default router;