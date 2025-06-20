import { client } from "..";

client
  .getDomainOrganic({
    domain: "apple.com",
    display_limit: 5, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

//   Keyword;Position;Previous Position;Position Difference;Search Volume;CPC;Url;Traffic (%);Traffic Cost (%);Competition;Number of Results;Trends
// seo;9;10;1;110000;14.82;http://www.seobook.com/;17.53;44.40;0.50;0;0.81,1.00,1.00,1.00,1.00,0.81,0.81,0.81,0.81,0.81,0.81,0.81
// seobook;1;1;0;1300;4.54;http://www.seobook.com/;5.52;4.28;0.32;379000;0.62,0.81,0.62,0.81,0.81,0.62,0.62,0.81,0.81,0.62,1.00,0.81
// seo tools;6;6;0;8100;10.54;http://tools.seobook.com/;2.15;3.87;0.54;321000000;0.67,0.82,0.82,1.00,0.82,0.82,0.67,0.67,0.67,0.67,0.82,0.82
// seo basics;2;2;0;1600;6.84;http://www.seobook.com/learn-seo/seo-basics/;1.10;1.29;0.22;42500000;0.81,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00,0.81,1.00,0.81
// seo book keyword tool;1;1;0;110;16.73;http://tools.seobook.com/keyword-tools/seobook/;0.46;1.33;0.34;5340000;0.41,0.41,0.52,0.52,0.65,0.82,0.65,1.00,1.00,0.82,0.65,0.41
// seo book keyword density;1;1;0;110;6.64;http://tools.seobook.com/general/keyword-density/;0.46;0.53;0.15;539000;0.14,0.43,0.43,0.33,0.33,0.24,0.52,0.67,0.81,0.81,1.00,1.00
// free seo tools;6;6;0;1600;7.18;http://tools.seobook.com/;0.42;0.52;0.60;204000000;0.68,0.84,1.00,1.00,1.00,0.84,0.84,1.00,1.00,0.84,1.00,0.84
// learn seo;8;8;0;1900;7.76;http://www.seobook.com/learn-seo/;0.30;0.40;0.47;396000000;0.67,0.79,0.79,0.79,0.79,0.79,1.00,0.79,0.79,0.67,0.79,0.67
// aaron seo;1;1;0;70;0.00;http://www.seobook.com/;0.29;0.00;0.03;16300000;0.22,0.56,0.11,0.44,0.11,0.11,0.11,0.33,0.11,1.00,0.78,0.22
// seo book keyword suggestion tool free download;1;1;0;70;0.00;http://tools.seobook.com/;0.29;0.00;0.14;775000;0.29,1.00,0.00,0.43,0.00,0.00,0.14,0.00,0.14,0.00,0.00,0.43
