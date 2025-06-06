import { client } from "..";

client
  .getDomainOverview({
    domain: "apple.com",
    display_limit: 10, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// Domain;Rank;Organic Keywords;Organic Traffic;Organic Cost
// apple.com;15;40047993;182250868;187984497
