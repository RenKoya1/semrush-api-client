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
//     date: '202507',
//     database: 'ae',
//     keyword: 'apple',
//     search_volume: '135000',
//     cpc: '0.38',
//     competition: '1',
//     number_of_results: '88'
//   },
// ]
