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

export async function backlinksOverview(
  this: SemrushAPIClient,
  {
    target,
    target_type = "domain",
    export_columns = [
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
    outputObj = true,
  }: {
    target: string;
    target_type?: BacklinksTargetType;
    export_columns?: BacklinkstExportColumns[];
    outputObj?: boolean;
  }
): Promise<string> {
  const params = {
    type: "backlinks_overview",
    target,
    target_type,
    export_columns: export_columns.join(","),
  };

  return this.get<string>(this.ANALYTICS_URL, params, outputObj);
}
