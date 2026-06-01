import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { ExportColumns } from "../type/general/exportColumns";
import { displayDateValidator } from "../utils/displayDateValidator";

export type DomainOverviewOneDatabaseDisplaySort =
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

// Domain Overview (one database) — type=domain_rank. "database" is required.
export async function getDomainOverviewOneDatabase(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = [
      "Dn",
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
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
    displaySort,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    domain: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayDate?: string; // Format: YYYYMM15
    displaySort?: DomainOverviewOneDatabaseDisplaySort;
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  if (displayDate && !displayDateValidator(displayDate)) {
    throw new Error("Invalid displayDate format. Format: YYYYMM15");
  }
  const params = {
    type: "domain_rank",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_date: displayDate,
    display_sort: displaySort,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
