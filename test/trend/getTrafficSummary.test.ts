import { SemrushAPIClient } from "../../src";
const client = new SemrushAPIClient({ api_key: process.env.SEMRUSH_API_KEY! });

client
  .getTrafficSummary({
    domains: ["sintra.ai"],
    exportColumns: ["target", "visits", "users", "rank", "desktop_visits", "mobile_visits"],
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
