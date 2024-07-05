import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app=express();

import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";


dotenv.config();
const PORT=process.env.PORT;






app.use(express.json());
app.use(cookieParser());


app.use("/api/auth" , authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users" , userRoute);
// app.get("/" , (req, res)=>{
//     res.send("Hello world");
// })




app.listen(PORT , ()=>{
connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})