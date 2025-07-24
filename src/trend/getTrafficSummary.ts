import { SemrushAPIClient } from "../client";
import { Country } from "../type/general/country";

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
    export_columns = ["target", "visits", "users"],
    country,
    outputObj = true, // Default to true for output object
  }: {
    domains: string[];
    export_columns?: ExportColumns[];
    country?: Country;
    outputObj?: boolean;
  }
): Promise<Record<string, string>[]> {
  const params = {
    targets: domains.join(","),
    export_columns: export_columns.join(","),
    country: country,
  };

  return this.get<Record<string, string>[]>(
    this.ANALYTICS_URL + "ta/api/v3/summary",
    params,
    outputObj
  );
}
