import { client } from "..";

client
  .getKeywordOverview({
    phrase: "apple",
  })
  .then((data) => {
    console.log(data);
  });

// (3.11.8)  renkoya@Rens-Mac-Studio  ~/Desktop/agos/semrush-api   main ±  npx ts-node test/keyword/getKeywordOverview.test.ts
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
//   {
//     date: '202507',
//     database: 'af',
//     keyword: 'apple',
//     search_volume: '4400',
//     cpc: '0.32',
//     competition: '0',
//     number_of_results: '62'
//   },
//   {
//     date: '202507',
//     database: 'al',
//     keyword: 'apple',
//     search_volume: '6600',
//     cpc: '0.4',
//     competition: '0.01',
//     number_of_results: '80'
//   },
//   {
//     date: '202507',
//     database: 'am',
//     keyword: 'apple',
//     search_volume: '9900',
//     cpc: '0.17',
//     competition: '0.02',
//     number_of_results: '59'
//   },
// ]
