import { SemrushAPIClient } from "../client";

export async function countApiUnits(this: SemrushAPIClient): Promise<string> {
    const url = "http://www.semrush.com/users/countapiunits.html";
    return this.get<string>(url, undefined, false);
}
