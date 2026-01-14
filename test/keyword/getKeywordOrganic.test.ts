import { client } from "..";

client
  .getKeywordOrganic({
    phrase: "noimosai",
    database: "us",
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching keyword organic data:", error);
  });

//   [
//     {
//       position: '1',
//       position_type: '-1',
//       domain: 'www.apple.com',
//       url: 'https://www.apple.com/',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '2',
//       position_type: '-1',
//       domain: 'www.icloud.com',
//       url: 'https://www.icloud.com/',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '3',
//       position_type: '-1',
//       domain: 'en.wikipedia.org',
//       url: 'https://en.wikipedia.org/wiki/Apple_Inc.',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '4',
//       position_type: '-1',
//       domain: 'www.instagram.com',
//       url: 'https://www.instagram.com/apple/?hl=en',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '5',
//       position_type: '-1',
//       domain: 'www.reddit.com',
//       url: 'https://www.reddit.com/r/apple/',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '6',
//       position_type: '-1',
//       domain: 'www.youtube.com',
//       url: 'https://www.youtube.com/apple',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '7',
//       position_type: '-1',
//       domain: 'www.facebook.com',
//       url: 'https://www.facebook.com/apple/',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '8',
//       position_type: '-1',
//       domain: 'www.youtube.com',
//       url: 'https://www.youtube.com/watch?v=H3KnMyojEQU',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '9',
//       position_type: '-1',
//       domain: 'appleinsider.com',
//       url: 'https://appleinsider.com/',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     },
//     {
//       position: '10',
//       position_type: '-1',
//       domain: 'www.youtube.com',
//       url: 'https://www.youtube.com/watch?v=2Dk-DnXUeq4',
//       keywords_serp_features: '3,4,5,6,9,15,36',
//       serp_features: '3,4,5,6,9'
//     }
// ]
