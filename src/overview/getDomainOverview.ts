import { SemrushAPIClient } from "../client";
import { Database } from "../type/general/database";
import { ExportColumns } from "../type/general/exportColumns";

export async function getDomainOverview(
  this: SemrushAPIClient,
  {
    domain,
    export_columns = [
      "Db",
      "Dt",
      "Dn",
      "Rk",
      "Or",
      "Ot",
      "Oc",
      "Ad",
      "At",
      "Ac",
      "Sh",
      "Sv",
      "FKn",
      "FPn",
      "Sr",
      "Srb",
      "St",
      "Stb",
      "Sc",
      "Srn",
      "Srl",
    ],
    database,
    display_limit = 1000,
    outputObj = true,
  }: {
    domain: string;
    export_columns?: ExportColumns[];
    database?: Database;
    display_limit?: number;
    outputObj?: boolean;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "domain_ranks",
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
