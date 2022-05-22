import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// Import Routes
import authRoutes from "./route/authRoutes.js";
import bookRoutes from "./route/bookRoutes.js";

// Setup configs
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// DB Config
mongoose
  .connect(
    process.env.DB
    //     {
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true,
    //     useFindAndModify: true,
    //   }
  )
  .then(() =>
    app.listen(process.env.port, () =>
      console.log(`Server Started on Post ${process.env.port}`)
    )
  )
  .catch((err) => console.log(err));
