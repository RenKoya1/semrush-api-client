import { SemrushAPIClient } from "../client";

export type TargetType = "root_domain" | "domain" | "url";

export type ExportColumns =
  | "domain_ascore"
  | "domain_score"
  | "domain"
  | "backlinks_num"
  | "domain_trust_score"
  | "ip"
  | "country"
  | "first_seen"
  | "last_seen";

export type DisplaySort =
  | "domain_ascore_asc"
  | "domain_ascore_desc"
  | "backlinks_num_asc"
  | "backlinks_num_desc"
  | "last_seen_asc"
  | "last_seen_desc"
  | "first_seen_asc"
  | "first_seen_desc";
export async function getReferringDomains(
  this: SemrushAPIClient,
  {
    target,
    target_type = "domain",
    export_columns = [
      "domain_ascore",
      "domain_score",
      "domain",
      "backlinks_num",
      "domain_trust_score",
      "ip",
      "country",
      "first_seen",
      "last_seen",
    ],
    displaySort = "backlinks_num_desc",
    display_limit = 1000,
    outputObj = true,
  }: {
    target: string;
    target_type?: TargetType;
    export_columns?: ExportColumns[];
    displaySort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "backlinks_refdomains",
    target,
    target_type,
    display_sort: displaySort,
    display_limit,
    export_columns: export_columns.join(","),
  };

  return this.get<string | Record<string, string>[]>(
    this.ANALYTICS_URL + "v1/",
    params,
    outputObj
  );
}
