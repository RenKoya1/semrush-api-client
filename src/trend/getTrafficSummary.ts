import { SemrushAPIClient } from "../client";
import { Country } from "../type/general/country";
import { displayDateValidator } from "../utils/displayDateValidator";

export type ExportColumns =
  | "target"
  | "rank"
  | "visits"
  | "categories"
  | "desktop_visits"
  | "mobile_visits"
  | "users"
  | "desktop_users"
  | "mobile_users"
  | "direct"
  | "referral"
  | "social"
  | "search"
  | "paid"
  | "search_organic"
  | "search_paid"
  | "social_organic"
  | "social_paid"
  | "mail"
  | "display_ad"
  | "unknown_channel"
  | "time_on_site"
  | "desktop_time_on_site"
  | "mobile_time_on_site"
  | "pages_per_visit"
  | "desktop_pages_per_visit"
  | "mobile_pages_per_visit"
  | "bounce_rate"
  | "desktop_bounce_rate"
  | "mobile_bounce_rate"
  | "desktop_share"
  | "mobile_share"
  | "accuracy"
  | "display_date"
  | "country"
  | "device_type"
  | "desktop_hits"
  | "mobile_hits";
export function getTrafficSummary(
  this: SemrushAPIClient,
  {
    domains,
    exportColumns = ["target", "visits", "users"],
    country,
    displayDate,
    displayLimit,
    displayOffset,
    outputObj = true,
  }: {
    domains: string[];
    exportColumns?: ExportColumns[];
    country?: Country;
    displayDate?: string; // Format: YYYYMM15
    displayLimit?: number;
    displayOffset?: number;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  if (displayDate && !displayDateValidator(displayDate)) {
    throw new Error("Invalid displayDate format. Format: YYYYMM15");
  }
  const params = {
    targets: domains.join(","),
    export_columns: exportColumns.join(","),
    country,
    display_date: displayDate,
    display_limit: displayLimit,
    display_offset: displayOffset,
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "ta/api/v3/summary",
    params,
    outputObj
  );
}
