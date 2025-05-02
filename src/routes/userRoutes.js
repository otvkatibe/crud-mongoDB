import express from 'express';

import { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    patchUser, 
    deleteUser } 
from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

export default router;