import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/fellowships/:id
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const event = await prisma.fellowshipEvent.findUnique({ where: { id: parseInt(id) } })
    if (!event) return errorResponse('Fellowship event not found', 404)
    return Response.json(event)
  } catch (err) {
    console.error('[GET /api/fellowships/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PUT /api/fellowships/:id
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    const event = await prisma.fellowshipEvent.update({
      where: { id: parseInt(id) },
      data: {
        ...body,
        ...(body.date ? { date: new Date(body.date) } : {}),
      },
    })

    return Response.json(event)
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Fellowship event not found', 404)
    console.error('[PUT /api/fellowships/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PATCH /api/fellowships/:id
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    const event = await prisma.fellowshipEvent.update({
      where: { id: parseInt(id) },
      data: {
        ...body,
        ...(body.date ? { date: new Date(body.date) } : {}),
      },
    })

    return Response.json(event)
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Fellowship event not found', 404)
    console.error('[PATCH /api/fellowships/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// DELETE /api/fellowships/:id
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.fellowshipEvent.delete({ where: { id: parseInt(id) } })
    return new Response(null, { status: 204 })
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Fellowship event not found', 404)
    console.error('[DELETE /api/fellowships/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}