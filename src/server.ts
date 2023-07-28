import express from "express";
const app = express();

import { userRouter } from "./routes/user.routes";
import { specialityRouter } from "./routes/speciality.routes";

app.use(express.json());
app.use(userRouter);
app.use(specialityRouter);

app.listen(3000, () => console.log("Server running at PORT 3000"));
