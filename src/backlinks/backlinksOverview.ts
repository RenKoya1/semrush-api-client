import { SemrushAPIClient } from "../client";

export type BacklinksTargetType = "root_domain" | "domain" | "url";

export type BacklinkstExportColumns =
  | "ascore"
  | "total"
  | "domains_num"
  | "urls_num"
  | "ips_num"
  | "ipclassc_num"
  | "follows_num"
  | "nofollows_num"
  | "sponsored_num"
  | "ugc_num"
  | "texts_num"
  | "images_num"
  | "forms_num"
  | "frames_num";
export async function getBacklinksOverview(
  this: SemrushAPIClient,
  {
    target,
    targetType = "domain",
    exportColumns = [
      "ascore",
      "total",
      "domains_num",
      "urls_num",
      "ips_num",
      "ipclassc_num",
      "follows_num",
      "nofollows_num",
      "sponsored_num",
      "ugc_num",
      "texts_num",
      "images_num",
      "forms_num",
      "frames_num",
    ],
    exportEscape,
    outputObj = true,
  }: {
    target: string;
    targetType?: BacklinksTargetType;
    exportColumns?: BacklinkstExportColumns[];
    exportEscape?: 1;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    type: "backlinks_overview",
    target,
    target_type: targetType,
    export_columns: exportColumns.join(","),
    export_escape: exportEscape,
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "v1/",
    params,
    outputObj
  );
}
