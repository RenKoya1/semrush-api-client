import axios, { type AxiosInstance } from "axios";
import { getDomainRank } from "../domain/getDomainRank";
import { getPhraseAll } from "../keyword/getPhrase";
import { backlinksOverview } from "../backlinks/backlinksOverview";
import { getRankDifference } from "../overview/getRankDifference";

import { getSemrushRank } from "../overview/getSemrushRank";
export class SemrushAPIClient {
  private client: AxiosInstance;
  private api_key: string;

  public BASE_URL = "https://api.semrush.com/";
  public ANALYTICS_URL = "https://api.semrush.com/analytics/v1/";
  constructor({ api_key }: { api_key: string }) {
    this.api_key = api_key;
    this.client = axios.create({
      timeout: 5000,
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
        throw new Error(`API request failed: ${error.message}`);
      } else {
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  }

  public getDomainRank = getDomainRank;
  public getPhrase = getPhraseAll;
  public backlinksOverview = backlinksOverview;
  public getRankDifference = getRankDifference;
  public getSemrushRank = getSemrushRank;
}
