import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

export type ExportColumns =
  | "Dn"
  | "Or"
  | "Xn"
  | "Ot"
  | "Oc"
  | "Ad"
  | "At"
  | "Ac"
  | "FKn"
  | "FPn"
  | "Ipu"
  | "Ip0"
  | "Ip1"
  | "Ip2"
  | "Ip3"
  | "Itu"
  | "It0"
  | "It1"
  | "It2"
  | "It3"
  | "Icu"
  | "Ic0"
  | "Ic1"
  | "Ic2"
  | "Ic3"
  | "Sr"
  | "Srb"
  | "St"
  | "Stb"
  | "Sc"
  | "Srn"
  | "Srl"
  | "Rk";

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
  | "nq_desc"
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
export function getUrlOverview(
  this: SemrushAPIClient,

  {
    url,
    export_columns = [
      "Dn",
      "Or",
      "Xn",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "FKn",
      "FPn",
      "Ipu",
      "Ip0",
      "Ip1",
      "Ip2",
      "Ip3",
      "Itu",
      "It0",
      "It1",
      "It2",
      "It3",
      "Icu",
      "Ic0",
      "Ic1",
      "Ic2",
      "Ic3",
      "Sr",
      "Srb",
      "St",
      "Stb",
      "Sc",
      "Srn",
      "Srl",
      "Rk",
    ], // Default export columns
    database = "us",
    outputObj = true, // Default to true for output object
    display_sort,
  }: {
    url: string;
    export_columns?: ExportColumns[];
    database?: Database;
    outputObj?: boolean;
    display_sort?: DisplaySort;
  }
): Promise<Record<string, string>[]> {
  const params = {
    url,
    type: "url_rank",
    export_columns: export_columns.join(","),
    database,
    display_sort,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
