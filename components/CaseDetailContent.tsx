'use client'

import type { Variants } from 'framer-motion'
import {
	LazyMotion,
	domAnimation,
	m,
	useScroll,
	useTransform,
} from 'framer-motion'
import {
	ArrowLeft,
	ArrowUpRight,
	Award,
	Clock,
	Lightbulb,
	Sparkles,
	Target,
	TrendingUp,
	Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'

import type { Case } from '@/lib/cases'

// Хук для определения мобильного устройства
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < breakpoint)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [breakpoint])

	return isMobile
}

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
}

const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
}

const staggerContainerMobile: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0,
		},
	},
}

const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
	},
}

export default function CaseDetailContent({ caseItem }: { caseItem: Case }) {
	const isMobile = useIsMobile()
	const containerRef = useRef<HTMLDivElement>(null)
	const heroRef = useRef<HTMLDivElement>(null)

	// Parallax для hero секции (отключен на мобильных)
	const { scrollYProgress: heroProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	})

	const heroY = useTransform(
		heroProgress,
		[0, 1],
		isMobile ? ['0%', '0%'] : ['0%', '30%']
	)
	const heroOpacity = useTransform(
		heroProgress,
		[0, 0.5, 1],
		isMobile ? [1, 1, 1] : [1, 0.8, 0]
	)
	const heroScale = useTransform(
		heroProgress,
		[0, 1],
		isMobile ? [1, 1] : [1, 0.95]
	)

	return (
		<LazyMotion features={domAnimation} strict>
			<section
				ref={containerRef}
				className='relative overflow-hidden py-12 sm:py-14 md:py-16'
				data-nav-scheme='light'
			>
				{/* Enhanced Background */}
				<div className='pointer-events-none absolute inset-0'>
					<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.08),transparent_50%)]' />

					{/* Бесконечные анимации только на десктопе */}
					{!isMobile && (
						<>
							<m.div
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.15, 0.25, 0.15],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className='absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 blur-xl'
							/>
							<m.div
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.1, 0.2, 0.1],
								}}
								transition={{
									duration: 10,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 1,
								}}
								className='absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-violet-200 via-blue-200 to-indigo-200 blur-xl'
							/>
						</>
					)}
				</div>

				<div className='relative mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10'>
					{/* Navigation */}
					<m.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4'
					>
						<Link
							href='/work'
							className='group inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:text-[#0B3B95] hover:shadow-xl hover:ring-[#0B3B95]/20'
						>
							<ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
							Назад ко всем кейсам
						</Link>

						<Link
							href='/contact'
							className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B3B95] to-[#1e4ba8] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0B3B95]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B3B95]/40 hover:scale-105'
						>
							Запросить консультацию
							<ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
						</Link>
					</m.div>

					{/* Hero Section with Parallax */}
					<m.div
						ref={heroRef}
						style={{
							y: heroY,
							opacity: heroOpacity,
							scale: heroScale,
							willChange: isMobile ? 'auto' : 'transform',
						}}
						className='mb-14 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B3B95] via-[#1e4ba8] to-[#4c6fd9] p-[2px] shadow-2xl md:mb-16'
					>
						<div className='relative overflow-hidden rounded-[30px] bg-white'>
							{/* Animated Header Background */}
							<div className='relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#eef4ff] to-[#e0ebff]'>
								{/* Animated Orbs - упрощены на мобильных */}
								{!isMobile && (
									<>
										<m.div
											animate={{
												scale: [1, 1.3, 1],
												x: [-20, 20, -20],
												y: [-20, 20, -20],
											}}
											transition={{
												duration: 12,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
											className='absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-radial from-[#6b8fff]/40 to-transparent blur-xl'
										/>
										<m.div
											animate={{
												scale: [1, 1.4, 1],
												x: [20, -20, 20],
												y: [20, -20, 20],
											}}
											transition={{
												duration: 15,
												repeat: Infinity,
												ease: 'easeInOut',
												delay: 0.5,
											}}
											className='absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-radial from-[#4d73ff]/30 to-transparent blur-xl'
										/>
										<m.div
											animate={{
												scale: [1, 1.2, 1],
												x: [10, -10, 10],
											}}
											transition={{
												duration: 10,
												repeat: Infinity,
												ease: 'easeInOut',
												delay: 1,
											}}
											className='absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-radial from-[#0B3B95]/35 to-transparent blur-xl'
										/>
									</>
								)}

								{/* Floating Badge */}
								<m.div
									initial={{ opacity: 0, scale: 0.8, y: -20 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className='absolute left-8 top-8'
								>
									<div className='group relative'>
										{!isMobile && (
											<div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#0B3B95]/20 to-purple-500/20 blur-xl transition-all group-hover:blur-2xl' />
										)}
										<span className='relative inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/95 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-slate-800 shadow-2xl'>
											<Sparkles className='h-4 w-4 text-[#0B3B95]' />
											{caseItem.category}
										</span>
									</div>
								</m.div>
							</div>

							{/* Content */}
							<div className='space-y-8 sm:space-y-10 px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 md:px-14'>
								<m.div
									initial='hidden'
									animate='visible'
									variants={
										isMobile ? staggerContainerMobile : staggerContainer
									}
									className='space-y-5'
								>
									<m.h1
										variants={fadeInUp}
										className='text-3xl font-black leading-[1.1] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl'
									>
										{caseItem.title}
									</m.h1>
									<m.p
										variants={fadeInUp}
										className='max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:text-2xl'
									>
										{caseItem.summary}
									</m.p>
								</m.div>

								{/* Enhanced Metrics with Icons */}
								{caseItem.metrics && (
									<m.div
										variants={
											isMobile ? staggerContainerMobile : staggerContainer
										}
										initial='hidden'
										animate='visible'
										className='grid gap-4 sm:gap-5 sm:grid-cols-3'
									>
										{caseItem.metrics.map((metric, idx) => (
											<m.div
												key={`${metric.label}-${idx}`}
												variants={scaleIn}
												whileHover={
													isMobile
														? {}
														: {
																y: -8,
																scale: 1.03,
																transition: { duration: 0.2 },
														  }
												}
												className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 ring-1 ring-slate-200/70 shadow-lg transition-shadow hover:shadow-2xl sm:p-7'
											>
												{!isMobile && (
													<div className='absolute inset-0 bg-gradient-to-br from-[#0B3B95]/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100' />
												)}
												<div className='relative space-y-3'>
													<div className='flex items-center justify-between'>
														<div className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0B3B95] to-[#4c6fd9] md:text-5xl'>
															{metric.value}
														</div>
														<Award className='h-6 w-6 text-[#0B3B95]/40 transition-all group-hover:text-[#0B3B95] group-hover:scale-110' />
													</div>
													<div className='text-sm font-semibold text-slate-600'>
														{metric.label}
													</div>
												</div>
											</m.div>
										))}
									</m.div>
								)}

								{/* Team Section */}
								<m.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 }}
									className='flex flex-wrap items-center gap-4 pt-3 sm:gap-5 sm:pt-4'
								>
									<div className='flex items-center gap-2 text-sm font-bold text-slate-700'>
										<Users className='h-5 w-5 text-[#0B3B95]' />
										Команда по делу
									</div>
									<div className='flex items-center -space-x-4'>
										{caseItem.people.map((src, idx) => (
											<m.div
												key={src + idx}
												initial={{ opacity: 0, scale: 0.5, x: -20 }}
												animate={{ opacity: 1, scale: 1, x: 0 }}
												transition={{
													delay: 0.7 + idx * 0.1,
													type: 'spring',
													stiffness: 200,
												}}
												whileHover={
													isMobile
														? {}
														: {
																scale: 1.2,
																zIndex: 10,
																rotate: idx % 2 === 0 ? 5 : -5,
														  }
												}
												className='relative'
											>
												{!isMobile && (
													<div className='absolute inset-0 rounded-full bg-gradient-to-br from-[#0B3B95]/20 to-purple-500/20 blur-md opacity-0 transition-opacity hover:opacity-100' />
												)}
												<Image
													src={src}
													alt='член команды'
													width={56}
													height={56}
													className='relative h-14 w-14 rounded-full border-[3px] border-white object-cover shadow-xl ring-2 ring-slate-200 transition-all duration-300 hover:ring-4 hover:ring-[#0B3B95]/50'
												/>
											</m.div>
										))}
									</div>
								</m.div>
							</div>
						</div>
					</m.div>

					{/* Timeline Process Flow */}
					<m.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
						variants={isMobile ? staggerContainerMobile : staggerContainer}
						className='mb-12 sm:mb-14 md:mb-16'
					>
						<m.div variants={fadeInUp} className='mb-10 text-center'>
							<div className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2 ring-1 ring-slate-200/50 mb-4'>
								<Clock className='h-4 w-4 text-[#0B3B95]' />
								<span className='text-sm font-semibold text-slate-700'>
									Маршрут кейса
								</span>
							</div>
							<h2 className='text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl'>
								Как мы решили задачу
							</h2>
						</m.div>

						{/* Timeline Cards */}
						<div className='relative'>
							{/* Timeline Line */}
							{!isMobile && (
								<div className='absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-200 via-blue-200 to-green-200 hidden md:block' />
							)}

							<div className='space-y-8'>
								{/* Challenge */}
								{caseItem.challenge && (
									<TimelineCard
										icon={<Target className='h-7 w-7' />}
										title='Задача'
										content={caseItem.challenge}
										gradient='from-red-500 to-orange-500'
										bgGradient='from-red-50 to-orange-50'
										delay={0.1}
										isMobile={isMobile}
									/>
								)}

								{/* Solution */}
								{caseItem.solution && (
									<TimelineCard
										icon={<Lightbulb className='h-7 w-7' />}
										title='Наше решение'
										content={caseItem.solution}
										gradient='from-[#0B3B95] to-[#4c6fd9]'
										bgGradient='from-blue-50 to-indigo-50'
										delay={0.2}
										isMobile={isMobile}
									/>
								)}

								{/* Outcome */}
								{caseItem.outcome && (
									<TimelineCard
										icon={<TrendingUp className='h-7 w-7' />}
										title='Результат'
										content={caseItem.outcome}
										gradient='from-green-500 to-emerald-500'
										bgGradient='from-green-50 to-emerald-50'
										delay={0.3}
										isMobile={isMobile}
									/>
								)}

								{/* Fallback */}
								{!caseItem.challenge &&
									!caseItem.solution &&
									!caseItem.outcome && (
										<m.div
											variants={fadeInUp}
											className='rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 ring-1 ring-slate-200/70 shadow-lg sm:p-8'
										>
											<p className='text-base leading-relaxed text-slate-700'>
												{caseItem.detail}
											</p>
										</m.div>
									)}
							</div>
						</div>
					</m.div>

					{/* CTA Section */}
					<m.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className='relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl ring-1 ring-slate-200/80'
					>
						{/* Subtle gradient background */}
						<div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50' />

						{/* Decorative accent line */}
						<div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B3B95] via-[#4c6fd9] to-[#0B3B95]' />

						<div className='relative'>
							{/* Desktop: Split Layout | Mobile: Stack */}
							<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12'>
								{/* Left: Content */}
								<div className='flex-1 space-y-4'>
									<div className='inline-flex items-center gap-2 rounded-full bg-[#0B3B95]/10 px-4 py-1.5'>
										<Sparkles className='h-4 w-4 text-[#0B3B95]' />
										<span className='text-sm font-bold text-[#0B3B95]'>
											Давайте работать вместе
										</span>
									</div>

									<h3 className='text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight'>
										Готовы к таким же результатам?
									</h3>

									<p className='text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl'>
										Запишитесь на консультацию, чтобы обсудить задачу и узнать,
										как мы поможем добиться выдающихся результатов.
									</p>
								</div>

								{/* Right: CTA Button */}
								<div className='lg:shrink-0'>
									<m.div
										whileHover={isMobile ? {} : { scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Link
											href='/contact'
											className='group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0B3B95] to-[#1e4ba8] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0B3B95]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B3B95]/40'
										>
											Записаться на консультацию
											<ArrowUpRight className='h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
										</Link>
									</m.div>
								</div>
							</div>
						</div>
					</m.div>
				</div>
			</section>
		</LazyMotion>
	)
}

// Timeline Card Component
function TimelineCard({
	icon,
	title,
	content,
	gradient,
	bgGradient,
	delay,
	isMobile,
}: {
	icon: ReactNode
	title: string
	content: string
	gradient: string
	bgGradient: string
	delay: number
	isMobile: boolean
}) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	// Parallax отключен на мобильных
	const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50])
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		isMobile ? [1, 1, 1, 1] : [0, 1, 1, 0]
	)

	return (
		<m.div
			ref={ref}
			style={{ y, opacity, willChange: isMobile ? 'auto' : 'transform' }}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
			variants={{
				hidden: { opacity: 0, x: -30 },
				visible: {
					opacity: 1,
					x: 0,
					transition: {
						delay,
						duration: 0.6,
						ease: [0.22, 1, 0.36, 1] as const,
					},
				},
			}}
			whileHover={isMobile ? {} : { scale: 1.02, x: 10 }}
			className='group relative md:ml-24'
		>
			{/* Timeline Dot (Desktop) */}
			{!isMobile && (
				<m.div
					whileHover={{ scale: 1.3 }}
					className={`absolute -left-[102px] top-8 hidden h-6 w-6 rounded-full bg-gradient-to-br ${gradient} ring-4 ring-white shadow-lg md:block`}
				/>
			)}

			<div className='relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-slate-200/80 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-slate-300/80'>
				{/* Background Gradient */}
				{!isMobile && (
					<div
						className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
					/>
				)}

				<div className='relative flex items-start gap-5'>
					<m.div
						whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
						transition={{ duration: 0.6 }}
						className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
					>
						{icon}
					</m.div>

					<div className='flex-1 space-y-4'>
						<h3 className='text-xl font-black text-slate-900 sm:text-2xl md:text-3xl'>
							{title}
						</h3>
						<p className='text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg'>
							{content}
						</p>
					</div>
				</div>
			</div>
		</m.div>
	)
}
