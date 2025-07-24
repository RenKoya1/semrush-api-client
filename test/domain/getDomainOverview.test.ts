import { client } from "..";

client
  .getDomainOverview({
    domain: "apple.com",
    display_limit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// Domain;Rank;Organic Keywords;Organic Traffic;Organic Cost
// {
//   database: 'my',
//   date: '20250723',
//   domain: 'apple.com',
//   rank: '11',
//   organic_keywords: '464087',
//   organic_traffic: '9689192',
//   organic_cost: '10350909',
//   adwords_keywords: '62',
//   adwords_traffic: '29833',
//   adwords_cost: '75320',
//   pla_keywords: '0',
//   pla_uniques: '0',
//   serp_features_positions: '20354',
//   serp_features_positions_branded: '7839',
//   serp_features_traffic: '256461',
//   serp_features_traffic_branded: '43923',
//   serp_features_traffic_cost: '45294',
//   serp_features_positions_new: '477',
//   serp_features_positions_lost: '849'
// }
