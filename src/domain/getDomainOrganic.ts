import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

type ExportColumns =
  | "Ph" // Phrase
  | "Po" // Position
  | "Pp" // Paid position
  | "Pd" // Paid difficulty
  | "Nq" // Number of queries
  | "Cp" // Cost per click
  | "Ur" // URL
  | "Tr" // Traffic
  | "Tg" // Traffic cost
  | "Tc" // Total traffic cost
  | "Co" // Competition
  | "Nr" // Number of results
  | "Td" // Total difficulty
  | "Kd" // Keyword difficulty
  | "Fp" // Featured position
  | "Fk" // Featured keyword
  | "Ts" // Total search
  | "In" // Intent
  | "Pt"; // Paid traffic

type displayPositions = "new" | "lost" | "rise" | "fall";

type displayPositionType = "organic" | "all" | "serp_features";

export async function getDomainOrganic(
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
      "Ur",
      "Tr",
      "Tc",
      "Co",
      "Nr",
      "Td",
    ],
    database,
    displayPosition,
    displayPositionsType,
    display_limit = 1000,
    outputObj = true,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    displayPosition?: displayPositions;
    database?: Database;
    outputObj?: boolean;
    displayPositionsType?: displayPositionType;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "domain_organic",
    export_columns: export_columns.join(","),
    domain,
    database,
    display_position: displayPosition,
    display_positions_type: displayPositionsType,
    display_limit,
  };

  return this.get<string | Record<string, string>[]>(
    this.BASE_URL,
    params,
    outputObj
  );
}
