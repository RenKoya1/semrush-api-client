import { client } from "..";

client
  .getKeywordOverview({
    phrase: "apple",
    database: "us",
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     date: '202509',
//     database: 'us',
//     keyword: 'apple',
//     search_volume: '4090000',
//     cpc: '0.2',
//     competition: '0.73',
//     number_of_results: '5490000000',
//     intent: '2',
//     keyword_difficulty_index: '100'
//   }
// ]
