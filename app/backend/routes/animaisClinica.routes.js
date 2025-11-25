import express from 'express';
import {
    getAll,
    create,
    update,
    remove
} from '../controllers/animaisControllers.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
<<<<<<< HEAD
<<<<<<< HEAD
// router.get('/', getAllEvents)
=======
//router.get('/', getAllEvents)
>>>>>>> c439bf9 (add rotas ao formulário de adição de animais para adoção e correções de rotas GET)
=======
<<<<<<< Updated upstream
//router.get('/', getAllEvents)
=======
<<<<<<< HEAD
// router.get('/', getAllEvents)
=======
//router.get('/', getAllEvents)
>>>>>>> c439bf9 (add rotas ao formulário de adição de animais para adoção e correções de rotas GET)
>>>>>>> Stashed changes
>>>>>>> 46734a9 (Resolve conflitos após stash)

export default router;