import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { ExportColumns } from "../type/general/exportColumns";

export type DomainOverviewHistoryDisplaySort = "dt_asc" | "dt_desc";

// Domain Overview (history) — type=domain_rank_history. "database" is required.
export async function getDomainOverviewHistory(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = [
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "Dt",
      "FKn",
      "FPn",
      "Sr",
      "Srb",
      "St",
      "Stb",
      "Sc",
    ],
    database = "us",
    displayLimit = 10,
    displayOffset,
    displaySort,
    displayDaily,
    exportEscape,
    outputObj = true,
  }: {
    domain: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: DomainOverviewHistoryDisplaySort;
    displayDaily?: 1; // last 31 days of daily data
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "domain_rank_history",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_sort: displaySort,
    display_daily: displayDaily,
    export_escape: exportEscape,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
