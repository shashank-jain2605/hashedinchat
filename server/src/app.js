import express from "express";
import dotenv from "dotenv";
import { notFound } from "./middleware/notfound.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import connectDB from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//express middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed", err);
  });

app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("hello hashedin");
});

// import router
// import dataRouter from "./routes/routes.js";
import authRouter from "./router/auth.routes.js";
app.use("/api/v1/", authRouter);

// shashankfilter
// mongodb+srv://shashankjain2605:<password>@cluster0.qttnlql.mongodb.net/
app.use(notFound);
