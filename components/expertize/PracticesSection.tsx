'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	Building2,
	Calculator,
	Code,
	FileCheck,
	Globe,
	Heart,
	Home,
	Scale,
	Shield,
	TrendingUp,
	Users,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const practices = [
	{
		id: 'corporate',
		title: 'Корпоративное право',
		icon: Building2,
		description:
			'M&A — один из приоритетов фирмы. Мы специализируемся на private equity, сделках с недвижимостью, банкротстве, ценных бумагах и антимонопольном регулировании. Опытная команда ведёт клиентов через сложные реструктуризации.',
		highlights: ['Сделки M&A', 'Ценные бумаги', 'Корпоративное управление'],
		image: null,
	},
	{
		id: 'commercial',
		title: 'Коммерческое право',
		icon: Scale,
		description:
			'Предоставляем качественную поддержку в спорах о нарушении авторских прав, правах на базы данных и других IP-конфликтах. Помогаем работать с коммерческими договорами и торговым регулированием.',
		highlights: ['Защита IP', 'Договорное право', 'Торговые споры'],
		image: null,
	},
	{
		id: 'migration',
		title: 'Миграционное право',
		icon: Globe,
		description:
			'Миграционное право регулирует перемещение людей и изменение места проживания или пребывания. Мы ведём визовые заявки, разрешения на работу, вопросы гражданства и кейсы по убежищу.',
		highlights: ['Визы', 'Разрешения на работу', 'Гражданство'],
		image:
			'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop&q=80',
	},
	{
		id: 'criminal',
		title: 'Уголовное право',
		icon: Shield,
		description:
			'Защита прав и интересов в уголовных процессах — приоритетное направление. Мы обеспечиваем активное представительство на всех стадиях производства.',
		highlights: ['Уголовная защита', 'Судебное представительство', 'Апелляции'],
		image: null,
	},
	{
		id: 'accounting',
		title: 'Бухгалтерские услуги',
		icon: Calculator,
		description:
			'Предоставляем качественные бухгалтерские услуги для компаний любого масштаба. Любая выбранная система налогообложения не мешает корректному учёту и своевременной отчётности.',
		highlights: ['Финансовая отчётность', 'Налоговый комплаенс', 'Поддержка аудита'],
		image: null,
	},
	{
		id: 'insurance',
		title: 'Страхование',
		icon: FileCheck,
		description:
			'Помогаем со страховыми вопросами: анализ полисов, подача требований, представительство в спорах и переговоры со страховщиками.',
		highlights: ['Подача требований', 'Анализ полисов', 'Споры со страховщиками'],
		image: null,
	},
	{
		id: 'family',
		title: 'Семейное право',
		icon: Users,
		description:
			'Семейное право требует деликатного подхода к спорам между близкими. Мы ведём бракоразводные процессы, опеку, алименты и раздел имущества.',
		highlights: ['Развод', 'Опека', 'Раздел имущества'],
		image: null,
	},
]

const industries = [
	{
		id: 'tech',
		title: 'Технологии и софт',
		icon: Code,
		description:
			'Специализированные услуги для технологических компаний: лицензирование софта, защита данных, охрана интеллектуальной собственности и комплаенс в цифровой сфере.',
		highlights: ['Лицензирование софта', 'Защита данных', 'Охрана IP'],
		image: null,
	},
	{
		id: 'healthcare',
		title: 'Здравоохранение',
		icon: Heart,
		description:
			'Комплексная поддержка для медицинских организаций: защита по искам, регуляторный комплаенс, сделки и вопросы конфиденциальности пациентов.',
		highlights: ['Защита от исков', 'Медицинский комплаенс', 'Сделки в здравоохранении'],
		image: null,
	},
	{
		id: 'finance',
		title: 'Финансовые услуги',
		icon: TrendingUp,
		description:
			'Экспертиза для банков, инвесткомпаний и финтеха по ценным бумагам, комплаенсу, M&A и финансовым спорам.',
		highlights: ['Ценные бумаги', 'Банковское регулирование', 'Финтех-комплаенс'],
		image: null,
	},
	{
		id: 'realestate',
		title: 'Недвижимость',
		icon: Home,
		description:
			'Полное сопровождение сделок с недвижимостью: сделки, девелопмент, зонирование, аренда и судебные споры.',
		highlights: ['Сделки с объектами', 'Зонирование', 'Девелопмент'],
		image: null,
	},
]

export default function PracticesSection() {
	const [activeTab, setActiveTab] = useState<'practices' | 'industries'>(
		'practices'
	)
	const currentData = activeTab === 'practices' ? practices : industries

	return (
		<section className='relative overflow-hidden bg-gradient-to-b from-white via-[#fafbff] to-white py-10 sm:py-12 md:py-16 lg:py-20'>
			{/* Animated background gradient - упрощен для мобильных */}
			<div className='pointer-events-none absolute inset-0'>
				<motion.div
					className='absolute -left-1/4 top-0 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] md:h-[800px] md:w-[800px] rounded-full bg-[#0B3B95]/5 blur-2xl sm:blur-3xl'
					animate={{
						x: [0, 100, 0],
						y: [0, 50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className='absolute -right-1/4 bottom-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-blue-400/5 blur-2xl sm:blur-3xl'
					animate={{
						x: [0, -80, 0],
						y: [0, -40, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			</div>

			<div className='mx-auto max-w-[1800px]'>
				<div className='relative mx-auto px-4 sm:px-5 md:px-6 lg:px-10'>
					{/* Custom Animated Tabs - оптимизированы для touch */}
					<div className='mb-10 sm:mb-12 md:mb-16 flex justify-center'>
						<div className='relative inline-flex w-full max-w-sm sm:w-auto gap-1 rounded-xl sm:rounded-2xl bg-white p-1 sm:p-1.5 shadow-lg ring-1 ring-slate-200/80'>
							{/* Animated background indicator */}
							<motion.div
								className='absolute h-[calc(100%-8px)] sm:h-[calc(100%-12px)] rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0B3B95] to-[#1e5bc6] shadow-md'
								layoutId='activeTab'
								initial={false}
								transition={{
									type: 'spring',
									stiffness: 500,
									damping: 30,
								}}
								style={{
									width:
										activeTab === 'practices'
											? 'calc(50% - 4px)'
											: 'calc(50% - 4px)',
									left: activeTab === 'practices' ? '4px' : 'calc(50% + 0px)',
								}}
							/>

							<button
								onClick={() => setActiveTab('practices')}
								className={`relative z-10 flex-1 rounded-lg sm:rounded-xl px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold transition-colors duration-300 touch-manipulation ${
									activeTab === 'practices'
										? 'text-white'
										: 'text-slate-600 hover:text-slate-900'
								}`}
							>
								Практики
							</button>
							<button
								onClick={() => setActiveTab('industries')}
								className={`relative z-10 flex-1 rounded-lg sm:rounded-xl px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold transition-colors duration-300 touch-manipulation ${
									activeTab === 'industries'
										? 'text-white'
										: 'text-slate-600 hover:text-slate-900'
								}`}
							>
								Отрасли
							</button>
						</div>
					</div>

					{/* Bento Grid Layout - адаптирован для мобильных */}
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className='grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
						>
							{currentData.map((item, index) => {
								const IconComponent = item.icon
								return (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: index * 0.05 }}
										whileHover={{ y: -8 }}
										className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(11,59,149,0.25)] ${
											item.image ? 'sm:col-span-2 lg:col-span-2' : ''
										}`}
									>
										{/* Hover gradient effect */}
										<div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B3B95]/0 via-transparent to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10' />

										<div className='relative p-5 sm:p-6 md:p-8'>
											{/* Icon с gradient background */}
											<div className='mb-4 sm:mb-5 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0B3B95] to-[#1e5bc6] shadow-lg ring-4 ring-white/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-white'>
												<IconComponent
													className='h-7 w-7 sm:h-8 sm:w-8 text-white'
													strokeWidth={2}
												/>
											</div>

											{/* Title */}
											<h3 className='mb-2.5 sm:mb-3 text-xl sm:text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#0B3B95]'>
												{item.title}
											</h3>

											{/* Description */}
											<p className='mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-slate-600'>
												{item.description}
											</p>

											{/* Highlights Pills */}
											<div className='flex flex-wrap gap-1.5 sm:gap-2'>
												{item.highlights.map(highlight => (
													<span
														key={highlight}
														className='inline-flex items-center rounded-full bg-[#0B3B95]/5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-[#0B3B95] ring-1 ring-[#0B3B95]/10 transition-all duration-300 group-hover:bg-[#0B3B95]/10 group-hover:ring-[#0B3B95]/20'
													>
														{highlight}
													</span>
												))}
											</div>
										</div>

										{/* Optional Image */}
										{item.image && (
											<div className='relative h-40 sm:h-48 md:h-56 overflow-hidden'>
												<Image
													src={item.image}
													alt={item.title}
													fill
													sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw'
													className='object-cover transition-transform duration-700 group-hover:scale-110'
												/>
												<div className='absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent' />
											</div>
										)}
									</motion.div>
								)
							})}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}
