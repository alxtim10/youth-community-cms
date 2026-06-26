import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import {
  parsePagination,
  parseSearch,
  buildPaginatedResponse,
  errorResponse,
} from '@/lib/api/query-helpers'

// GET /api/files
// Query params: page, page_size, search
export async function GET(req: NextRequest) {
  try {
    const { skip, take, page, pageSize } = parsePagination(req)

    // Search: name, description
    const searchWhere = parseSearch(req, ['name', 'description'])
    const where = searchWhere ?? {}

    const [data, total] = await prisma.$transaction([
      prisma.appFile.findMany({
        where,
        skip,
        take,
        orderBy: { created_at: 'desc' },  // fixed ordering seperti Django
      }),
      prisma.appFile.count({ where }),
    ])

    return Response.json(buildPaginatedResponse(data, total, page, pageSize))
  } catch (err) {
    console.error('[GET /api/files]', err)
    return errorResponse('Internal server error' + err, 500)
  }
}

// POST /api/files
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, url, description } = body

    if (!name || !url) {
      return errorResponse('name and url are required', 400)
    }

    const file = await prisma.appFile.create({
      data: { name, url, description: description ?? null },
    })

    return Response.json(file, { status: 201 })
  } catch (err) {
    console.error('[POST /api/files]', err)
    return errorResponse('Internal server error', 500)
  }
}