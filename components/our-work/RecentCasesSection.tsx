'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cases, type Case } from '@/lib/cases'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

function CaseCard({ slug, title, category, summary, people }: Case) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			className='group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(11,59,149,0.25)]'
		>
			{/* Gradient header - адаптивная высота */}
			<div className='relative h-24 sm:h-28 md:h-32 overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#eef4ff] to-[#e0ebff]'>
				{/* Animated orbs - упрощены на мобильных */}
				<motion.div
					className='absolute -left-8 sm:-left-12 -top-8 sm:-top-12 h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-[radial-gradient(circle_at_center,#6b8fff,transparent_70%)] opacity-50'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.5, 0.7, 0.5],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className='hidden sm:block absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,#4d73ff,transparent_65%)] opacity-40'
					animate={{
						scale: [1, 1.15, 1],
						opacity: [0.4, 0.6, 0.4],
					}}
					transition={{
						duration: 3.5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 0.5,
					}}
				/>
				<motion.div
					className='hidden sm:block absolute -bottom-6 -right-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,#0B3B95,transparent_60%)] opacity-30'
					animate={{
						scale: [1, 1.25, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>

				<span className='absolute left-4 top-4 sm:left-5 sm:top-5 inline-flex items-center rounded-full border border-white/60 bg-white/90 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-[#0B3B95]/20 group-hover:bg-[#0B3B95] group-hover:text-white'>
					{category}
				</span>
			</div>

			{/* Content - адаптивный padding */}
			<div className='flex flex-1 flex-col gap-4 sm:gap-5 px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 pt-4 sm:pt-5'>
				<div className='space-y-2 sm:space-y-3'>
					<h3 className='text-lg sm:text-xl md:text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#0B3B95]'>
						{title}
					</h3>
					<p className='text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3'>
						{summary}
					</p>
				</div>

				{/* Footer - адаптивный layout */}
				<div className='mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-2'>
					<div className='flex items-center -space-x-2 sm:-space-x-2.5'>
						{people.map((src, idx) => (
							<motion.div
								key={src + idx}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: idx * 0.1 }}
								whileHover={{ scale: 1.15, zIndex: 10 }}
							>
								<Image
									src={src}
									alt='член команды'
									width={36}
									height={36}
									className='h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-slate-100 transition-all duration-300 group-hover:border-[#0B3B95]/10'
								/>
							</motion.div>
						))}
					</div>
					<Link href={`/work/${slug}`} className='inline-flex w-full sm:w-auto'>
						<motion.span
							whileHover={{ x: 3 }}
							className='flex items-center justify-center sm:justify-start gap-1.5 rounded-full bg-[#0B3B95]/5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B3B95] transition-all duration-300 hover:bg-[#0B3B95] hover:text-white hover:shadow-lg w-full sm:w-auto touch-manipulation'
						>
							Подробнее
							<ArrowUpRight className='h-4 w-4' />
						</motion.span>
					</Link>
				</div>
			</div>
		</motion.div>
	)
}

export default function RecentCasesSection() {
	return (
		<section
			className='py-10 sm:py-12 md:py-16 lg:py-20'
			data-nav-scheme='light'
		>
			<div className='mx-auto max-w-[1800px] px-4 sm:px-5 md:px-6 lg:px-10'>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mb-6 sm:mb-8 md:mb-10 inline-flex items-center gap-2.5 sm:gap-3'
				>
					<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)]' />
					<span className='font-medium text-slate-700 text-sm sm:text-base'>
						Свежие кейсы
					</span>
				</motion.div>

				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.1 }}
					className='grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 xl:grid-cols-3'
				>
					{cases.map(caseItem => (
						<CaseCard key={caseItem.title} {...caseItem} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
