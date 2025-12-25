'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const advantages = [
	{
		icon: Users,
		title: 'Командная работа',
		description:
			'Эффективность нашей работы строится на командной синергии. Взаимодействие юристов из разных практик позволяет решать широкий спектр задач максимально результативно.',
	},
	{
		icon: Shield,
		title: 'Конфиденциальность',
		description:
			'Защищаем данные клиентов и соблюдаем строгие протоколы. Внутренние стандарты позволяют работать прозрачно и при этом бережно относиться к информации.',
	},
	{
		icon: Zap,
		title: 'Скорость реакции',
		description:
			'Мы на связи 24/7 и ставим интересы клиента на первое место. Команда готова быстро отработать внезапные ситуации и обеспечить спокойствие и поддержку в нужный момент.',
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

export default function OurAdvantages() {
	return (
		<section
			className='py-8 sm:py-12 md:py-16 lg:py-20'
			data-nav-scheme='light'
		>
			<div className='mx-auto max-w-[1800px] px-4 sm:px-5 md:px-8 lg:px-10'>
				{/* Wrapper - адаптивные скругления и padding */}
				<div className='relative overflow-hidden rounded-3xl sm:rounded-[36px] md:rounded-[40px] bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 shadow-xl sm:shadow-2xl'>
					{/* Decorative gradient blobs - оптимизированы для мобильных */}
					<div className='pointer-events-none absolute inset-0 overflow-hidden'>
						<div className='absolute -left-16 sm:-left-20 top-10 sm:top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-br from-[#0B3B95]/10 to-blue-400/10 blur-2xl sm:blur-3xl' />
						<div className='absolute -right-16 sm:-right-20 bottom-10 sm:bottom-20 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-gradient-to-tl from-indigo-400/10 to-purple-400/10 blur-2xl sm:blur-3xl' />
						<div className='hidden sm:block absolute left-1/2 top-1/2 h-64 w-64 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300/5 to-purple-300/5 blur-3xl' />
					</div>

					{/* Pattern Background Lines - скрыто на мобильных для производительности */}
					<div className='hidden md:block pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(11,59,149,0.04),rgba(11,59,149,0.04)_1px,transparent_1px,transparent_24px)] opacity-50' />

					{/* Content */}
					<div className='relative'>
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4'
						>
							<a
								href='#advantages'
								className='group inline-flex items-center gap-2.5 sm:gap-3 text-sm'
							>
								<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)] transition-transform duration-300 group-hover:scale-110' />
								<span className='font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
									Наши преимущества
								</span>
							</a>
						</motion.div>

						{/* Content Grid - 1 колонка на мобильных */}
						<div className='grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14'>
							{/* Left Column - Image (показывается первой на мобильных) */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className='space-y-5 sm:space-y-6 order-1 lg:order-none'
							>
								{/* Main Office Image - адаптивный aspect ratio */}
								<div className='group relative aspect-[16/12] sm:aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[28px] bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl sm:shadow-2xl ring-2 ring-white/50'>
									<Image
										src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200'
										alt='Современный офис'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px'
										className='object-cover transition-transform duration-500 group-hover:scale-105'
									/>
									{/* Image overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-[#0B3B95]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								</div>
							</motion.div>

							{/* Right Column - Advantages Cards */}
							<motion.div
								variants={container}
								initial='hidden'
								whileInView='show'
								viewport={{ once: true, amount: 0.2 }}
								className='space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-none'
							>
								{advantages.map((advantage, index) => {
									const Icon = advantage.icon
									return (
										<motion.div
											key={advantage.title}
											variants={item}
											className='group relative overflow-hidden rounded-2xl sm:rounded-[20px] bg-white/80 p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg backdrop-blur-sm ring-1 ring-white/60 transition-all duration-300 hover:bg-white hover:shadow-xl hover:ring-[#0B3B95]/20'
										>
											{/* Background Gradient on Hover */}
											<div className='absolute inset-0 bg-gradient-to-br from-[#0B3B95]/5 via-blue-50/30 to-indigo-50/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

											<div className='relative flex gap-3 sm:gap-4'>
												{/* Icon - адаптивный размер */}
												<div className='flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-[16px] bg-gradient-to-br from-[#0B3B95] via-[#1e4ba8] to-[#4c6fd9] shadow-lg shadow-[#0B3B95]/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0B3B95]/40'>
													<Icon
														className='h-6 w-6 sm:h-7 sm:w-7 text-white'
														strokeWidth={2}
													/>
												</div>

												{/* Content - адаптивная типографика */}
												<div className='flex-1 space-y-1.5 sm:space-y-2'>
													<h3 className='text-base sm:text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#0B3B95]'>
														/ {advantage.title}
													</h3>
													<p className='text-xs sm:text-sm leading-relaxed text-slate-600'>
														{advantage.description}
													</p>
												</div>
											</div>

											{/* Decorative colored glow - меньше на мобильных */}
											<div className='absolute -right-6 -top-6 sm:-right-8 sm:-top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-[#0B3B95]/10 to-indigo-400/10 blur-xl sm:blur-2xl transition-all duration-300 group-hover:from-[#0B3B95]/20 group-hover:to-indigo-400/20' />
										</motion.div>
									)
								})}

								{/* Bottom Image - Handshake (показывается только на десктопе в правой колонке) */}
								<motion.div
									variants={item}
									className='hidden lg:block group relative aspect-[16/9] overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-2 ring-white/50'
								>
									<Image
										src='https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800'
										alt='Деловое рукопожатие'
										fill
										sizes='(max-width: 1024px) 0vw, 800px'
										className='object-cover transition-transform duration-500 group-hover:scale-105'
									/>
									{/* Image overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-[#0B3B95]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								</motion.div>
							</motion.div>
						</div>

						{/* Mobile-only Bottom Image - показывается под карточками на мобильных */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='lg:hidden mt-6 sm:mt-8 group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-[20px] bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-2 ring-white/50'
						>
							<Image
								src='https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800'
								alt='Деловое рукопожатие'
								fill
								sizes='(max-width: 768px) 100vw, 50vw'
								className='object-cover transition-transform duration-500 group-hover:scale-105'
							/>
							{/* Image overlay gradient */}
							<div className='absolute inset-0 bg-gradient-to-t from-[#0B3B95]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
