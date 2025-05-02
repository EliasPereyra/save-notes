import express from "express";
import cors from "cors";

import { connectDB } from "./db/db";
import { limiter } from "./middleware/rateLimiter";
import { pinoHttp } from "pino-http";
import { logger } from "./utils/logger";
import userRoutes from "./routes/user.routes";
import { noteRoutes } from "./routes/note.routes";

const PORT = process.env.PORT || 4000;

await connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(limiter);
// app.use(pinoHttp(logger));

userRoutes(app);
noteRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
