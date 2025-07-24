import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

export type ExportColumns =
  | "Ph"
  | "Nq"
  | "Cp"
  | "Co"
  | "Nr"
  | "Td"
  | "Fk"
  | "In"
  | "Kd";

export type DisplaySort =
  | "nq_asc"
  | "nq_desc"
  | "cp_asc"
  | "cp_desc"
  | "co_asc"
  | "co_desc"
  | "nr_asc"
  | "nr_desc"
  | "kd_asc"
  | "kd_desc";

export async function getBroadMatchKeywords(
  this: SemrushAPIClient,
  {
    phrase,
    export_columns = ["Ph", "Nq", "Cp", "Co", "Nr", "Td", "In", "Kd"],
    database = "us",
    displaySort = "nq_desc",
    display_limit = 1000,
    outputObj = true,
  }: {
    phrase: string;
    database?: Database;
    export_columns?: ExportColumns[];
    displaySort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_fullsearch",
    phrase,
    database,
    display_sort: displaySort,
    display_limit,
    export_columns: export_columns.join(","),
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL,
    params,
    outputObj
  );
}
