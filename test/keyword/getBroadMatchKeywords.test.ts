import { client } from "..";

client
  .getBroadMatchKeywords({
    phrase: "apple",
    displayLimit: 4, // Optional, default is 1000
    database: "us",
    displaySort: "nq_desc", // Optional, default is "nq_desc"
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     keyword: 'apple',
//     search_volume: '5000000',
//     cpc: '0.19',
//     competition: '0.66',
//     number_of_results: '4550000000',
//     trends: '0.36,0.54,0.44,0.66,0.54,0.66,0.44,0.44,0.54,0.66,0.29,0.24',
//     intent: '2,0',
//     keyword_difficulty_index: '100'
//   },
//   {
//     keyword: 'apple stock',
//     search_volume: '1830000',
//     cpc: '1.12',
//     competition: '0',
//     number_of_results: '1350000000',
//     trends: '0.44,0.36,0.36,0.30,0.30,0.24,0.30,0.36,0.30,0.30,0.67,0.36',
//     intent: '1',
//     keyword_difficulty_index: '100'
//   },
//   {
//     keyword: 'apple store',
//     search_volume: '1500000',
//     cpc: '0.48',
//     competition: '0.13',
//     number_of_results: '4310000000',
//     trends: '0.54,0.30,0.54,0.66,0.30,0.81,0.54,0.54,0.44,0.36,0.54,0.54',
//     intent: '2',
//     keyword_difficulty_index: '100'
//   },
//   {
//     keyword: 'apple tv',
//     search_volume: '1500000',
//     cpc: '3.01',
//     competition: '0.38',
//     number_of_results: '4260000000',
//     trends: '0.44,0.44,0.44,0.44,1.00,0.54,0.54,0.81,0.66,0.54,0.54,0.66',
//     intent: '2,3',
//     keyword_difficulty_index: '100'
//   }
// ]
