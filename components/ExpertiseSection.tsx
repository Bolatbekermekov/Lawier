'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Item = { label: string }

const practices: Item[] = [
	{ label: '/ Корпоративное право' },
	{ label: '/ Уголовное право' },
	{ label: '/ Коммерческое право' },
	{ label: '/ Бухгалтерские услуги' },
	{ label: '/ Миграционное право' },
	{ label: '/ Страхование' },
]

const industries: Item[] = [
	{ label: '/ Частный капитал' },
	{ label: '/ Информационные технологии' },
	{ label: '/ Недвижимость и строительство' },
	{ label: '/ Авиация и автоиндустрия' },
]

function ExpertiseItem({ label }: Item) {
	return (
		<div className='group flex items-center gap-3 border-b border-slate-200/80 pb-3 transition-all duration-300 hover:-translate-y-[1px]'>
			<span className='text-[15px] font-medium text-slate-800 transition-colors duration-300 group-hover:text-[#0B3B95]'>
				{label}
			</span>
		</div>
	)
}

function CategoryBlock({ title, items }: { title: string; items: Item[] }) {
	return (
		<div className='grid gap-4 md:grid-cols-[140px,1fr] md:items-start'>
			<span className='text-xs uppercase tracking-[0.16em] text-slate-500'>
				{title}
			</span>
			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-6'>
				{items.map(item => (
					<ExpertiseItem key={item.label} label={item.label} />
				))}
			</div>
		</div>
	)
}

export default function ExpertiseSection() {
	return (
		<section className='py-12 sm:py-14 md:py-16' data-nav-scheme='light'>
			<div className='mx-auto px-4 sm:px-5'>
				<div
					id='expertise'
					className='relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white'
				>
					<div className='pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_30%_0%,black,transparent_70%)]'>
						<div className='absolute -right-24 -top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#cfdcff,transparent_60%)]' />
						<div className='absolute -left-24 -bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#dfe8ff,transparent_60%)]' />
					</div>

					<div className='relative grid gap-8 sm:gap-10 md:grid-cols-[140px,1fr] md:gap-16 px-5 pb-9 pt-10 sm:px-6 sm:pb-10 sm:pt-12 md:px-10'>
						<aside className='flex flex-col gap-6'>
							<a
								href='#expertise'
								className='group flex items-center gap-3 text-sm transition-all duration-300'
							>
								<span className='h-2.5 w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(1,43,150,0.14)] transition-transform duration-300 group-hover:scale-110' />
								<span className='text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
									Экспертиза
								</span>
							</a>
						</aside>

						<div className='relative space-y-10'>
							<div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
								<div className='space-y-1'>
									<p className='text-xs uppercase tracking-[0.16em] text-slate-500'>
										Экспертиза
									</p>
									<h3 className='text-xl sm:text-2xl font-semibold text-slate-900'>
										Практики и отрасли
									</h3>
								</div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.98 }}
								>
									<Link
										href='/expertise'
										className='inline-flex items-center gap-2 self-start rounded-full border border-[#0B3B95]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#0B3B95] shadow-[0_6px_24px_-12px_rgba(11,59,149,0.3)] transition-all duration-300 hover:border-[#0B3B95] hover:bg-[#0B3B95] hover:text-white hover:shadow-[0_12px_32px_-8px_rgba(11,59,149,0.4)]'
									>
										Смотреть все
									</Link>
								</motion.div>
							</div>

							<div className='space-y-10'>
								<CategoryBlock title='Практики' items={practices} />
								<div className='h-px bg-slate-200/80' />
								<CategoryBlock title='Отрасли' items={industries} />
							</div>
						</div>
					</div>

					{/* Mission area */}
					<div
						id='mission'
						className='relative mt-4 bg-white px-5 py-10 sm:px-6 sm:py-12 md:px-10 mb-6 overflow-hidden'
					>
						<div className='pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(1,43,150,0.08),rgba(1,43,150,0.08)_1px,transparent_1px,transparent_24px)] opacity-60' />

						<div className='relative grid gap-8 md:grid-cols-[140px,1fr] md:gap-14'>
							<aside className='flex flex-col gap-4'>
								<a
									href='#mission'
									className='group flex items-center gap-3 text-sm transition-all duration-300'
								>
									<span className='h-2.5 w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(1,43,150,0.14)] transition-transform duration-300 group-hover:scale-110' />
									<span className='text-slate-700 transition-colors duration-300 group-hover:text-[#0B3B95]'>
										Миссия
									</span>
								</a>
							</aside>

							<div className='relative'>
								<h3 className='text-xl sm:text-2xl font-semibold text-slate-900'>
									Миссия
								</h3>
								<p className='mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 md:text-xl'>
									Мы ставим потребности клиента на первое место и быстро
									реагируем на запросы. Это{' '}
									<span className='font-semibold text-[#0B3B95]'>ключевые принципы</span>
									, которые помогают находить эффективные юридические решения.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
