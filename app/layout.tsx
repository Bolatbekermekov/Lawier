import type { Metadata } from 'next'

import CTAAndFooter from '../components/CTAAndFooter'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
	title: 'Strategic Law Group',
	description:
		'Full-service law firm delivering corporate, commercial, and litigation expertise with swift, client-first responses.',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main className='relative overflow-hidden pt-16'>{children}</main>
				<CTAAndFooter />
			</body>
		</html>
	)
}
