'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-8 sm:py-12 md:py-16 lg:py-20'>
			<div className='mx-auto max-w-[1800px]'>
				<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,59,149,0.05),transparent_60%)]' />

				<div className='relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-10'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='space-y-5 sm:space-y-6'
					>
						<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900'>
							Наши <span className='text-[#0B3B95]'>кейсы</span>
						</h1>

						{/* Mobile: стек, Desktop: горизонтальный layout */}
						<div className='flex flex-col gap-4 sm:gap-6 md:flex-row md:items-start md:gap-12'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className='group inline-flex items-center gap-2.5 sm:gap-3'
							>
								<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)]' />
								<span className='font-medium text-slate-700 text-sm sm:text-base'>
									Обзор
								</span>
							</motion.div>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className='max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600'
							>
								У нашей фирмы солидный опыт успешных проектов в разных областях
								права. От корпоративных реструктуризаций до коммерческих
								споров и IP-кейсов — мы предлагаем стратегические решения и
								эффективное представительство. Благодаря тщательному анализу и
								инновационным стратегиям обеспечиваем клиентам выгодные
								результаты даже в сложных делах.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
