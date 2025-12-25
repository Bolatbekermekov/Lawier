'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
	{
		name: 'Matthew Hunt',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
	},
	{
		name: 'Sarah Johnson',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop',
	},
	{
		name: 'David Chen',
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
	},
]

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

export default function AboutHero() {
	return (
		<section className='py-8 sm:py-12 md:py-16 lg:py-20'>
			<div className='mx-auto max-w-[1800px] px-4 sm:px-5 md:px-8 lg:px-10'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4'
				>
					<a
						href='#about'
						className='group inline-flex items-center gap-2.5 sm:gap-3 text-sm'
					>
						<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)] transition-transform duration-300 group-hover:scale-110' />
						<span className='font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
							О НАС
						</span>
					</a>

					{/* Адаптивный заголовок */}
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-tight text-slate-900'>
						Надёжные. Опытные.
						<br />
						Лидирующие.
					</h1>
				</motion.div>

				{/* Content Grid - оптимизирован для мобильных */}
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
					className='grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2'
				>
					{/* Left Column */}
					<motion.div variants={item} className='space-y-5 sm:space-y-6'>
						{/* Office Image - адаптивный aspect ratio */}
						<div className='group relative aspect-[16/12] sm:aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200'>
							<Image
								src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200'
								alt='Офис'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px'
								className='object-cover transition-transform duration-500 group-hover:scale-105'
								priority
							/>
						</div>

						{/* Description */}
						<div className='space-y-4'>
							<p className='text-sm sm:text-base md:text-lg leading-relaxed text-slate-700'>
								Наша организация создана, чтобы предоставлять первоклассные
								юридические и бухгалтерские услуги клиентам, которые ценят
								экспертизу, надёжность и инновационные решения. Многолетний
								опыт в корпоративном, коммерческом и миграционном праве позволяет
								нам быстро реагировать и фокусироваться на интересах клиента.
							</p>

							{/* Team Avatars - оптимизированы для touch */}
							<div className='flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4'>
								<div className='flex -space-x-2 sm:-space-x-3'>
									{teamMembers.map((member, idx) => (
										<motion.div
											key={member.name}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: idx * 0.1 }}
											whileHover={{ scale: 1.1, zIndex: 10 }}
											className='relative'
										>
											<Image
												src={member.image}
												alt={member.name}
												width={40}
												height={40}
												className='h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-slate-100'
											/>
										</motion.div>
									))}
								</div>
								<div>
									<p className='text-xs sm:text-sm font-semibold text-slate-900'>
										Matthew Hunt
									</p>
									<p className='text-[10px] sm:text-xs text-slate-600'>
										и ещё {teamMembers.length - 1} специалиста
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Column */}
					<motion.div variants={item} className='space-y-5 sm:space-y-6'>
						{/* Stats Card - адаптивный padding */}
						<div className='space-y-3 sm:space-y-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-6 sm:p-7 md:p-8'>
							<h3 className='text-xl sm:text-2xl font-bold text-slate-900'>
								Почему выбирают нас
							</h3>
							<p className='text-sm sm:text-base leading-relaxed text-slate-700'>
								Стратегические решения под конкретного клиента создают долгосрочную
								ценность. От сложных юридических вопросов до бухгалтерского
								сопровождения — мы обеспечиваем результат с профессионализмом и
								прозрачностью.
							</p>

							{/* Stats Grid - оптимизирована для мобильных */}
							<div className='grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4'>
								<div className='space-y-0.5 sm:space-y-1'>
									<p className='text-2xl sm:text-3xl font-bold text-[#0B3B95]'>
										15+
									</p>
									<p className='text-xs sm:text-sm text-slate-600 leading-tight'>
										Лет опыта
									</p>
								</div>
								<div className='space-y-0.5 sm:space-y-1'>
									<p className='text-2xl sm:text-3xl font-bold text-[#0B3B95]'>
										500+
									</p>
									<p className='text-xs sm:text-sm text-slate-600 leading-tight'>
										Выигранных дел
									</p>
								</div>
								<div className='space-y-0.5 sm:space-y-1'>
									<p className='text-2xl sm:text-3xl font-bold text-[#0B3B95]'>
										98%
									</p>
									<p className='text-xs sm:text-sm text-slate-600 leading-tight'>
										Успех
									</p>
								</div>
								<div className='space-y-0.5 sm:space-y-1'>
									<p className='text-2xl sm:text-3xl font-bold text-[#0B3B95]'>
										24/7
									</p>
									<p className='text-xs sm:text-sm text-slate-600 leading-tight'>
										Поддержка
									</p>
								</div>
							</div>
						</div>

						{/* Team Image - адаптивный aspect ratio */}
						<div className='group relative aspect-[16/12] sm:aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200'>
							<Image
								src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200'
								alt='Совместная работа команды'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px'
								className='object-cover transition-transform duration-500 group-hover:scale-105'
							/>
						</div>

						{/* CTA Button - touch-friendly */}
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B3B95] px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0a3280] hover:shadow-xl md:w-auto touch-manipulation'
						>
							Узнать больше о команде
							<ArrowRight className='h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1' />
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
