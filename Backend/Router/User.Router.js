import { Router } from "express"
import { LogOut, SignIN, SendOtp, VerifyEmail, UserIsAvailable, GetAllUser } from "../Controller/User.Controller.js";
import { AuthMiddleware } from "../Middleware/Auth.Middleware.js";
const router = Router();
router.route("/signin").post(SignIN);
router.route("/sendOtp").post(SendOtp);
router.route("/verifyemail").post(VerifyEmail);
router.route("/logout").get(LogOut);
router.route("/getUser").get(GetAllUser);
router.route("/me").get(AuthMiddleware, UserIsAvailable)

export default router