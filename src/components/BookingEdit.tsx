'use client'

import { useState, useEffect } from 'react'
import {
	TextField,
	Typography,
	Container,
	Stack,
	Box,
	Alert,
} from '@mui/material'
import Loading from '@/components/atom/Loading'
import BookingEditAuth from '@/components/BookingEditAuth'
import BookingEditForm from '@/components/BookingEditForm'
import { useSearchParams } from 'next/navigation'

const BookingEdit = () => {
	const id = useSearchParams().get('id') as string
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isAuth, setIsAuth] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<Container className="flex-col" maxWidth="md">
			<Typography variant="h4" className="text-center">
				予約編集
			</Typography>
			{isAuth ? (
				<BookingEditForm id={id} />
			) : (
				<BookingEditAuth id={id} isAuth={isAuth} handleSetAuth={setIsAuth} />
			)}
		</Container>
	)
}

export default BookingEdit
