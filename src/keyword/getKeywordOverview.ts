import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

type KeywordExportColumns =
  | "Dt" // Date
  | "Db" // Database
  | "Ph" // Phrase
  | "Nq" // Number of queries
  | "Cp" // Cost per click
  | "Co" // Competition
  | "Nr" // Number of results
  | "In" // Intent
  | "Kd"; // Keyword difficulty

export async function getKeywordOverview(
  this: SemrushAPIClient,
  {
    phrase,
    exportColumns = ["Dt", "Db", "Ph", "Nq", "Cp", "Co", "Nr", "In", "Kd"],
    database = "us",
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrase: string;
    exportColumns?: KeywordExportColumns[];
    database?: Database;
    displayDate?: string; // Format: YYYYMM15
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  if (displayDate && !displayDateValidator(displayDate)) {
    throw new Error("Invalid displayDate format. Format: YYYYMM15");
  }
  const params = {
    type: "phrase_all",
    export_columns: exportColumns.join(","),
    phrase,
    database,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
