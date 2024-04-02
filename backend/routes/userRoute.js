import express from "express";
import { adduserController, deleteUserController, updateUserController, userAllController, userCountController, userListController } from "../controllers/usercontrollers.js";

//router object  
const router = express.Router();


//ROUTING

//add users || Method POST
router.post('/users', adduserController);
router.get('/users/:page', userListController);
router.get('/user-count', userCountController);
router.get('/users', userAllController);
router.delete('/users/:id', deleteUserController);
router.put('/users/:id', updateUserController);

export default router;