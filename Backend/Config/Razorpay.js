import Razorpay from "razorpay"
import dotenv from "dotenv";

dotenv.config();

const RazorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

export default RazorpayInstance