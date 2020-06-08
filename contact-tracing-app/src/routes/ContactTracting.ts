import { Router } from 'express';

//, updateContactTracing
import {  createContactTracing,getContactTracing } from '../controllers/ContactTracing';

const router = Router();

router.post('/', createContactTracing);

router.get('/', getContactTracing);

//router.patch('/:id', updateContactTracing);

//router.delete('/:id', deleteTodo);

export default router;