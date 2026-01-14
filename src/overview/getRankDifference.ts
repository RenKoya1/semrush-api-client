import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";
type ExportColumns =
  | "Db"
  | "Dt"
  | "Dn"
  | "Rk"
  | "Or"
  | "Ot"
  | "Oc"
  | "Ad"
  | "At"
  | "Ac"
  | "Sh"
  | "Sv"
  | "FKn"
  | "FPn"
  | "Sr"
  | "Srb"
  | "St"
  | "Stb"
  | "Sc"
  | "Srn"
  | "Srl";

export type RankDifferenceDisplaySort =
  | "rk_asc"
  | "rk_desc"
  | "or_asc"
  | "or_desc"
  | "ot_asc"
  | "ot_desc"
  | "oc_asc"
  | "oc_desc"
  | "ad_asc"
  | "ad_desc"
  | "at_asc"
  | "at_desc"
  | "ac_asc"
  | "ac_desc";

export async function getRankDifference(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = [
      "Db",
      "Dn",
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "Sh",
    ],
    database = "us",
    displayLimit = 1000,
    displayOffset,
    displaySort,
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
    displaySort?: RankDifferenceDisplaySort;
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
    type: "rank_difference",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_sort: displaySort,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
