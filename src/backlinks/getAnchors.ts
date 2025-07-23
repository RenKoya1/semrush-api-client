import { SemrushAPIClient } from "../client";

export type AnchorsTargetType = "root_domain" | "domain" | "url";

export type AnchorsExportColumns =
  | "anchor"
  | "domains_num"
  | "backlinks_num"
  | "first_seen"
  | "last_seen";

export type DisplaySort =
  | "page_ascore_asc"
  | "page_ascore_desc"
  | "domains_num_asc"
  | "domains_num_desc"
  | "backlinks_num_asc"
  | "backlinks_num_desc"
  | "first_seen_asc"
  | "first_seen_desc"
  | "last_seen_asc"
  | "last_seen_desc";
export async function getAnchors(
  this: SemrushAPIClient,
  {
    target,
    target_type = "domain",
    export_columns = [
      "anchor",
      "domains_num",
      "backlinks_num",
      "first_seen",
      "last_seen",
    ],
    displaySort = "backlinks_num_desc",
    display_limit = 1000,
    outputObj = true,
  }: {
    target: string;
    target_type?: AnchorsTargetType;
    export_columns?: AnchorsExportColumns[];
    displaySort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "backlinks_anchors",
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
