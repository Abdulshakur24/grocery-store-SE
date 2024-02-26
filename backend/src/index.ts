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

const PORT = 8070;
const HOST = "localhost";

app
  .use(
    cors({
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://192.168.100.7:5173",
        "http://localhost:8080",
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

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  initIO(server);
});
