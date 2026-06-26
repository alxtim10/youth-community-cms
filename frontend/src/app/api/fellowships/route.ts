import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import {
  parsePagination,
  parseSearch,
  parseOrdering,
  buildPaginatedResponse,
  errorResponse,
} from '@/lib/api/query-helpers'
import { EventStatus } from '@prisma/client'

// GET /api/fellowships
// Query params: page, page_size, search, ordering, month, speaker_status, worship_team_status
export async function GET(req: NextRequest) {
  try {
    const { skip, take, page, pageSize } = parsePagination(req)
    const searchParams = req.nextUrl.searchParams

    // Filters: exact match
    const month = searchParams.get('month')
    const speaker_status = searchParams.get('speaker_status') as EventStatus | null
    const worship_team_status = searchParams.get('worship_team_status') as EventStatus | null

    const filterWhere = {
      ...(month ? { month } : {}),
      ...(speaker_status ? { speaker_status } : {}),
      ...(worship_team_status ? { worship_team_status } : {}),
    }

    // Search: theme, speaker, mc, bible_verse
    const searchWhere = parseSearch(req, ['theme', 'speaker', 'mc', 'bible_verse'])

    const where = {
      ...filterWhere,
      ...(searchWhere ? searchWhere : {}),
    }

    // Ordering: date, attendance_count, created_at (default: date desc)
    const orderBy = parseOrdering(
      req,
      ['date', 'attendance_count', 'created_at'],
      [{ date: 'desc' }]
    )

    const [data, total] = await prisma.$transaction([
      prisma.fellowshipEvent.findMany({ where, skip, take, orderBy }),
      prisma.fellowshipEvent.count({ where }),
    ])

    return Response.json(buildPaginatedResponse(data, total, page, pageSize))
  } catch (err) {
    console.error('[GET /api/fellowships]', err)
    return errorResponse('Internal server error', 500)
  }
}

// POST /api/fellowships
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      month, date, theme, bible_verse, objective, theme_description,
      speaker, speaker_pic, speaker_status,
      mc, musician, worship_team_pic, worship_team_status,
      attendance_count,
    } = body

    const requiredFields = { month, date, theme, bible_verse, objective, theme_description, speaker, speaker_pic, mc, musician, worship_team_pic }
    const missing = Object.entries(requiredFields)
      .filter(([, v]) => !v)
      .map(([k]) => k)

    if (missing.length > 0) {
      return errorResponse(`Missing required fields: ${missing.join(', ')}`, 400)
    }

    const event = await prisma.fellowshipEvent.create({
      data: {
        month,
        date: new Date(date),
        theme,
        bible_verse,
        objective,
        theme_description,
        speaker,
        speaker_pic,
        speaker_status: speaker_status ?? 'NOT_DONE',
        mc,
        musician,
        worship_team_pic,
        worship_team_status: worship_team_status ?? 'NOT_DONE',
        attendance_count: attendance_count ?? 0,
      },
    })

    return Response.json(event, { status: 201 })
  } catch (err) {
    console.error('[POST /api/fellowships]', err)
    return errorResponse('Internal server error', 500)
  }
}