import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/analytics/attendance-trend
// Returns last 10 fellowship events ordered by date asc
export async function GET(_req: NextRequest) {
  try {
    const events = await prisma.fellowshipEvent.findMany({
      orderBy: { date: 'desc' },
      take: 10,
      select: {
        date: true,
        attendance_count: true,
      },
    })

    // Reverse agar urutan asc (seperti Django reversed(qs))
    const data = events.reverse().map((event) => ({
      date: event.date,
      attendance: event.attendance_count,
    }))

    return Response.json(data)
  } catch (err) {
    console.error('[GET /api/analytics/attendance-trend]', err)
    return errorResponse('Internal server error', 500)
  }
}