import { Router } from 'express';

import {  createContactTracing,getContactTracing, updateContactTracing } from '../controllers/ContactTracing';

const router = Router();

router.post('/', createContactTracing);

router.get('/', getContactTracing);

router.patch('/:id', updateContactTracing);

//router.delete('/:id', deleteTodo);

export default router;