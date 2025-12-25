'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const reviews = [
	{
		id: 1,
		name: 'Christian Adams',
		position: 'CEO компании Tech Innovations',
		date: 'Март 2024',
		text: 'Выбор Legal Experts стал лучшим решением для моих юридических задач. Команда внимательна к деталям и обеспечивает безупречный процесс.',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
	},
	{
		id: 2,
		name: 'Andy Potter',
		position: 'CEO компании International Market',
		date: 'Апрель 2024',
		text: 'Рад поделиться опытом с «Law». Их профессионализм, персональный подход и стремление к качеству произвели впечатление.',
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop',
	},
	{
		id: 3,
		name: 'Sarah Johnson',
		position: 'CEO компании ABC Company',
		date: 'Май 2024',
		text: 'Команда превзошла ожидания: профессиональные юристы и безупречный сервис.',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
	},
]

export default function ValueAndReviews() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const paginate = (newDirection: number) => {
		setCurrentIndex(prevIndex => {
			let nextIndex = prevIndex + newDirection
			if (nextIndex < 0) nextIndex = reviews.length - 1
			if (nextIndex >= reviews.length) nextIndex = 0
			return nextIndex
		})
	}

	return (
		<section className='relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'>
			{/* Decorative Background Elements - упрощены для мобильных */}
			<div className='absolute inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute -left-16 sm:-left-24 top-10 sm:top-20 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 opacity-20 sm:opacity-30 blur-2xl sm:blur-3xl' />
				<div className='absolute -right-20 sm:-right-32 bottom-10 sm:bottom-20 h-80 w-80 sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-tl from-violet-100 via-blue-100 to-indigo-100 opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl' />
				<div className='hidden md:block absolute left-1/2 -translate-x-1/2 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 opacity-20 blur-2xl' />
			</div>

			<div className='relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6'>
				{/* Value Section */}
				<div className='mb-12 sm:mb-16 md:mb-20 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr,2fr] lg:items-center'>
					{/* Geometric Shape Design - упрощен для мобильных */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className='flex justify-center lg:justify-start'
					>
						<div className='relative h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48'>
							{/* Animated rotating square - скрыт на маленьких экранах для производительности */}
							<motion.div
								animate={{
									rotate: [0, 360],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
								}}
								className='hidden sm:block absolute inset-0 rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-[#0B3B95] via-[#1e4ba8] to-[#4c6fd9] opacity-20 blur-xl'
							/>

							{/* Main geometric container */}
							<div className='relative h-full w-full rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-1 shadow-xl sm:shadow-2xl'>
								{/* Inner shape with gradient border */}
								<div className='h-full w-full rounded-[26px] md:rounded-[30px] bg-white p-6 sm:p-7 md:p-8 flex items-center justify-center'>
									{/* Layered geometric shapes - упрощено для мобильных */}
									<div className='relative h-full w-full'>
										{/* Background square */}
										<motion.div
											animate={{
												scale: [1, 1.05, 1],
												rotate: [0, 5, 0],
											}}
											transition={{
												duration: 4,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
											className='absolute inset-3 sm:inset-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0B3B95]/10 to-purple-500/10'
										/>

										{/* Middle square */}
										<motion.div
											animate={{
												scale: [1, 1.08, 1],
												rotate: [0, -5, 0],
											}}
											transition={{
												duration: 3.5,
												repeat: Infinity,
												ease: 'easeInOut',
												delay: 0.5,
											}}
											className='absolute inset-6 sm:inset-8 rounded-lg sm:rounded-xl bg-gradient-to-tl from-[#0B3B95]/20 to-indigo-500/20'
										/>

										{/* Center square */}
										<motion.div
											animate={{
												scale: [1, 1.1, 1],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: 'easeInOut',
												delay: 1,
											}}
											className='absolute inset-9 sm:inset-12 rounded-md sm:rounded-lg bg-gradient-to-br from-[#0B3B95] to-[#4c6fd9] shadow-lg flex items-center justify-center'
										>
											{/* Small inner accent */}
											<div className='h-6 w-6 sm:h-8 sm:w-8 rounded-md bg-white/30 backdrop-blur-sm' />
										</motion.div>
									</div>
								</div>
							</div>

							{/* Floating particles - скрыты на мобильных для производительности */}
							<motion.div
								animate={{
									y: [-20, 20, -20],
									x: [10, -10, 10],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className='hidden sm:block absolute -right-4 top-8 h-6 w-6 rounded-full bg-[#0B3B95]/20 blur-sm'
							/>
							<motion.div
								animate={{
									y: [20, -20, 20],
									x: [-10, 10, -10],
								}}
								transition={{
									duration: 4.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className='hidden sm:block absolute -left-4 bottom-8 h-8 w-8 rounded-full bg-indigo-500/20 blur-sm'
							/>
						</div>
					</motion.div>

					{/* Value Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
						className='space-y-4 sm:space-y-5 md:space-y-6'
					>
						{/* Badge */}
						<a
							href='#value'
							className='group inline-flex items-center gap-2.5 sm:gap-3 text-sm'
						>
							<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)] transition-transform duration-300 group-hover:scale-110' />
							<span className='font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
								Ценности
							</span>
						</a>

						{/* Title with Pattern Background */}
						<div className='relative overflow-hidden py-1 sm:py-2'>
							{/* Pattern Background Lines - скрыто на маленьких экранах */}
							<div className='hidden sm:block pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(11,59,149,0.06),rgba(11,59,149,0.06)_1px,transparent_1px,transparent_24px)] opacity-60' />

							{/* Lighter overlay */}
							<div className='hidden sm:block pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10' />

							{/* Content - адаптивная типографика */}
							<h2 className='relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] sm:leading-tight text-slate-900'>
								Используем юридическую экспертизу, чтобы{' '}
								<span className='text-[#0B3B95]'>усилить</span> позиции людей и
								компаний и защитить их права.
							</h2>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Reviews Section */}
			<div className='mx-auto max-w-[1800px] px-4 sm:px-5 md:px-6'>
				<div className='space-y-6 sm:space-y-8'>
					{/* Header */}
					<a
						href='#reviews'
						className='group inline-flex items-center gap-2.5 sm:gap-3 text-sm'
					>
						<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)] transition-transform duration-300 group-hover:scale-110' />
						<span className='font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
							Отзывы
						</span>
					</a>

					{/* Carousel - оптимизирован для touch */}
					<div className='relative'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.3 }}
							>
								{reviews.map((review, index) => {
									if (index !== currentIndex) return null

									return (
										<motion.div
											key={review.id}
											className='relative rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-xl ring-1 ring-slate-200/80'
										>
											<div className='grid gap-6 sm:gap-8 lg:grid-cols-3'>
												{/* Current Review - Main Card */}
												<div className='lg:col-span-2'>
													{/* Quote Icon - адаптивный размер */}
													<div className='mb-4 sm:mb-5 md:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50'>
														<Quote className='h-6 w-6 sm:h-7 sm:w-7 text-[#0B3B95]' />
													</div>

													{/* Review Text - адаптивная типографика */}
													<blockquote className='mb-5 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-700'>
														"{review.text}"
													</blockquote>

													{/* Author Info - адаптивный layout */}
													<div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4'>
														<div className='flex items-center gap-3 sm:gap-4 flex-1'>
															<div className='relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full ring-2 ring-slate-200 shrink-0'>
																<Image
																	src={review.image}
																	alt={review.name}
																	fill
																	sizes='64px'
																	className='object-cover'
																/>
															</div>
															<div className='flex-1 min-w-0'>
																<h4 className='text-base sm:text-lg font-bold text-slate-900 truncate'>
																	{review.name}
																</h4>
																<p className='text-xs sm:text-sm text-slate-600 truncate'>
																	{review.position}
																</p>
															</div>
														</div>
														<time className='text-xs sm:text-sm text-slate-500 shrink-0'>
															{review.date}
														</time>
													</div>
												</div>

												{/* Side Preview Cards - только на больших экранах */}
												<div className='hidden lg:flex lg:flex-col gap-4'>
													{reviews
														.filter((_, i) => i !== currentIndex)
														.slice(0, 2)
														.map(previewReview => (
															<div
																key={previewReview.id}
																className='rounded-2xl bg-slate-50 p-4 opacity-50'
															>
																<div className='flex items-center gap-3'>
																	<div className='relative h-10 w-10 overflow-hidden rounded-full shrink-0'>
																		<Image
																			src={previewReview.image}
																			alt={previewReview.name}
																			fill
																			sizes='40px'
																			className='object-cover'
																		/>
																	</div>
																	<div className='min-w-0 flex-1'>
																		<p className='text-sm font-semibold text-slate-900 truncate'>
																			{previewReview.name}
																		</p>
																		<p className='text-xs text-slate-600 truncate'>
																			{previewReview.position}
																		</p>
																	</div>
																</div>
																<p className='mt-3 text-xs text-slate-600 line-clamp-2'>
																	{previewReview.text}
																</p>
															</div>
														))}
												</div>
											</div>

											{/* Decorative gradient - меньше на мобильных */}
											<div className='absolute -right-8 sm:-right-12 -top-8 sm:-top-12 h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl sm:blur-3xl' />
										</motion.div>
									)
								})}
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Navigation - touch-friendly размеры */}
					<div className='flex items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4'>
						{/* Left Arrow - увеличен для touch */}
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => paginate(-1)}
							className='flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0B3B95] text-white shadow-lg transition-all duration-300 hover:bg-[#0d4bb3] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#0B3B95]/30 touch-manipulation'
							aria-label='Предыдущий отзыв'
						>
							<ChevronLeft className='h-5 w-5' />
						</motion.button>

						{/* Dots - увеличены для touch */}
						<div className='flex gap-2'>
							{reviews.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`h-3 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
										index === currentIndex
											? 'w-10 bg-[#0B3B95]'
											: 'w-3 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
									}`}
									aria-label={`Перейти к отзыву ${index + 1}`}
								/>
							))}
						</div>

						{/* Right Arrow - увеличен для touch */}
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => paginate(1)}
							className='flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0B3B95] text-white shadow-lg transition-all duration-300 hover:bg-[#0d4bb3] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#0B3B95]/30 touch-manipulation'
							aria-label='Следующий отзыв'
						>
							<ChevronRight className='h-5 w-5' />
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	)
}
