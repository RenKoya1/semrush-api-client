import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

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

export async function getDomainPaidSearchKeywords(
  this: SemrushAPIClient,

  {
    domain,
    export_columns = [
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
    database,
    displayPosition,
    display_limit = 1000,
    outputObj = true,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    displayPosition?: displayPositions;
    database?: Database;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "domain_adwords",
    export_columns: export_columns.join(","),
    domain,
    database,
    display_position: displayPosition,
    display_limit,
  };

  return this.get<string | Record<string, string>[]>(
    this.BASE_URL,
    params,
    outputObj
  );
}
