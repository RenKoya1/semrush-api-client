import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

export type ExportColumns =
  | "Ph"
  | "Po"
  | "Nq"
  | "Cp"
  | "Co"
  | "Tg"
  | "Tr"
  | "Tc"
  | "Nr"
  | "Td"
  | "Tt"
  | "Ds"
  | "Ts";

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

export function getUrlPaidSearchKeywords(
  this: SemrushAPIClient,
  {
    url,
    export_columns = [
      "Ph",
      "Po",
      "Nq",
      "Cp",
      "Co",
      "Tg",
      "Tr",
      "Tc",
      "Nr",
      "Td",
      "Tt",
      "Ds",
      "Ts",
    ],
    database = "us",
    display_sort,
    outputObj = true,
    display_limit = 10,
  }: {
    url: string;
    export_columns?: ExportColumns[];
    database?: Database;
    display_sort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<Record<string, string>[]> {
  const params = {
    url,
    type: "url_adwords",
    export_columns: export_columns.join(","),
    database,
    display_sort,
    display_limit,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
