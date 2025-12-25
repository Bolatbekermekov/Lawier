'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cases, type Case } from '@/lib/cases'

const highlightedCases = cases.slice(0, 3)

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

function WorkCard({
	slug,
	title,
	category,
	summary,
	people,
}: Case) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			className='group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(11,59,149,0.25)]'
		>
			{/* Gradient header with improved aesthetics */}
			<div className='relative h-32 overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#eef4ff] to-[#e0ebff]'>
				<motion.div
					className='absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,#6b8fff,transparent_70%)] opacity-50'
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
					className='absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,#4d73ff,transparent_65%)] opacity-40'
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
					className='absolute -bottom-6 -right-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,#0B3B95,transparent_60%)] opacity-30'
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

				<span className='absolute left-5 top-5 inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-[#0B3B95]/20 group-hover:bg-[#0B3B95] group-hover:text-white'>
					{category}
				</span>
			</div>

			{/* Content */}
			<div className='flex flex-1 flex-col gap-5 px-5 pb-6 pt-5 sm:px-6'>
				<div className='space-y-3'>
					<h3 className='text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#0B3B95] sm:text-2xl'>
						{title}
					</h3>
					<p className='text-sm leading-relaxed text-slate-600'>{summary}</p>
				</div>

				<div className='mt-auto flex items-center justify-between gap-4 pt-2'>
					<div className='flex items-center -space-x-2.5'>
						{people.map((src, idx) => (
							<motion.div
								key={`${slug}-${src}-${idx}`}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: idx * 0.1 }}
								whileHover={{ scale: 1.15, zIndex: 10 }}
							>
								<Image
									src={src}
									alt='член команды'
									width={40}
									height={40}
									className='h-10 w-10 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-slate-100 transition-all duration-300 group-hover:border-[#0B3B95]/10'
								/>
							</motion.div>
						))}
					</div>
					<Link href={`/work/${slug}`} className='inline-flex'>
						<motion.span
							whileHover={{ x: 3 }}
							className='flex items-center gap-1.5 rounded-full bg-[#0B3B95]/5 px-4 py-2 text-sm font-semibold text-[#0B3B95] transition-all duration-300 hover:bg-[#0B3B95] hover:text-white hover:shadow-lg'
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

export default function OurWorkSection() {
	return (
		<section id='work' className='py-16' data-nav-scheme='light'>
			<div className='mx-auto px-4'>
				<div className='relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white'>
					<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,59,149,0.04),transparent_50%)]' />

					<div className='relative flex flex-col gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:px-10'>
						{/* Header */}
						<div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
							<a
								href='#work'
								className='group inline-flex items-center gap-3 text-sm transition-all duration-300'
							>
								<span className='h-2.5 w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)] transition-transform duration-300 group-hover:scale-110' />
								<span className='font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
									Наши кейсы
								</span>
							</a>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								<Link
									href='/work'
									className='inline-flex items-center gap-2 self-start rounded-full border border-[#0B3B95]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#0B3B95] shadow-[0_6px_24px_-12px_rgba(11,59,149,0.3)] transition-all duration-300 hover:border-[#0B3B95] hover:bg-[#0B3B95] hover:text-white hover:shadow-[0_12px_32px_-8px_rgba(11,59,149,0.4)]'
								>
									Смотреть все
									<ArrowUpRight className='h-4 w-4' />
								</Link>
							</motion.div>
						</div>

						{/* Cards Grid with Stagger Animation */}
						<motion.div
							variants={container}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.2 }}
							className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'
						>
							{highlightedCases.map(item => (
								<WorkCard key={item.title} {...item} />
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
