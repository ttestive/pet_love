import express from 'express';
import {
    getAllEvents,
    create,
    update,
    remove


} from '../controllers/eventosController.js';

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
// router.get('/', getAllEvents)

export default router;