export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatGuestCount(value: string): string {
  return value.replace(" guests", "").replace(" guest", "");
}
