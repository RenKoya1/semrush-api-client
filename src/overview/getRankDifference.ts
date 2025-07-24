import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
type ExportColumns =
  | "Db"
  | "Dt"
  | "Dn"
  | "Rk"
  | "Or"
  | "Ot"
  | "Oc"
  | "Ad"
  | "At"
  | "Ac"
  | "Sh"
  | "Sv"
  | "FKn"
  | "FPn"
  | "Sr"
  | "Srb"
  | "St"
  | "Stb"
  | "Sc"
  | "Srn"
  | "Srl";

export async function getRankDifference(
  this: SemrushAPIClient,

  {
    domain,
    export_columns = [
      "Db",
      "Dn",
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "Sh",
    ],
    database = "us",
    display_limit = 1000,
    outputObj = true,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    database?: Database;
    display_limit?: number;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "rank_difference",
    export_columns: export_columns.join(","),
    domain,
    database,
    display_limit,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
