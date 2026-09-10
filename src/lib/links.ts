/** Solo protocolos externos seguros; null mantiene los datos pendientes inactivos. */
export function externalUrl(
  value: string | null | undefined,
): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}
export function assetUrl(value: string | null | undefined): string | undefined {
  return value?.startsWith("/") && !value.startsWith("//")
    ? value
    : externalUrl(value);
}
