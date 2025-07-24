import { client } from "..";

client
  .getReferringDomains({
    target: "google.com",
    target_type: "domain", // Optional, default is "domain"
    display_limit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// //  {
//     domain_ascore: '7',
//     domain_score: '7',
//     domain: '777shows.com',
//     backlinks_num: '65625543',
//     domain_trust_score: '7',
//     ip: '85.222.227.67',
//     country: 'nl',
//     first_seen: '1600226837',
//     last_seen: '1753056441'
//   },
//   {
//     domain_ascore: '85',
//     domain_score: '85',
//     domain: 'stripchat.com',
//     backlinks_num: '31757306',
//     domain_trust_score: '85',
//     ip: '104.17.117.12',
//     country: '',
//     first_seen: '1659696479',
//     last_seen: '1753056397'
//   },
//   {
//     domain_ascore: '28',
//     domain_score: '28',
//     domain: 'accrediteddrugtesting.com',
//     backlinks_num: '29850299',
//     domain_trust_score: '28',
//     ip: '31.97.135.185',
//     country: 'us',
//     first_seen: '1689457554',
//     last_seen: '1751875924'
//   },
//   {
//     domain_ascore: '2',
//     domain_score: '2',
//     domain: 'agrarij.ru',
//     backlinks_num: '25055663',
//     domain_trust_score: '2',
//     ip: '172.67.223.19',
//     country: '',
//     first_seen: '1725124142',
//     last_seen: '1750297284'
//   }
// ]
