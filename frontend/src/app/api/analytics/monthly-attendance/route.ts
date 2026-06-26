import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/analytics/monthly-attendance
// Query params: year, month
export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams
        const year = searchParams.get('year')
        const month = searchParams.get('month')

        // Build WHERE clause
        const conditions: string[] = []
        const values: (string | number)[] = []

        if (year) {
            values.push(parseInt(year))
            conditions.push(`EXTRACT(YEAR FROM date) = $${values.length}`)
        }

        if (month) {
            values.push(parseInt(month))
            conditions.push(`EXTRACT(MONTH FROM date) = $${values.length}`)
        }

        const whereClause =
            conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

        type RawAttendanceResult = { month_date: Date; total: bigint }
        const raw = await prisma.$queryRawUnsafe(
            `
      SELECT
        DATE_TRUNC('month', date) AS month_date,
        SUM(attendance_count)     AS total
      FROM fellowship_events
      ${whereClause}
      GROUP BY DATE_TRUNC('month', date)
      ORDER BY month_date ASC
      `) as RawAttendanceResult[]

      const result = raw as RawAttendanceResult[]


        const data = result.map((item) => ({
            month: item.month_date.toLocaleString('en-US', { month: 'short' }),
            attendance: Number(item.total ?? 0),
        }))

        return Response.json(data)
    } catch (err) {
        console.error('[GET /api/analytics/monthly-attendance]', err)
        return errorResponse('Internal server error', 500)
    }
}