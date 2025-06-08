import { client } from "..";

client
  .getTrafficSummary({
    domains: ["apple.com"],
  })
  .then((data) => {
    console.log(data);
  });
