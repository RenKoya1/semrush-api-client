import axios, { type AxiosInstance } from "axios";
import { getDomainRank } from "../domain/getDomainRank";
import { getPhraseAll } from "../keyword/getPhrase";

export class SemrushAPIClient {
  private client: AxiosInstance;
  private api_key: string;

  private BASE_URL = "https://api.semrush.com/";
  constructor({ api_key }: { api_key: string }) {
    this.api_key = api_key;
    this.client = axios.create({
      baseURL: this.BASE_URL,
      timeout: 5000,
    });
  }

  public async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const allParams = { ...params, key: this.api_key };
    const response = await this.client.get<T>(url, { params: allParams });

    return response.data;
  }

  public getDomainRank = getDomainRank;
  public getPhrase = getPhraseAll;
}
