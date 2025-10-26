import axios, { type AxiosInstance } from "axios";
import {
  getDomainOverview,
  getDomainOrganicSearchKeywords,
  getDomainPaidSearchKeywords,
  getAdsCopies,
} from "../domain";
import {
  getKeywordOverview,
  getKeywordDifficulty,
  getRelatedKeywords,
  getPhraseQuestions,
  getBroadMatchKeywords,
  getKeywordOrganic,
} from "../keyword";
import {
  getBacklinksOverview,
  getBacklinks,
  getAnchors,
  getIndexedPages,
  getReferringDomains,
} from "../backlinks";
import { getRankDifference, getSemrushRank } from "../overview";
import { getTrafficSummary } from "../trend";
import {
  getUrlOverview,
  getUrlOrganicSearchKeywords,
  getUrlPaidSearchKeywords,
} from "../url";
export class SemrushAPIClient {
  private client: AxiosInstance;
  private api_key: string;

  public BASE_URL = "https://api.semrush.com/";
  public ANALYTICS_URL = "https://api.semrush.com/analytics/";
  constructor({ api_key }: { api_key: string }) {
    this.api_key = api_key;
    this.client = axios.create({
      timeout: 14000,
    });
  }

  public parseCsvToObjects(
    csvString: string,
    delimiter: string = ";"
  ): Record<string, string>[] {
    const [headerLine, ...lines] = csvString.trim().split("\n");

    const headers = headerLine
      .split(delimiter)
      .map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));

    return lines.map((line) => {
      const values = line.split(delimiter);
      const obj: Record<string, string> = {};
      headers.forEach((key, i) => {
        obj[key] = values[i]?.trim() ?? "";
      });
      return obj;
    });
  }

  public async get<T>(
    url: string,
    params?: Record<string, any>,
    outputObj: boolean = true
  ): Promise<T> {
    const allParams = { ...params, key: this.api_key };
    try {
      const response = await this.client.get<T>(url, { params: allParams });

      if (outputObj) {
        return this.parseCsvToObjects(response.data as string) as T;
      } else {
        return response.data as T;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `API request failed: ${error.message}${
            error.code ? ` (code: ${error.code})` : ""
          }${
            error.response?.status ? ` (status: ${error.response.status})` : ""
          }`
        );
      } else {
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  }

  // Domain methods
  public getDomainOverview = getDomainOverview;
  public getDomainOrganicSearchKeywords = getDomainOrganicSearchKeywords;
  public getDomainPaidSearchKeywords = getDomainPaidSearchKeywords;
  public getAdsCopies = getAdsCopies;

  // Keyword methods
  public getKeywordOverview = getKeywordOverview;
  public getKeywordDifficulty = getKeywordDifficulty;
  public getRelatedKeywords = getRelatedKeywords;
  public getPhraseQuestions = getPhraseQuestions;
  public getBroadMatchKeywords = getBroadMatchKeywords;
  public getKeywordOrganic = getKeywordOrganic;

  // Backlinks methods
  public getBacklinksOverview = getBacklinksOverview;
  public getBacklinks = getBacklinks;
  public getAnchors = getAnchors;
  public getIndexedPages = getIndexedPages;
  public getReferringDomains = getReferringDomains;

  // Overview methods
  public getRankDifference = getRankDifference;
  public getSemrushRank = getSemrushRank;

  // Trend methods
  public getTrafficSummary = getTrafficSummary;

  // URL methods
  public getUrlOverview = getUrlOverview;
  public getUrlOrganicSearchKeywords = getUrlOrganicSearchKeywords;
  public getUrlPaidSearchKeywords = getUrlPaidSearchKeywords;
}
