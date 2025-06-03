import { client } from "..";

client
  .backlinksOverview({
    target: "apple.com",
    target_type: "domain", // Optional, default is "domain"
  })
  .then((data) => {
    console.log(data);
  });

//   ascore;total;domains_num;urls_num;ips_num;ipclassc_num;follows_num;nofollows_num;sponsored_num;ugc_num;texts_num;images_num;forms_num;frames_num
// 100;42180508;93399;41856201;65337;26013;2689851;39663181;236;6589;41775237;509186;5;3120
