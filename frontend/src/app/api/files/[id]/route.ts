import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db/client'
import { errorResponse } from '@/lib/api/query-helpers'

// GET /api/files/:id
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const file = await prisma.appFile.findUnique({ where: { id: BigInt(id) } })
    if (!file) return errorResponse('File not found', 404)

    // BigInt tidak bisa di-serialize JSON langsung
    return Response.json({ ...file, id: file.id.toString() })
  } catch (err) {
    console.error('[GET /api/files/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PUT /api/files/:id
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { name, url, description } = await req.json()

    if (!name || !url) {
      return errorResponse('name and url are required', 400)
    }

    const file = await prisma.appFile.update({
      where: { id: BigInt(id) },
      data: { name, url, description: description ?? null },
    })

    return Response.json({ ...file, id: file.id.toString() })
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('File not found', 404)
    console.error('[PUT /api/files/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// PATCH /api/files/:id
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    const file = await prisma.appFile.update({
      where: { id: BigInt(id) },
      data: body,
    })

    return Response.json({ ...file, id: file.id.toString() })
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('File not found', 404)
    console.error('[PATCH /api/files/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}

// DELETE /api/files/:id
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.appFile.delete({ where: { id: BigInt(id) } })
    return new Response(null, { status: 204 })
  } catch (err: any) {
    if (err.code === 'P2025') return errorResponse('File not found', 404)
    console.error('[DELETE /api/files/:id]', err)
    return errorResponse('Internal server error', 500)
  }
}