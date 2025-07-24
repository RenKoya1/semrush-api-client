import { client } from "..";

client
  .getRelatedKeywords({
    phrase: "apple",
    display_limit: 4, // Optional, default is 1000
    database: "us",
    displaySort: "nq_desc", // Optional, default is "nq_desc"
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     keyword: "bing",
//     search_volume: "6120000",
//     cpc: "1.51",
//     competition: "0",
//     number_of_results: "668000000",
//     trends: "0.36,0.45,0.55,0.30,0.55,0.36,0.30,0.36,0.30,0.30,0.30,0.30",
//     related_relevance: "0.05",
//     keywords_serp_features: "6,9,36",
//     intent: "2",
//     keyword_difficulty_index: "100",
//   },
//   {
//     keyword: "apple stock",
//     search_volume: "1830000",
//     cpc: "1.12",
//     competition: "0",
//     number_of_results: "1350000000",
//     trends: "0.44,0.36,0.36,0.30,0.30,0.24,0.30,0.36,0.30,0.30,0.67,0.36",
//     related_relevance: "0.15",
//     keywords_serp_features: "0,1,4,6,9,21,36",
//     intent: "1",
//     keyword_difficulty_index: "100",
//   },
//   {
//     keyword: "icloud",
//     search_volume: "1830000",
//     cpc: "1.5",
//     competition: "0",
//     number_of_results: "82",
//     trends: "0.54,0.54,0.54,0.81,0.81,0.54,0.66,0.66,0.54,0.66,0.44,0.66",
//     related_relevance: "0.1",
//     keywords_serp_features: "6,9,36",
//     intent: "2",
//     keyword_difficulty_index: "100",
//   },
//   {
//     keyword: "iphone 16",
//     search_volume: "1830000",
//     cpc: "2.07",
//     competition: "1",
//     number_of_results: "2940000000",
//     trends: "0.19,0.24,0.44,1.00,0.29,0.29,0.29,0.19,0.16,0.19,0.19,0.16",
//     related_relevance: "0.1",
//     keywords_serp_features: "5,6,9,14,15,21,34,36",
//     intent: "2,0",
//     keyword_difficulty_index: "100",
//   },
//   {
//     keyword: "apple store",
//     search_volume: "1500000",
//     cpc: "0.48",
//     competition: "0.13",
//     number_of_results: "4310000000",
//     trends: "0.54,0.30,0.54,0.66,0.30,0.81,0.54,0.54,0.44,0.36,0.54,0.54",
//     related_relevance: "0.2",
//     keywords_serp_features: "1,3,6,9,14,36",
//     intent: "2",
//     keyword_difficulty_index: "100",
//   },
// ];
