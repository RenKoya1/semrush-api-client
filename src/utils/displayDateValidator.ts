export function displayDateValidator(displayDate?: string): boolean {
    if (!displayDate) return true;
    const regex = /^\d{4}(0[1-9]|1[0-2])15$/;
    return regex.test(displayDate);

}