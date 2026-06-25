import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/members/:id
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const member = await prisma.member.findUnique({ where: { id: parseInt(id) } })
    if (!member) return errorResponse('Member not found', 404)
    return Response.json(member)
  } catch (err) {
    console.error('[GET /api/members/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PUT /api/members/:id — full update
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()
    const { name, address, gender, phone } = body

    if (!name || !address || !gender || !phone) {
      return errorResponse('name, address, gender, phone are required', 400)
    }

    const member = await prisma.member.update({
      where: { id: parseInt(id) },
      data: { name, address, gender, phone },
    })

    return Response.json(member)
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Member not found', 404)
    console.error('[PUT /api/members/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PATCH /api/members/:id — partial update
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    const member = await prisma.member.update({
      where: { id: parseInt(id) },
      data: body,
    })

    return Response.json(member)
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Member not found', 404)
    console.error('[PATCH /api/members/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// DELETE /api/members/:id
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.member.delete({ where: { id: parseInt(id) } })
    return new Response(null, { status: 204 })
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('Member not found', 404)
    console.error('[DELETE /api/members/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}