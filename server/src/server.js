import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import volunteerRoutes from "./routes/volunteers";
import participantRoutes from "./routes/participants";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/volunteers", volunteerRoutes);
app.use("/api/participants", participantRoutes);

app.get("/", (req, res) => {
  res.send("Green Team API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
