import { client } from "..";

client
  .getAnchors({
    target: "apple.com",
    target_type: "domain", // Optional, default is "domain"
    display_limit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// [
//   {
//     anchor: "safari",
//     domains_num: "1130",
//     backlinks_num: "26972912",
//     first_seen: "1458359600",
//     last_seen: "1753149659",
//   },
//   {
//     anchor: "apple safari",
//     domains_num: "368",
//     backlinks_num: "10787294",
//     first_seen: "1452239451",
//     last_seen: "1753149605",
//   },
//   {
//     anchor: "<EmptyAnchor>",
//     domains_num: "4153",
//     backlinks_num: "707167",
//     first_seen: "1622510181",
//     last_seen: "1753149329",
//   },
//   {
//     anchor: "متواجد على app store",
//     domains_num: "1",
//     backlinks_num: "651525",
//     first_seen: "1706175993",
//     last_seen: "1753149241",
//   },
//   {
//     anchor: "https://apple.com",
//     domains_num: "1748",
//     backlinks_num: "214594",
//     first_seen: "1641575907",
//     last_seen: "1753149581",
//   },
// ];
