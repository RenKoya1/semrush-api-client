import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

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
    exportColumns = [
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
    ],
    database = "us",
    displaySort,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    url: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displaySort?: DisplaySort;
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
    type: "url_rank",
    export_columns: exportColumns.join(","),
    database,
    display_sort: displaySort,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
