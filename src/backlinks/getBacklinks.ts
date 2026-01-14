import { SemrushAPIClient } from "../client";

export type BacklinksTargetType = "root_domain" | "domain" | "url";

export type BacklinkstExportColumns =
  | "page_ascore"
  | "response_code"
  | "source_size"
  | "external_num"
  | "internal_num"
  | "redirect_url"
  | "source_url"
  | "source_title"
  | "image_url"
  | "target_url"
  | "target_title"
  | "anchor"
  | "image_alt"
  | "last_seen"
  | "first_seen"
  | "nofollow"
  | "form"
  | "frame"
  | "image"
  | "sitewide"
  | "newlink"
  | "lostlink";

export type DisplaySort =
  | "page_ascore_asc"
  | "page_ascore_desc"
  | "last_seen_asc"
  | "last_seen_desc"
  | "first_seen_asc"
  | "first_seen_desc";
export async function getBacklinks(
  this: SemrushAPIClient,
  {
    target,
    targetType = "domain",
    exportColumns = [
      "page_ascore",
      "response_code",
      "source_size",
      "external_num",
      "internal_num",
      "redirect_url",
      "source_url",
      "source_title",
      "image_url",
      "target_url",
      "target_title",
      "anchor",
      "image_alt",
      "last_seen",
      "first_seen",
      "nofollow",
      "form",
      "frame",
      "image",
      "sitewide",
      "newlink",
      "lostlink",
    ],
    displaySort = "page_ascore_desc",
    displayLimit = 10,
    displayOffset,
    displayFilter,
    exportEscape,
    outputObj = true,
  }: {
    target: string;
    targetType?: BacklinksTargetType;
    exportColumns?: BacklinkstExportColumns[];
    displaySort?: DisplaySort;
    displayLimit?: number;
    displayOffset?: number;
    displayFilter?: string;
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks",
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
