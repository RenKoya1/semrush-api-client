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
    target_type = "domain",
    export_columns = [
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
    display_limit = 10,
    outputObj = true,
  }: {
    target: string;
    target_type?: IndexedPageTargetType;
    export_columns?: ExportColumns[];
    displaySort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks_pages",
    target,
    target_type,
    display_sort: displaySort,
    display_limit,
    export_columns: export_columns.join(","),
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "v1/",
    params,
    outputObj
  );
}
