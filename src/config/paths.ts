/**
 * Prefix for root-relative URLs when the app uses `basePath` in `next.config.ts`.
 * Do not use for `next/link` `href` — Link already applies `basePath` (double prefix bug).
 * Use for: `fetch()`, plain `<a href>`, `<video>`, and `next/image` `src` here.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
