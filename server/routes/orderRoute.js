import express from 'express';
import authUser from '../middlewares/authUser.js';
import { getAllOrders, getOrders, placeOrderCOD } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';
const orderRouter = express.Router();
orderRouter.post('/cod', authUser ,placeOrderCOD)
orderRouter.get('/user', authUser ,getOrders)
orderRouter.get('/seller', authSeller ,getAllOrders)
export default orderRouter;