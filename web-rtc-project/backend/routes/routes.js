import { Router } from "express";
import authController from "../controllers/auth-controller";
import activateController from "../controllers/activate-controller";
import { authenticateUser } from "../middleware/authenticate-user";
import roomController from "../controllers/room-controller";

const router = Router();

router.post('/api/sendOtp' , authController.sendOtp);
router.post('/api/verifyOtp' , authController.verifyOtp);

// to go to this route user must be authenticated so we user authenticate middleware
router.post('/api/activateUser' , authenticateUser , activateController.activateUser);

// on every refresh new token are generated
router.post('/api/refresh' , authController.refresh);

router.post('/api/logout' , authenticateUser , authController.logoutUser);

router.post('/api/createRoom' , authenticateUser , roomController.createRoom);
router.get('/api/getRooms' , authenticateUser , roomController.getRooms);

export default router;