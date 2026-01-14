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
    targetType = "domain",
    exportColumns = [
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
    displayLimit = 10,
    displayOffset,
    displayFilter,
    exportEscape,
    outputObj = true,
  }: {
    target: string;
    targetType?: TargetType;
    exportColumns?: ExportColumns[];
    displaySort?: DisplaySort;
    displayLimit?: number;
    displayOffset?: number;
    displayFilter?: string;
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks_refdomains",
    target,
    target_type: targetType,
    display_sort: displaySort,
    display_limit: displayLimit,
    display_offset: displayOffset,
    display_filter: displayFilter,
    export_escape: exportEscape,
    export_columns: exportColumns.join(","),
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "v1/",
    params,
    outputObj
  );
}
