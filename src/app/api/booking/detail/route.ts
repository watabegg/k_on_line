import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma/prisma'
import { UTCToJST, JSTToUTC } from '@/lib/CommonFunction'

export async function GET(req: NextRequest) {
	const params = req.nextUrl.searchParams
	const id = params.get('id')

	if (!id) {
		return NextResponse.json({ error: 'Invalid query' }, { status: 400 })
	}

	try {
		const bookings = await prisma.booking.findUnique({
			where: {
				id: id,
			},
			select: {
				id: true,
				created_at: true,
				booking_date: true,
				booking_time: true,
				regist_name: true,
				name: true,
			},
		})
		return NextResponse.json({ response: bookings }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch bookings' },
			{ status: 500 },
		)
	}
}