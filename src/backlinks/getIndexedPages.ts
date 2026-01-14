import { SemrushAPIClient } from "../client";

export type IndexedPageTargetType = "root_domain" | "domain" | "url";

export type ExportColumns =
  | "source_url"
  | "source_title"
  | "response_code"
  | "backlinks_num"
  | "domains_num"
  | "last_seen"
  | "external_num"
  | "internal_num";

export type DisplaySort =
  | "backlinks_num_asc"
  | "backlinks_num_desc"
  | "domains_num_asc"
  | "domains_num_desc"
  | "last_seen_asc"
  | "last_seen_desc";
export async function getIndexedPages(
  this: SemrushAPIClient,
  {
    target,
    targetType = "domain",
    exportColumns = [
      "source_url",
      "source_title",
      "response_code",
      "backlinks_num",
      "domains_num",
      "last_seen",
      "external_num",
      "internal_num",
    ],
    displaySort = "backlinks_num_desc",
    displayLimit = 10,
    displayOffset,
    exportEscape,
    outputObj = true,
  }: {
    target: string;
    targetType?: IndexedPageTargetType;
    exportColumns?: ExportColumns[];
    displaySort?: DisplaySort;
    displayLimit?: number;
    displayOffset?: number;
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks_pages",
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
