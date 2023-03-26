import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ChatRoutes from "./routes/ChatRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import http from "http";
import { Server } from "socket.io";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND,
    methods: ["GET", "POST"],
  },
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Mongo Connected`);
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors());
app.use(express.json());

app.use("/chat", ChatRoutes);
app.use("/user", UserRoutes);

io.on("connection", (socket) => {
  // console.log("a user connected");
  socket.on("sm", (msg) => {
    // console.log("message: " + msg);
    io.emit("getm", "jj");
  });
  socket.on("smi", (msg) => {
    // console.log("message: " + msg);
    io.emit("smi1", msg);
  });

  socket.on("typi", (msg) => {
    // console.log("message: " + msg);
    io.emit("typ", "jj");
  });

  socket.on("onli", (msg) => {
    // console.log("message: " + msg);
    io.emit("onl", "jj");
  });

  socket.on("bgrndi", (msg) => {
    // console.log("message: " + msg);
    io.emit("bgrnd", "jj");
  });

  socket.on("disconnect", () => {
    // console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
