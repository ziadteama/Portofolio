import { type NextRequest, NextResponse } from 'next/server'

export const GET = (req: NextRequest) => {
    const request = req.body
    return NextResponse.json({ hello: `world. You sent: ${request}!` })
}