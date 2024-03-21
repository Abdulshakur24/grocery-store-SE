import morgan from "morgan";
import express from "express";
import http from "http";
import apiRouters from "./routes/index";
import cors from "cors";
import { isAuthenticated } from "./middleware/isAuth";
import path from "path";
import { initIO } from "./utils/socket";

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 8070;


app
  .use(
    cors({
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://192.168.100.7:5173",
        "http://localhost:8080",
        "https://grocery-store-se.netlify.app"
      ],
      credentials: true,
    })
  )
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan("dev"))
  .use(
    "/public",
    isAuthenticated,
    express.static(path.join(__dirname, "..", "public"))
  )
  .use(apiRouters);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  initIO(server);
});
