import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
type ExportColumns = "Ph" | "Kd";

export async function getKeywordDifficulty(
  this: SemrushAPIClient,
  {
    phrases,
    exportColumns = ["Ph", "Kd"],
    database = "us",
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrases: string[];
    exportColumns?: ExportColumns[];
    database?: Database;
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_kdi",
    export_columns: exportColumns.join(","),
    phrase: phrases.join(";"),
    database,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
