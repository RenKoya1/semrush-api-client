import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";
type ExportColumns =
  | "Dn"
  | "Rk"
  | "Or"
  | "Ot"
  | "Oc"
  | "Ad"
  | "At"
  | "Ac"
  | "Sr"
  | "St"
  | "Sc";

export async function getSemrushRank(
  this: SemrushAPIClient,
  {
    exportColumns = ["Dn", "Rk", "Or", "Ot", "Oc", "Ad", "At", "Ac"],
    database = "us",
    displayLimit = 10,
    displayOffset,
    displayFilter,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    exportColumns?: ExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    displayFilter?: string;
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
    type: "rank",
    export_columns: exportColumns.join(","),
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_filter: displayFilter,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
