import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";

type ExportColumns = "Tt" | "Ds" | "Vu" | "Ur" | "Pc" | "Un";

export async function getAdsCopies(
  this: SemrushAPIClient,

  {
    domain,
    export_columns = ["Tt", "Ds", "Vu", "Ur", "Pc", "Un"],
    database,
    display_limit = 1000,
    outputObj = true,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    database?: Database;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "domain_adwords_unique",
    export_columns: export_columns.join(","),
    domain,
    database,
    display_limit,
  };

  return this.get<string | Record<string, string>[]>(
    this.BASE_URL,
    params,
    outputObj
  );
}
