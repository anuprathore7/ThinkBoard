import express from 'express';
import { getNotes ,CreateNotes , getNotesById ,  updateNotes , deleteNotes  } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNotesById);
router.put("/:id", updateNotes);
router.post("/" , CreateNotes);
router.delete("/:id" , deleteNotes);

export default router