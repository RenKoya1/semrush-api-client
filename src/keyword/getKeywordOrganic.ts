import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

type KeywordExportColumns =
  | "Po" // Position
  | "Pt" // Position type
  | "Dn" // Domain
  | "Ur" // URL
  | "Fk" // SERP features
  | "Fp" // Featured snippet
  | "Fl"; // SERP features list

export async function getKeywordOrganic(
  this: SemrushAPIClient,

  {
    phrase,
    export_columns = ["Po", "Pt", "Dn", "Ur", "Fk", "Fp", "Fl"],
    database = "us",
    outputObj = true, // Default to true for output object
    display_limit = 10,
  }: {
    display_limit?: number;
    phrase: string;
    export_columns?: KeywordExportColumns[];
    database?: Database;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_organic",
    export_columns: export_columns.join(","),
    phrase,
    database,
    display_limit,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
