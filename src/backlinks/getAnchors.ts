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
    targetType = "domain",
    exportColumns = [
      "anchor",
      "domains_num",
      "backlinks_num",
      "first_seen",
      "last_seen",
    ],
    displaySort = "backlinks_num_desc",
    displayLimit = 10,
    displayOffset,
    exportEscape,
    outputObj = true,
  }: {
    target: string;
    targetType?: AnchorsTargetType;
    exportColumns?: AnchorsExportColumns[];
    displaySort?: DisplaySort;
    displayLimit?: number;
    displayOffset?: number;
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks_anchors",
    target,
    target_type: targetType,
    display_sort: displaySort,
    display_limit: displayLimit,
    display_offset: displayOffset,
    export_escape: exportEscape,
    export_columns: exportColumns.join(","),
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "v1/",
    params,
    outputObj
  );
}
