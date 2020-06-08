import { Router } from 'express';

import { createUser, getUser } from '../controllers/User';

const router = Router();

router.post('/', createUser);

router.get('/', getUser);


export default router;