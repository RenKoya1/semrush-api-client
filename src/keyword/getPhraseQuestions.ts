import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

export type ExportColumns =
  | "Ph"
  | "Nq"
  | "Cp"
  | "Co"
  | "Nr"
  | "Td"
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

export async function getPhraseQuestions(
  this: SemrushAPIClient,
  {
    phrase,
    exportColumns = ["Ph", "Nq", "Cp", "Co", "Nr", "Td", "In", "Kd"],
    database = "us",
    displaySort = "nq_desc",
    displayLimit = 10,
    displayOffset,
    displayFilter,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrase: string;
    database?: Database;
    exportColumns?: ExportColumns[];
    displaySort?: DisplaySort;
    displayLimit?: number;
    displayOffset?: number;
    displayFilter?: string;
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_questions",
    phrase,
    database,
    display_sort: displaySort,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_filter: displayFilter,
    export_escape: exportEscape,
    export_decode: exportDecode,
    export_columns: exportColumns.join(","),
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL,
    params,
    outputObj
  );
}
