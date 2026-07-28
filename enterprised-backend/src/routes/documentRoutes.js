import express from 'express';
import { 
  uploadDocument, 
  getDocuments, 
  getDocumentById, 
  deleteDocument 
} from '../controllers/documentController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.post('/upload', uploadDocument);
router.get('/', getDocuments);
router.get('/:id', getDocumentById);
router.delete('/:id', deleteDocument);

export default router;