import { client } from "..";

client
  .getPhraseQuestions({
    phrase: "apple",
    display_limit: 4, // Optional, default is 1000
    database: "us",
    displaySort: "nq_desc", // Optional, default is "nq_desc"
  })
  .then((data) => {
    console.log(data);
  });

//   [
//   {
//     keyword: 'can dogs eat apples',
//     search_volume: '90500',
//     cpc: '0.04',
//     competition: '0.05',
//     number_of_results: '24500000',
//     trends: '0.67,0.67,0.67,0.67,0.81,0.81,0.44,0.81,0.81,0.81,0.81,0.67',
//     intent: '1',
//     keyword_difficulty_index: '48'
//   },
//   {
//     keyword: 'how to reset apple watch',
//     search_volume: '60500',
//     cpc: '0',
//     competition: '0',
//     number_of_results: '442000000',
//     trends: '0.81,0.81,0.81,0.81,0.81,0.66,0.81,0.81,0.66,0.81,0.66,0.81',
//     intent: '1',
//     keyword_difficulty_index: '50'
//   },
//   {
//     keyword: 'can dogs have apples',
//     search_volume: '49500',
//     cpc: '0.04',
//     competition: '0.05',
//     number_of_results: '40300000',
//     trends: '0.66,0.66,0.66,0.66,0.54,0.54,0.66,0.66,0.36,0.54,0.81,1.00',
//     intent: '1',
//     keyword_difficulty_index: '55'
//   },
//   {
//     keyword: 'how to use apple pay',
//     search_volume: '49500',
//     cpc: '0.95',
//     competition: '0.24',
//     number_of_results: '2430000000',
//     trends: '0.66,0.66,0.66,0.66,0.66,0.54,0.54,0.81,0.54,0.66,0.66,0.54',
//     intent: '1',
//     keyword_difficulty_index: '84'
//   }
// ]
