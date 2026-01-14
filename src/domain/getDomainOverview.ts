import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { ExportColumns } from "../type/general/exportColumns";
import { displayDateValidator } from "../utils/displayDateValidator";

export type DomainOverviewDisplaySort =
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

export async function getDomainOverview(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = [
      "Db",
      "Dt",
      "Dn",
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "Sh",
      "Sv",
      "FKn",
      "FPn",
      "Sr",
      "Srb",
      "St",
      "Stb",
      "Sc",
      "Srn",
      "Srl",
    ],
    database = "us",
    displayDate,
    displayLimit = 10,
    displayOffset,
    displaySort,
    exportEscape,
    outputObj = true,
  }: {
    domain: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayDate?: string; // Format: YYYYMM15
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: DomainOverviewDisplaySort;
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  if (displayDate && !displayDateValidator(displayDate)) {
    throw new Error("Invalid displayDate format. Format: YYYYMM15");
  }
  const params = {
    type: "domain_ranks",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_date: displayDate,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_sort: displaySort,
    export_escape: exportEscape,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
