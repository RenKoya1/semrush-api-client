import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

type KeywordExportColumns =
  | "Dn" // Domain
  | "Ur" // URL
  | "Vu"; // Visible URL

export async function getKeywordPaidResults(
  this: SemrushAPIClient,
  {
    phrase,
    exportColumns = ["Dn", "Ur", "Vu"],
    database = "us",
    displayLimit = 10,
    displayOffset,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrase: string;
    exportColumns?: KeywordExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
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
    type: "phrase_adwords",
    export_columns: exportColumns.join(","),
    phrase,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
