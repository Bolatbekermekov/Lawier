'use client'

import { Card } from '@/components/ui/card'

const bullets = [
	{ id: 'intro', label: 'О компании' },
	{ id: 'why', label: 'Почему мы' },
]

const stats = [
	{
		value: '600+',
		title: '',
		desc: 'консультаций проведено за всю историю компании',
	},
	{
		value: '12',
		title: 'барристеров',
		desc: 'квалифицированные юристы с международным признанием',
	},
	{
		value: '32',
		title: 'партнера',
		desc: 'известные отраслевые лидеры мирового уровня',
	},
	{
		value: '26',
		title: 'раз',
		desc: 'признаны «Лучшей юридической фирмой в Англии» профессиональными рейтингами',
	},
	{
		value: '40',
		title: 'миллионов',
		desc: 'инвестиций привлечено в Англию благодаря нашей работе',
	},
]

export default function IntroSection() {
	return (
		<section className='py-8 sm:py-12 md:py-16' data-nav-scheme='light'>
			<div className='mx-auto px-4 sm:px-5'>
				{/* большой карточный контейнер */}
				<div className='relative overflow-hidden rounded-2xl sm:rounded-[28px] ring-1 ring-black/5 bg-gradient-to-b from-white to-[#EEF3FF] p-4 sm:p-6 md:p-8 lg:p-10'>
					{/* лёгкий декоративный паттерн */}
					<div className='pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(50%_40%_at_50%_0%,black,transparent)]'>
						<div className='absolute -right-20 -bottom-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#bcd3ff,transparent_60%)]' />
						<div className='absolute -left-28 -bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#dbe6ff,transparent_60%)]' />
					</div>

					{/* контент */}
					<div className='relative grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[180px,1fr] lg:grid-cols-[210px,1fr]'>
						{/* левая колонка — bullets (скрыта на мобильных) */}
						<aside className='hidden md:flex md:flex-col space-y-8 lg:space-y-10'>
							{bullets.map(b => (
								<a
									key={b.id}
									href={`#${b.id}`}
									className='group flex items-center gap-3 text-sm py-1'
								>
									<span className='h-2.5 w-2.5 shrink-0 rounded-full bg-primary/90 shadow-[0_0_0_4px_rgba(2,91,255,0.1)]' />
									<span className='text-slate-600 group-hover:text-slate-900 transition-colors'>
										{b.label}
									</span>
								</a>
							))}
						</aside>

						{/* мобильная версия bullets (горизонтальная) */}
						<div className='flex md:hidden gap-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide'>
							{bullets.map(b => (
								<a
									key={b.id}
									href={`#${b.id}`}
									className='group flex items-center gap-2 text-sm py-2 px-3 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-black/5 whitespace-nowrap shrink-0'
								>
									<span className='h-2 w-2 rounded-full bg-primary/90' />
									<span className='text-slate-600 text-xs font-medium'>
										{b.label}
									</span>
								</a>
							))}
						</div>

						{/* правая колонка — заголовок + сетка */}
						<div className='space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24'>
							{/* Introduction секция */}
							<div id='intro'>
								{/* Адаптивный заголовок с clamp */}
								<h2 className='text-lg leading-relaxed sm:text-xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-relaxed font-semibold max-w-3xl mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
									Мы — ведущая английская юридическая фирма, работающая в
									соответствии с{' '}
									<span className='text-primary'>
										международными стандартами юридических услуг.
									</span>
								</h2>

								{/* сетка карточек - оптимизированная для мобильных */}
								<div className='grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-12 md:mt-16 lg:mt-24'>
									{stats.map((s, i) => (
										<Card
											key={i}
											className='relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow'
										>
											{/* декоративный «шарик» в углу - меньше на мобильных */}
											<div className='pointer-events-none absolute -top-3 -right-3 sm:-top-5 sm:-right-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#c8d8ff,transparent_60%)]' />

											<div className='relative'>
												{/* Адаптивный размер значения */}
												<div className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B95] leading-none'>
													{s.value}
													{s.title && (
														<span className='ml-1 text-xs sm:text-sm md:text-base font-medium text-slate-600 block sm:inline mt-1 sm:mt-0'>
															{s.title}
														</span>
													)}
												</div>

												{/* Адаптивное описание */}
												<p className='mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[46ch]'>
													{s.desc}
												</p>
											</div>
										</Card>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /большой контейнер */}
			</div>
		</section>
	)
}
