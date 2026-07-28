import express from 'express';
import { search, suggest } from '../controllers/searchController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Yeh routes sahi hain?
router.post('/', authenticate, search);
router.get('/suggest', authenticate, suggest);

export default router;