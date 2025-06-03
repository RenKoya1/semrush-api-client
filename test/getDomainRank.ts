import { client } from ".";

client
  .getDomainRank({
    domain: "apple.com",
    display_limit: 10, // Optional, default is 1000
  })
  .then((data) => {
    console.log("Domain Rank Data:", data);
  });

// Domain;Rank;Organic Keywords;Organic Traffic;Organic Cost
// apple.com;15;40047993;182250868;187984497
