'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links: { href: string; label: string }[] = [
	{ href: '/expertise', label: 'Экспертиза' },
	{ href: '/about', label: 'О нас' },
	{ href: '/work', label: 'Наши кейсы' },
	{ href: '/contact', label: 'Контакты' },
]

const menuVariants: Variants = {
	closed: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1], // cubic-bezier для easeInOut
		},
	},
	open: {
		opacity: 1,
		height: 'auto',
		transition: {
			duration: 0.4,
			ease: [0.4, 0, 0.2, 1],
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
}

const menuItemVariants: Variants = {
	closed: {
		opacity: 0,
		x: -20,
	},
	open: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: [0, 0, 0.2, 1], // cubic-bezier для easeOut
		},
	},
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const isActive = (href: string) => {
		if (href.startsWith('/#')) {
			return pathname === '/' && href === '/#expertise'
		}
		return pathname === href
	}

	return (
		<>
			{/* Desktop & Mobile Navbar */}
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
				className='sticky inset-x-0 top-0 z-50'
			>
				{/* Glass Morphism Background */}
				<div className='absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50' />

				<div className='relative max-container padding-container flex h-20 items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='group flex items-center gap-3'>
						<div className='relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0B3B95] to-[#1e4ba8] shadow-lg transition-transform duration-300 group-hover:scale-105'>
							<Image
								src='/assets/scale.png'
								alt='Strategic Law Group'
								width={24}
								height={24}
								className='brightness-0 invert'
							/>
						</div>
						<div className='hidden sm:block'>
							<div className='text-sm font-bold text-slate-900'>Strategic</div>
							<div className='text-sm font-bold text-[#0B3B95]'>Law Group</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-1'>
						{links.map(link => (
							<Link
								key={link.href}
								href={link.href}
								className='group relative px-4 py-2'
							>
								<span
									className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
										isActive(link.href)
											? 'text-[#0B3B95]'
											: 'text-slate-700 group-hover:text-[#0B3B95]'
									}`}
								>
									{link.label}
								</span>

								{/* Active Indicator */}
								{isActive(link.href) && (
									<motion.div
										layoutId='activeNav'
										className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50'
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}

								{/* Hover Background */}
								<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
							</Link>
						))}
					</nav>

					{/* CTA Button - Desktop */}
					<Link href='/contact' className='hidden lg:inline-flex'>
						<motion.span
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='inline-flex items-center gap-2 rounded-full bg-[#0B3B95] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-[#0a3280] hover:shadow-xl hover:shadow-blue-500/40'
						>
							Получить консультацию
						</motion.span>
					</Link>

					{/* Mobile Menu Button */}
					<motion.button
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsOpen(!isOpen)}
						className='flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors duration-300 hover:bg-slate-200 lg:hidden'
						aria-label='Открыть меню'
					>
						{isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
					</motion.button>
				</div>
			</motion.div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial='closed'
						animate='open'
						exit='closed'
						variants={menuVariants}
						className='fixed inset-x-0 top-20 z-40 overflow-hidden lg:hidden'
					>
						<div className='absolute inset-0 bg-white/95 backdrop-blur-2xl' />
						<motion.nav className='relative max-container padding-container py-6 space-y-2'>
							{links.map(link => (
								<motion.div key={link.href} variants={menuItemVariants}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${
											isActive(link.href)
												? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0B3B95] shadow-sm'
												: 'text-slate-700 hover:bg-slate-50'
										}`}
									>
										<span className='text-base font-medium'>{link.label}</span>
										{isActive(link.href) && (
											<motion.div
												layoutId='activeMobile'
												className='h-2 w-2 rounded-full bg-[#0B3B95]'
											/>
										)}
									</Link>
								</motion.div>
							))}

							{/* Mobile CTA Button */}
							<motion.div variants={menuItemVariants} className='pt-4'>
								<Link href='/contact'>
									<button className='w-full rounded-2xl bg-[#0B3B95] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0a3280]'>
										Получить консультацию
									</button>
								</Link>
							</motion.div>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Backdrop */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
						className='fixed inset-0 top-20 z-30 bg-slate-900/20 backdrop-blur-sm lg:hidden'
					/>
				)}
			</AnimatePresence>
		</>
	)
}
