import { Router } from "express";
import { encontrarUser, info,encontrarUserEmail, encontrarUserId, DeleteUser, update } from "../controllers/UserController.js";
import { authPrivate } from "../middlewares/Auth.js";

const router = Router();

router.get("/user", encontrarUser);
router.get("/user/:email", encontrarUserEmail);
router.delete('/user', DeleteUser);
router.get("/user", encontrarUserId);
router.put("/user/update/:id", update);

router.get("/user/me/",authPrivate,info);
// router.put("/user/me", update);

export default router;