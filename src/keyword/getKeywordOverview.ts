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
  | "Td" // Trend
  | "In" // Intent
  | "Kd"; // Keyword difficulty

export async function getKeywordOverview(
  this: SemrushAPIClient,
  {
    type = "phrase_this",
    phrase,
    exportColumns,
    database = type === "phrase_this" ? "us" : undefined,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    type?: "phrase_all" | "phrase_this";
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
  // Set default export columns dynamically based on the requested report type
  // Default columns per API documentation
  const finalExportColumns = exportColumns
    ? exportColumns
    : type === "phrase_all"
    ? ["Dt", "Db", "Ph", "Nq", "Cp", "Co", "Nr", "In", "Kd"]
    : ["Ph", "Nq", "Cp", "Co", "Nr", "Td", "In", "Kd"];

  const params = {
    type,
    export_columns: finalExportColumns.join(","),
    phrase,
    ...(type === "phrase_this" && database ? { database } : {}),
    ...(type === "phrase_all" && database ? { database } : {}), // Optional filter for phrase_all
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
