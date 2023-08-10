import { Router } from 'express';

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserHandler,
  updateUserHandler,
  loginHandler
} from './user.controller';

const router = Router();

// /api/users -> GET
router.get('/', getAllUserHandler);

// /api/users -> POST
router.post('/', createUserHandler);

// /api/users/:id -> GET
router.get('/:id', getUserHandler);

// /api/users/:id -> DELETE
router.delete('/:id', deleteUserHandler);

// /api/users/:id -> PATCH
router.patch('/:id', updateUserHandler);

// /api/users/login -> POST
router.post('/login', loginHandler)

export default router;
