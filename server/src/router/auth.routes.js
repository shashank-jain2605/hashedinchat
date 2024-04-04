import { Router } from "express";
import {
  login,
  signup,
  sendMessage,
  getMessages,
  getUsers,
  logout,
} from "../controllers/index.js";
import protectRoute from "../middleware/protectRoute.js";

const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/logout").post(logout);

// message route
router.route("/send/:id").post(protectRoute, sendMessage);
router.route("/send/:id").get(protectRoute, getMessages);

//users
router.route("/users").get(protectRoute, getUsers);

export default router;
