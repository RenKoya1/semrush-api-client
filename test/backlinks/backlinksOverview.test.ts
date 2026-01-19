import { client } from "..";

client
  .getBacklinksOverview({
    target: "noimosai.com",
    targetType: "domain", // Optional, default is "domain"
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     ascore: "100",
//     total: "41098355",
//     domains_num: "94283",
//     urls_num: "40584277",
//     ips_num: "64969",
//     ipclassc_num: "25977",
//     follows_num: "3017532",
//     nofollows_num: "38184145",
//     sponsored_num: "238",
//     ugc_num: "7247",
//     texts_num: "40498357",
//     images_num: "514069",
//     forms_num: "5",
//     frames_num: "3133",
//   },
// ];
