import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

type ExportColumns = "Tt" | "Ds" | "Vu" | "Ur" | "Pc" | "Un";

export type AdsCopiesDisplaySort =
  | "tr_asc"
  | "tr_desc"
  | "tc_asc"
  | "tc_desc";

export async function getAdsCopies(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = ["Tt", "Ds", "Vu", "Ur", "Pc", "Un"],
    database = "us",
    displayLimit = 10,
    displayOffset,
    displaySort,
    displayFilter,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    domain: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: AdsCopiesDisplaySort;
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
    type: "domain_adwords_unique",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_sort: displaySort,
    display_filter: displayFilter,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
