import { client } from "..";

client
  .getDomainPaidSearchKeywords({
    domain: "apple.com",
    display_limit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

//   Keyword;Position;Previous Position;Position Difference;Search Volume;CPC;Visible Url;Traffic (%);Traffic Cost;Competition;Number of Results;Trends
//   g tube pads amazon;1;1;0;30;0.36;www.ebay.com/;0.00;0;0.88;3130000;0.14,0.14,0.43,0.14,0.71,0.14,0.57,0.14,1.00,0.14,0.14,0.14
//   13.8 v power supply;1;1;0;140;1.24;www.ebay.com/;0.00;8;1.00;9750000;0.82,0.82,0.52,1.00,0.82,0.65,0.65,0.65,0.82,0.82,0.82,1.00
//   ruger 22 250 magazine;1;1;0;10;0.02;www.ebay.com/22+250+magazine;0.00;0;0.64;1370000;1.00,0.60,0.80,0.40,0.20,0.20,0.20,0.20,0.20,0.20,0.20,0.40
//   nike roshe run woven rainbow buy online;1;1;0;50;0.00;www.ebay.com/;0.00;0;0.00;34;0.00,0.00,0.00,0.00,0.00,0.00,0.00,1.00,0.00,0.00,0.00,0.00
//   wildside under the influence vinyl;1;1;0;30;0.00;;0.00;0;0.00;83;0.11,0.11,1.00,0.11,0.33,0.22,0.00,0.11,0.00,0.11,0.11,0.11
//   rca 45 record player;1;1;0;10;0.20;www.ebay.com/;0.00;0;1.00;1170000;0.03,0.13,0.03,0.08,0.03,0.03,0.03,0.08,0.03,0.18,0.18,1.00
//   uber store;1;1;0;720;2.43;www.ebay.com/Uber+store;0.00;82;0.52;149000000;0.67,0.82,0.55,0.67,0.67,0.67,0.82,1.00,0.82,0.82,0.82,0.82
//   mouse maze for sale;1;1;0;40;0.16;;0.00;0;1.00;7410000;1.00,0.50,0.50,1.00,0.50,0.50,0.50,1.00,0.50,0.50,0.50,1.00
//   air britain;1;1;0;140;0.64;www.ebay.com/;0.00;4;0.08;64200000;1.00,1.00,1.00,1.00,0.82,0.82,0.82,1.00,0.82,0.82,0.82,0.53
//   esoterica stonehaven;1;1;0;140;0.02;;0.00;0;0.08;67;0.81,0.81,0.35,0.65,0.42,0.27,0.27,0.35,0.54,0.54,1.00,0.54
