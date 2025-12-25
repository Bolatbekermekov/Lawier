'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight, Play, Scale } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const links: { href: string; label: string }[] = [
	{ href: '#expertise', label: 'Экспертиза' },
	{ href: '/about', label: 'О нас' },
	{ href: '#work', label: 'Наши кейсы' },
	{ href: '#team', label: 'Команда' },
	{ href: '#blog', label: 'Блог' },
	{ href: '/contact', label: 'Контакты' },
]

export default function Hero() {
	return (
		<section className='pt-0 pb-12 sm:pb-14 md:pb-16'>
			<div className='mx-auto px-4 sm:px-5'>
				{/* рамка */}
				<div className='rounded-[28px] p-[2px] bg-gradient-to-b from-slate-200 to-slate-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]'>
					{/* тёмная панель фиксированной высоты */}
					<div className='relative overflow-hidden rounded-[26px] bg-[#0B1220] min-h-[520px] sm:min-h-[580px] md:min-h-[680px] lg:min-h-[720px]'>
						{/* фон */}
						<Image
							unoptimized
							src='https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80'
							alt='Юридический офис'
							fill
							className='object-cover opacity-60'
							priority
						/>
						<div className='absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,rgba(1,43,150,0.45),rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.9))]' />

						{/* контент */}
						<div className='relative z-10 flex flex-col justify-between p-6 sm:p-8 md:p-14 pt-24 sm:pt-28 md:pt-32 pb-10 text-white h-full min-h-[520px] sm:min-h-[580px] md:min-h-[680px] lg:min-h-[720px]'>
							{/* верхняя часть - текст и кнопка */}
							<div className='max-w-2xl flex flex-col justify-center flex-1 mt-10 sm:mt-14 md:mt-18 lg:mt-20'>
								<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
									Сила <br className='hidden sm:block' /> юридической защиты
								</h1>
								<p className='mt-5 text-white/85 max-w-xl text-sm sm:text-base'>
									Доверьте юридические вопросы профессионалам. Наша фирма
									предоставляет надежную поддержку и эффективные решения.
									Свяжитесь с нами, чтобы получить помощь экспертов.
								</p>

								<div className='mt-8'>
									<Link href='/contact'>
										<Button
											size='lg'
											className='bg-white text-slate-900 hover:bg-gray-200 w-full sm:w-auto justify-center'
										>
											Получить консультацию
										</Button>
									</Link>
								</div>
							</div>

							{/* нижняя часть - видео, social, team */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end mt-10 sm:mt-12'>
								{/* левая колонка - социальные сети */}
								<div className='flex items-center gap-3'>
									<a className='h-10 w-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 cursor-pointer hover:bg-white/20 transition-colors'>
										f
									</a>
									<a className='h-10 w-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 cursor-pointer hover:bg-white/20 transition-colors'>
										in
									</a>
									<a className='h-10 w-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 cursor-pointer hover:bg-white/20 transition-colors'>
										x
									</a>
								</div>

								{/* правая колонка - видео и team */}
								<div className='flex flex-col gap-4 items-stretch md:items-end'>
									{/* видео превью */}
									<div className='relative rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-3 w-full max-w-full md:max-w-[420px]'>
										<div className='relative h-56 w-full overflow-hidden rounded-xl'>
											<Image
												unoptimized
												src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80'
												alt='Превью офиса'
												fill
												className='object-cover'
											/>
											<button
												className='absolute inset-0 m-auto h-14 w-14 grid place-items-center rounded-full bg-white/90 text-slate-900 hover:bg-white transition-colors'
												aria-label='Play video'
											>
												<Play className='h-6 w-6' />
											</button>
										</div>
										<div className='mt-3 flex items-center justify-between px-1 text-white/90'>
											<span className='text-sm'>Интро: как мы работаем</span>
											<button className='inline-flex items-center gap-1 text-sm hover:text-white transition-colors'>
												Смотреть <ChevronRight className='h-4 w-4' />
											</button>
										</div>
									</div>

									{/* meet our team */}
									<div className='flex items-center gap-3 w-full sm:w-fit rounded-full bg-white/10 backdrop-blur px-3 py-2 ring-1 ring-white/15'>
										<div className='-space-x-3 flex'>
											<img
												className='h-8 w-8 rounded-full ring-2 ring-[#0B1220]'
												src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&q=80'
												alt='Участник команды 1'
											/>
											<img
												className='h-8 w-8 rounded-full ring-2 ring-[#0B1220]'
												src='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80'
												alt='Участник команды 2'
											/>
											<img
												className='h-8 w-8 rounded-full ring-2 ring-[#0B1220]'
												src='https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=80&q=80'
												alt='Участник команды 3'
											/>
										</div>
										<span className='text-sm text-white/90 pr-2'>
											Познакомьтесь с командой
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
