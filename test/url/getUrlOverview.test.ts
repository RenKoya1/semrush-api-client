import { client } from "..";

client
  .getUrlOverview({
    url: "https://developer.semrush.com/api/v3/analytics/url-reports/",
  })
  .then((data) => {
    console.log(data);
  });

//   [
//     {
//       domain: 'semrush.com',
//       organic_keywords: '23',
//       organic_traffic: '0',
//       organic_cost: '0',
//       adwords_keywords: '0',
//       adwords_traffic: '0',
//       adwords_cost: '0',
//       intent_unknown_positions: '0',
//       intent_commercial_positions: '1',
//       intent_informational_positions: '22',
//       intent_navigational_positions: '1',
//       intent_transactional_positions: '0',
//       intent_unknown_traffic: '0',
//       intent_commercial_traffic: '0',
//       intent_informational_traffic: '0',
//       intent_navigational_traffic: '0',
//       intent_transactional_traffic: '0',
//       intent_unknown_traffic_cost: '0',
//       intent_commercial_traffic_cost: '0',
//       intent_informational_traffic_cost: '0',
//       intent_navigational_traffic_cost: '0',
//       intent_transactional_traffic_cost: '0',
//       serp_features_positions: '0',
//       serp_features_positions_branded: '0',
//       serp_features_traffic: '0',
//       serp_features_traffic_branded: '0',
//       serp_features_traffic_cost: '0',
//       serp_features_positions_new: '0',
//       serp_features_positions_lost: '0',
//       rank: '0'
//     }
//   ]
