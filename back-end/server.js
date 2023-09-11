import express from "express";
import satelliteRouter from "./routes/satellite.js";
import cors from"cors";

const app = express();
app.use(cors());

app.use("/satellite", satelliteRouter);


app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
