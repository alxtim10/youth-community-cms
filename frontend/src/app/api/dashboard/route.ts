import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// Field yang dikembalikan untuk SimpleFellowshipSerializer
const simpleFellowshipSelect = {
  id: true,
  date: true,
  theme: true,
  speaker: true,
  attendance_count: true,
} as const

// GET /api/dashboard
export async function GET(_req: NextRequest) {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const [
      total_members,
      total_fellowships,
      avg_result,
      highest_attendance_event,
      latest_fellowship,
      upcoming_fellowship,
    ] = await prisma.$transaction([
      prisma.member.count(),

      prisma.fellowshipEvent.count(),

      prisma.fellowshipEvent.aggregate({
        _avg: { attendance_count: true },
      }),

      prisma.fellowshipEvent.findFirst({
        orderBy: { attendance_count: 'desc' },
        select: simpleFellowshipSelect,
      }),

      prisma.fellowshipEvent.findFirst({
        orderBy: { date: 'desc' },
        select: simpleFellowshipSelect,
      }),

      prisma.fellowshipEvent.findFirst({
        where: { date: { gte: today } },
        orderBy: { date: 'asc' },
        select: simpleFellowshipSelect,
      }),
    ])

    return Response.json({
      total_members,
      total_fellowships,
      average_attendance: avg_result._avg.attendance_count ?? 0,
      highest_attendance_event,
      latest_fellowship,
      upcoming_fellowship,
    })
  } catch (err) {
    console.error('[GET /api/dashboard]', err)
    return errorResponse('Internal server error', 500)
  }
}