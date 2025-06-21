import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
type ExportColumns = "Ph" | "Kd";

export async function getKeywordDifficulty(
  this: SemrushAPIClient,

  {
    phrases,
    export_columns = ["Ph", "Kd"],
    database = "us",
    outputObj = true, // Default to true for output object
  }: {
    phrases: string[];
    export_columns?: ExportColumns[];
    database?: Database;
    outputObj?: boolean;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "phrase_kdi",
    export_columns: export_columns.join(","),
    phrase: phrases.join(";"),
    database,
  };

  return this.get<string | Record<string, string>[]>(
    this.BASE_URL,
    params,
    outputObj
  );
}
