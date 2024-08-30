'use client'
// modules
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// lib
import { routes } from '@/lib/constants/paths'

export default function Page() {
	const router = useRouter()

	useEffect(() => {
		router.push(routes.PROJECTS)
	}, [router])
}
