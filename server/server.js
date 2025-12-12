import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config.js';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/couldinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/address.js';
import orderRouter from './routes/orderRoute.js';
const app = express();
const port = process.env.PORT || 4000;
await connectDB();
await connectCloudinary();
const allowedOrigins = ["http://localhost:5173"];
// middlewares configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins,credentials:true}));

app.get('/',(req,res)=>res.send("API is working"));
app.use('/api/user',userRouter);
app.use('/api/seller',sellerRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/address',addressRouter);
app.use('/api/order',orderRouter);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})