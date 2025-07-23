import { client } from "..";

client
  .getDomainOverview({
    domain: "apple.com",
    display_limit: 5, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// Domain;Rank;Organic Keywords;Organic Traffic;Organic Cost
// [
//   {
//     domain: "apple.com",
//     organic_keywords: "40434694",
//     rank: "16",
//     organic_traffic: "172477156",
//     organic_cost: "146454929",
//   },
// ];
