import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
type ExportColumns =
  | "Dn"
  | "Rk"
  | "Or"
  | "Ot"
  | "Oc"
  | "Ad"
  | "At"
  | "Ac"
  | "Sr"
  | "St"
  | "Sc";

export async function getSemrushRank(
  this: SemrushAPIClient,

  {
    export_columns = ["Dn", "Rk", "Or", "Ot", "Oc", "Ad", "At", "Ac"],
    database = "us",
    display_limit = 10,
    outputObj = true,
  }: {
    export_columns?: ExportColumns[];
    database?: Database;
    display_limit?: number;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "rank",
    export_columns: export_columns.join(","),
    database,
    display_limit,
  };

  return this.get<Record<string, string>[]>(this.BASE_URL, params, outputObj);
}
