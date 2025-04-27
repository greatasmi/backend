import express from 'express';
import { registerUser, loginUser, getCurrentUser, refreshAuthToken } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getCurrentUser);
router.post('/refresh', refreshAuthToken);

export default router;
