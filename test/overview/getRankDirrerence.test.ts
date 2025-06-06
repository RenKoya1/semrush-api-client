import { client } from "..";

client
  .getRankDifference({
    domain: "wikipedia.org",
    display_limit: 5, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

// Domain;Rank;Organic Keywords;Organic Traffic;Organic Cost;Adwords Keywords;Adwords Traffic;Adwords Cost;Organic Keywords Difference;Organic Traffic Difference;Organic Cost Difference;Adwords Keywords Difference;Adwords Traffic Difference;Adwords Cost Difference
// wikipedia.org;1;83084012;1953530514;1766901500;98;6375;9285;469000;176196;-1008051;1;3;13
// sites-domme.com;82912;356281;17749;18861;0;0;0;329506;16924;18008;0;0;0
// namvideo.com;32556;996641;56717;37766;0;0;0;251320;9382;2923;0;0;0
// suziequimpertraiteur.com;83918;472690;17493;23327;0;0;0;173988;-11050;-12218;0;0;0
// pinterest.es;4684;4842602;531065;176004;0;0;0;155799;24012;-2499;0;0;0
