import { client } from "..";

client
  .getDomainPaidSearchKeywords({
    domain: "apple.com",
    displayLimit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     keyword: 'apple',
//     position: '1',
//     previous_position: '1',
//     position_difference: '0',
//     search_volume: '4090000',
//     cpc: '0.27',
//     url: 'https://www.apple.com/',
//     'traffic_(%)': '2.12',
//     'traffic_cost_(%)': '0.66',
//     competition: '0.50',
//     number_of_results: '4920000000',
//     trends: '0.66,0.54,0.66,0.44,0.44,0.54,0.66,0.29,0.24,0.24,0.29,0.36'
//   }
// ]
