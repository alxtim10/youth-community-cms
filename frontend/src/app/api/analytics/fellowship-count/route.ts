import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/analytics/fellowship-count
// Fellowship count per month (all time)
export async function GET(_req: NextRequest) {
    try {
        type RawMonthResult = { month_date: Date; total: bigint }

        const result = (await prisma.$queryRawUnsafe(
            `
  SELECT
    DATE_TRUNC('month', date) AS month_date,
    COUNT(id)                 AS total
  FROM fellowship_events
  GROUP BY DATE_TRUNC('month', date)
  ORDER BY month_date ASC
  `
        )) as RawMonthResult[]

        const data = result.map((item) => ({
            month: item.month_date.toLocaleString('en-US', { month: 'short' }),
            total: Number(item.total),
        }))

        return Response.json(data)
    } catch (err) {
        console.error('[GET /api/analytics/fellowship-count]', err)
        return errorResponse('Internal server error', 500)
    }
}