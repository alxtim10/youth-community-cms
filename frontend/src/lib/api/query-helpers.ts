import { NextRequest } from 'next/server'

export const DEFAULT_PAGE_SIZE = 10
export const MAX_PAGE_SIZE = 100

// ── Pagination ──────────────────────────────────────────────
export function parsePagination(req: NextRequest) {
  const page = Math.max(
    1,
    Number(req.nextUrl.searchParams.get("page") ?? "1")
  );

  const pageSize = Math.min(
    MAX_PAGE_SIZE,
    Math.max(
      1,
      Number(
        req.nextUrl.searchParams.get("page_size") ??
        req.nextUrl.searchParams.get("limit") ??
        DEFAULT_PAGE_SIZE
      )
    )
  );

  return {
    page,
    pageSize,
    skip: (page - 1) * pageSize,
    take: pageSize,
  };
}

export function buildPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  pageSize: number
) {
  const totalPages = Math.ceil(total / pageSize);

  return {
    count: total,

    next: page < totalPages ? page + 1 : null,

    previous: page > 1 ? page - 1 : null,

    results: data,
  };
}

// ── Search (OR across multiple fields) ──────────────────────
export function parseSearch(req: NextRequest, fields: string[]) {
  const q = req.nextUrl.searchParams.get('search')?.trim()
  if (!q) return undefined
  return {
    OR: fields.map((field) => ({
      [field]: { contains: q, mode: 'insensitive' as const },
    })),
  }
}

// ── Ordering ────────────────────────────────────────────────
export function parseOrdering(
  req: NextRequest,
  allowedFields: string[],
  defaultOrdering: Record<string, 'asc' | 'desc'>[]
) {
  const ordering = req.nextUrl.searchParams.get('ordering')
  if (!ordering) return defaultOrdering

  const desc = ordering.startsWith('-')
  const field = desc ? ordering.slice(1) : ordering

  if (!allowedFields.includes(field)) return defaultOrdering

  return [{ [field]: desc ? 'desc' : 'asc' }]
}

// ── Error Response ───────────────────────────────────────────
export function errorResponse(message: string, status: number) {
  return Response.json({ detail: message }, { status })
}