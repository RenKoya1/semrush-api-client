import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

type KeywordExportColumns =
  | "Po" // Position
  | "Pt" // Position type
  | "Dn" // Domain
  | "Ur" // URL
  | "Fk" // SERP features
  | "Fp" // Featured snippet
  | "Fl"; // SERP features list

export type KeywordOrganicDisplaySort =
  | "po_asc"
  | "po_desc"
  | "tr_asc"
  | "tr_desc";

export async function getKeywordOrganic(
  this: SemrushAPIClient,
  {
    phrase,
    exportColumns = ["Po", "Pt", "Dn", "Ur", "Fk", "Fp", "Fl"],
    database = "us",
    displayLimit = 10,
    displayOffset,
    displayDate,
    displaySort,
    displayFilter,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    phrase: string;
    exportColumns?: KeywordExportColumns[];
    displayDate?: string;
    database?: Database;
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: KeywordOrganicDisplaySort;
    displayFilter?: string;
    exportEscape?: 1;
    exportDecode?: 0 | 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "phrase_organic",
    export_columns: exportColumns.join(","),
    phrase,
    database,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_date: displayDate,
    display_sort: displaySort,
    display_filter: displayFilter,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
