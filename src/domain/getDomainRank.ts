import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { ExportColumns } from "../type/general/exportColumns";

export async function getDomainRank(
  this: SemrushAPIClient,
  {
    domain,
    export_columns = ["Dn", "Or", "Rk", "Ot", "Oc"],
    database = "us",
    display_limit = 1000,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    database?: Database;
    display_limit?: number;
  }
): Promise<string> {
  const params = {
    type: "domain_ranks",
    export_columns: export_columns.join(","),
    domain,
    database,
    display_limit,
  };

  return this.get<string>("", params);
}
