import dotenv from "dotenv";
import app from "./api/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

app.listen(PORT, () => {
  console.log(`MOAZ Chat API is running on port ${PORT}`);
  console.log(`Using Gemini model: ${GEMINI_MODEL}`);
});
