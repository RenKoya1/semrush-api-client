import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

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

export async function getPhraseAll(
  this: SemrushAPIClient,
  {
    phrase,
    export_columns = ["Dt", "Db", "Ph", "Nq", "Cp", "Co", "Nr"],
    database = "us",
  }: {
    phrase: string;
    export_columns?: KeywordExportColumns[];
    database?: Database;
  }
): Promise<string> {
  const params = {
    type: "phrase_all",
    export_columns: export_columns.join(","),
    phrase,
    database,
  };

  return this.get<string>("", params);
}
