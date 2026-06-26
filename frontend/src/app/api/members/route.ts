import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import {
  parsePagination,
  parseSearch,
  parseOrdering,
  buildPaginatedResponse,
  errorResponse,
} from '@/lib/api/query-helpers'
import { Gender } from '@prisma/client'

// GET /api/members
// Query params: page, page_size, search, ordering, gender
export async function GET(req: NextRequest) {
  try {
    const { skip, take, page, pageSize } = parsePagination(req)

    // Filter: exact match gender
    const gender = req.nextUrl.searchParams.get('gender') as Gender | null
    const filterWhere = gender ? { gender } : {}

    // Search: name, phone
    const searchWhere = parseSearch(req, ['name', 'phone'])

    const where = {
      ...filterWhere,
      ...(searchWhere ? searchWhere : {}),
    }

    // Ordering: name, created_at (default: name asc)
    const orderBy = parseOrdering(req, ['name', 'created_at'], [{ name: 'asc' }])

    const [data, total] = await prisma.$transaction([
      prisma.member.findMany({ where, skip, take, orderBy }),
      prisma.member.count({ where }),
    ])

    return Response.json(buildPaginatedResponse(data, total, page, pageSize))
  } catch (err) {
    console.error('[GET /api/members]', err)
    return errorResponse('Internal server error', 500)
  }
}

// POST /api/members
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, address, gender, phone } = body

    if (!name || !address || !gender || !phone) {
      return errorResponse('name, address, gender, phone are required', 400)
    }

    if (!['M', 'F'].includes(gender)) {
      return errorResponse('gender must be M or F', 400)
    }

    const member = await prisma.member.create({
      data: { name, address, gender, phone },
    })

    return Response.json(member, { status: 201 })
  } catch (err) {
    console.error('[POST /api/members]', err)
    return errorResponse('Internal server error', 500)
  }
}