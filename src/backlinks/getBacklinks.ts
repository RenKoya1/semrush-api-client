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
    target_type = "domain",
    export_columns = [
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
    display_limit = 1000,
    outputObj = true,
  }: {
    target: string;
    target_type?: BacklinksTargetType;
    export_columns?: BacklinkstExportColumns[];
    displaySort?: DisplaySort;
    outputObj?: boolean;
    display_limit?: number;
  }
): Promise<string | Record<string, string>[]> {
  const params = {
    type: "backlinks",
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
