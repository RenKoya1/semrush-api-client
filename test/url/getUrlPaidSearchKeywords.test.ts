import { client } from "..";

client
  .getUrlPaidSearchKeywords({
    url: "https://developer.semrush.com/api/v3/analytics/url-reports/",
    displayLimit: 4,
  })
  .then((data) => {
    console.log(data);
  });
