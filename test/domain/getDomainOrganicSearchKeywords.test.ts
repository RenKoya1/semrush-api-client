import { client } from "..";

client
  .getDomainOrganicSearchKeywords({
    domain: "apple.com",
    displayLimit: 1, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

//   Keyword;Position;Previous Position;Position Difference;Search Volume;CPC;Url;Traffic (%);Traffic Cost (%);Competition;Number of Results;Trends
//  {
//     keyword: 'apple',
//     position: '1',
//     previous_position: '1',
//     position_difference: '0',
//     search_volume: '5000000',
//     cpc: '0.19',
//     url: 'https://www.apple.com/',
//     'traffic_(%)': '2.31',
//     'traffic_cost_(%)': '0.51',
//     competition: '0.66',
//     number_of_results: '4540000000',
//     trends: '0.36,0.54,0.44,0.66,0.54,0.66,0.44,0.44,0.54,0.66,0.29,0.24'
//   },
//   {
//     keyword: 'facebook',
//     position: '2',
//     previous_position: '2',
//     position_difference: '0',
//     search_volume: '124000000',
//     cpc: '0.02',
//     url: 'https://apps.apple.com/us/app/facebook/id284882215',
//     'traffic_(%)': '1.86',
//     'traffic_cost_(%)': '0.04',
//     competition: '0.00',
//     number_of_results: '77',
//     trends: '0.54,0.81,0.67,0.81,0.54,0.54,0.67,0.67,0.54,0.54,0.44,0.54'
//   },
//   {
//     keyword: 'gmail',
//     position: '5',
//     previous_position: '5',
//     position_difference: '0',
//     search_volume: '55600000',
//     cpc: '1.24',
//     url: 'https://apps.apple.com/us/app/gmail-email-by-google/id422689480',
//     'traffic_(%)': '1.41',
//     'traffic_cost_(%)': '2.07',
//     competition: '0.00',
//     number_of_results: '87',
//     trends: '0.54,0.81,0.66,0.81,0.54,0.36,0.81,1.00,0.54,0.66,0.66,0.36'
//   },
//   {
//     keyword: 'chatgpt',
//     position: '4',
//     previous_position: '4',
//     position_difference: '0',
//     search_volume: '30400000',
//     cpc: '0.12',
//     url: 'https://apps.apple.com/us/app/chatgpt/id6448311069',
//     'traffic_(%)': '1.14',
//     'traffic_cost_(%)': '0.16',
//     competition: '0.23',
//     number_of_results: '363000000',
//     trends: '0.29,0.29,0.29,0.36,0.44,0.44,0.44,0.44,0.54,0.66,0.81,1.00'
//   },
//   {
//     keyword: 'iphone 16',
//     position: '1',
//     previous_position: '1',
//     position_difference: '0',
//     search_volume: '1830000',
//     cpc: '2.07',
//     url: 'https://www.apple.com/iphone-16/',
//     'traffic_(%)': '0.84',
//     'traffic_cost_(%)': '2.06',
//     competition: '1.00',
//     number_of_results: '0',
//     trends: '0.19,0.24,0.44,1.00,0.29,0.29,0.29,0.19,0.16,0.19,0.19,0.16'
//   }
