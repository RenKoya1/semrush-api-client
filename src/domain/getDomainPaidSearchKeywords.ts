import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { displayDateValidator } from "../utils/displayDateValidator";

type ExportColumns =
  | "Ph" // Phrase
  | "Po" // Position
  | "Pp" // Paid position
  | "Pd" // Paid difficulty
  | "Ab" // Ad position
  | "Nq" // Number of queries
  | "Cp" // Cost per click
  | "Ur" // URL
  | "Tr" // Traffic
  | "Tg" // Traffic cost
  | "Tc" // Total traffic cost
  | "Co" // Competition
  | "Nr" // Number of results
  | "Td" // Total difficulty
  | "Tt" // Total traffic
  | "Ds" // Display position
  | "Vu" // Volume
  | "Ur" // URL
  | "Ts" // Total search
  | "Un"; // Unique visitors

type displayPositions = "new" | "lost" | "rise" | "fall";

export type DomainPaidDisplaySort =
  | "po_asc"
  | "po_desc"
  | "tr_asc"
  | "tr_desc"
  | "tc_asc"
  | "tc_desc"
  | "nq_asc"
  | "nq_desc"
  | "cp_asc"
  | "cp_desc"
  | "co_asc"
  | "co_desc";

export async function getDomainPaidSearchKeywords(
  this: SemrushAPIClient,
  {
    domain,
    exportColumns = [
      "Ph",
      "Po",
      "Pp",
      "Pd",
      "Nq",
      "Cp",
      "Vu",
      "Tr",
      "Tc",
      "Co",
      "Nr",
      "Td",
    ],
    database = "us",
    displayPosition,
    displayLimit = 1000,
    displayOffset,
    displaySort,
    displayFilter,
    displayDate,
    exportEscape,
    exportDecode,
    outputObj = true,
  }: {
    domain: string;
    exportColumns?: ExportColumns[];
    database?: Database;
    displayPosition?: displayPositions;
    displayLimit?: number;
    displayOffset?: number;
    displaySort?: DomainPaidDisplaySort;
    displayFilter?: string;
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
    type: "domain_adwords",
    export_columns: exportColumns.join(","),
    domain,
    database,
    display_position: displayPosition,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_sort: displaySort,
    display_filter: displayFilter,
    display_date: displayDate,
    export_escape: exportEscape,
    export_decode: exportDecode,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
