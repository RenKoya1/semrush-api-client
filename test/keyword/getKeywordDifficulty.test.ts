import { client } from "..";

client
  .getKeywordDifficulty({
    phrases: ["ebay", "seo"],
  })
  .then((data) => {
    console.log(data);
  });

//   Keyword;Keyword Difficulty Index

// ebay;95.10

// seo;78.35
