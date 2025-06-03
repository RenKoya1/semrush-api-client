import { client } from "..";

client
  .getPhrase({
    phrase: "apple",
  })
  .then((data) => {
    console.log(data);
  });

// Keyword;Search Volume;CPC;Competition;Number of Results;Trends
// apple;5000000;0.19;0.66;9490000000;0.44,0.54,0.36,0.54,0.44,0.66,0.54,0.66,0.44,0.44,0.54,0.66
