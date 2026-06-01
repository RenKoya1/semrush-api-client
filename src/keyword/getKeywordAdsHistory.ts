import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

type KeywordExportColumns =
  | "Dn" // Domain
  | "Dt" // Date
  | "Po" // Position
  | "Ur" // URL
  | "Tt" // Title
  | "Ds" // Description
  | "Vu" // Visible URL
  | "At" // Ad type
  | "Ac" // Ad copy
  | "Ad"; // Advertiser

export async function getKeywordAdsHistory(
  this: SemrushAPIClient,
  {
    phrase,
    exportColumns = ["Dn", "Dt", "Po", "Ur", "Tt", "Ds", "Vu"],
    database = "us",
    displayLimit = 10,
    displayOffset,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrase: string;
    exportColumns?: KeywordExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_adwords_historical",
    export_columns: exportColumns.join(","),
    phrase,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
