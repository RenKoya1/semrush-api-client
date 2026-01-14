import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

export type ExportColumns =
  | "Ph"
  | "Po"
  | "Pp"
  | "Nq"
  | "Cp"
  | "Co"
  | "Kd"
  | "Tr"
  | "Tg"
  | "Tc"
  | "Nr"
  | "Td"
  | "Fp"
  | "Fk"
  | "Ts"
  | "In"
  | "Pt";

export type DisplaySort =
  | "po_asc"
  | "po_desc"
  | "tg_asc"
  | "tg_desc"
  | "tr_asc"
  | "tr_desc"
  | "tc_asc"
  | "tc_desc"
  | "nq_asc"
  | "nq_desc";
export function getUrlOrganicSearchKeywords(
  this: SemrushAPIClient,
  {
    url,
    exportColumns = [
      "Ph",
      "Po",
      "Pp",
      "Nq",
      "Cp",
      "Co",
      "Kd",
      "Tr",
      "Tg",
      "Tc",
      "Nr",
      "Td",
      "Fp",
      "Fk",
      "Ts",
      "In",
      "Pt",
    ],
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
    url: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: DisplaySort;
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
    url,
    type: "url_organic",
    export_columns: exportColumns.join(","),
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
