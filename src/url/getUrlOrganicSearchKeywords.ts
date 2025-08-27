import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

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
    export_columns = [
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
    outputObj = true,
    display_limit = 10,
    display_sort,
  }: {
    url: string;
    export_columns?: ExportColumns[];
    database?: Database;
    outputObj?: boolean;
    display_limit?: number;
    display_sort?: DisplaySort;
  }
): Promise<Record<string, string>[]> {
  const params = {
    url,
    type: "url_organic",
    export_columns: export_columns.join(","),
    database,
    display_limit,
    display_sort,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
