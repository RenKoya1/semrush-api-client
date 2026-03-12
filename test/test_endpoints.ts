import { client } from "./index";

async function testEndpoints() {
  console.log("Testing endpoints with small limits...");
  const limit = 2;
  const domain = "apple.com";
  const phrase = "seo";
  const database = "us";
  const url = "https://www.apple.com/";

  const tests = [
    {
      name: "getDomainOverview",
      fn: () => client.getDomainOverview({ domain, database }),
    },
    {
      name: "getDomainOrganicSearchKeywords",
      fn: () =>
        client.getDomainOrganicSearchKeywords({
          domain,
          database,
          displayLimit: limit,
        }),
    },
    {
      name: "getKeywordDifficulty",
      fn: () => client.getKeywordDifficulty({ phrases: [phrase, "marketing"] }),
    },
    {
      name: "getRelatedKeywords",
      fn: () =>
        client.getRelatedKeywords({ phrase, database, displayLimit: limit }),
    },
    {
      name: "getPhraseQuestions",
      fn: () =>
        client.getPhraseQuestions({ phrase, database, displayLimit: limit }),
    },
    {
      name: "getBroadMatchKeywords",
      fn: () =>
        client.getBroadMatchKeywords({ phrase, database, displayLimit: limit }),
    },
    {
      name: "getKeywordOrganic",
      fn: () =>
        client.getKeywordOrganic({ phrase, database, displayLimit: limit }),
    },
    {
      name: "getBacklinksOverview",
      fn: () => client.getBacklinksOverview({ target: domain, targetType: "domain" }),
    },
    {
      name: "getRankDifference",
      fn: () =>
        client.getRankDifference({
          domain,
          database,
          displayLimit: limit,
        }),
    },
    {
      name: "getUrlOverview",
      fn: () => client.getUrlOverview({ url, database }),
    },
    {
      name: "countApiUnits",
      fn: () => client.countApiUnits(),
    },
  ];

  for (const test of tests) {
    try {
      await test.fn();
      console.log(`✅ ${test.name} succeeded.`);
    } catch (e: any) {
      console.error(`❌ ${test.name} failed: ${e.message}`);
    }
  }
}

testEndpoints();
