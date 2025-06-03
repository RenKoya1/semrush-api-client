import { SemrushAPIClient } from "../src";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.SEMRUSH_API_KEY;
if (!API_KEY) {
  throw new Error("Please set the SEMRUSH_API_KEY environment variable.");
}
export const client = new SemrushAPIClient({
  api_key: API_KEY,
});
