import { client } from "..";

client
  .getIndexedPages({
    target: "apple.com",
    targetType: "domain", // Optional, default is "domain"
    displayLimit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

//   [
//   {
//     source_url: 'http://apple.com/safari/',
//     source_title: '',
//     response_code: '301',
//     backlinks_num: '39396637',
//     domains_num: '1071',
//     last_seen: '1748026493',
//     external_num: '0',
//     internal_num: '0'
//   },
//   {
//     source_url: 'https://apple.com/',
//     source_title: '',
//     response_code: '301',
//     backlinks_num: '1217463',
//     domains_num: '20251',
//     last_seen: '1749460023',
//     external_num: '0',
//     internal_num: '0'
//   },
//   {
//     source_url: 'http://apple.com/',
//     source_title: '',
//     response_code: '301',
//     backlinks_num: '1043273',
//     domains_num: '52559',
//     last_seen: '1750932344',
//     external_num: '0',
//     internal_num: '0'
//   },
//   {
//     source_url: 'https://apple.com/safari',
//     source_title: '',
//     response_code: '301',
//     backlinks_num: '230657',
//     domains_num: '153',
//     last_seen: '1748010711',
//     external_num: '0',
//     internal_num: '0'
//   },
//   {
//     source_url: 'https://apple.com/app-store',
//     source_title: '',
//     response_code: '301',
//     backlinks_num: '116320',
//     domains_num: '121',
//     last_seen: '1748033917',
//     external_num: '0',
//     internal_num: '0'
//   }
// ]
