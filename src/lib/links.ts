const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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

export function assetUrl(
  value: string | null | undefined,
): string | undefined {
  if (value?.startsWith("/") && !value.startsWith("//")) {
    return `${basePath}${value}`;
  }

  return externalUrl(value);
}