const localFallback = "http://localhost:3000";

export function getSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim() || localFallback;
  try {
    return new URL(candidate).origin;
  } catch {
    return localFallback;
  }
}
