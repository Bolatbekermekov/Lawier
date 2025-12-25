'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
	{ name: 'Экспертиза', href: '/expertise' },
	{ name: 'Наши кейсы', href: '/work' },
	{ name: 'О нас', href: '/about' },
	{ name: 'Контакты', href: '/contact' },
]

const socialLinks = [
	{ name: 'Facebook', icon: Facebook, href: '#' },
	{ name: 'LinkedIn', icon: Linkedin, href: '#' },
	{ name: 'Twitter', icon: Twitter, href: '#' },
]

const legalLinks = [
	{ name: 'Политика Cookies', href: '#' },
	{ name: 'Политика конфиденциальности', href: '#' },
	{ name: 'Условия использования', href: '#' },
]

export default function CTAAndFooter() {
	return (
		<>
			{/* CTA Section */}
			<section className='relative mx-4 mb-8 overflow-hidden rounded-[32px] md:mx-6'>
				{/* Local Background Image */}
				<div className='absolute inset-0'>
					<Image
						src='/assets/background.jpg'
						alt='Фон офиса'
						fill
						className='object-cover'
						priority
					/>
					{/* Dark overlay with purple tint */}
					<div className='absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/92 via-[#312e81]/88 to-[#4c1d95]/85' />
				</div>

				{/* Content */}
				<div className='relative z-10 flex min-h-[320px] flex-col items-center justify-center gap-8 px-6 py-16 md:flex-row md:justify-between md:px-16 md:py-20'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center md:text-left'
					>
						<h2 className='text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl'>
							Составим
							<br />
							план действий
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Link href='/contact'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								className='group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:bg-[#0B3B95] hover:text-white'
							>
								Получить консультацию
								<ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Footer - Полностью сиреневый */}
			<footer className='mx-4 mb-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 shadow-sm md:mx-6'>
				<div className='px-6 pb-8 pt-12 md:px-10 md:pb-10 md:pt-14'>
					{/* Main Footer Content */}
					<div className='grid gap-10 md:grid-cols-[1fr,2fr,1fr] md:gap-16'>
						{/* Logo & Social */}
						<div className='space-y-6'>
							<Link href='/' className='inline-block'>
								<div className='flex items-center gap-3'>
									<div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B3B95] p-2 shadow-lg'>
										<Image
											src='/assets/scale.png'
											alt='Логотип Strategic Law Group'
											width={22}
											height={22}
											className='h-full w-full object-contain brightness-0 invert'
										/>
									</div>
									<div>
										<div className='text-sm font-bold text-slate-900'>
											Strategic
										</div>
										<div className='text-sm font-bold text-slate-900'>
											Law Group
										</div>
									</div>
								</div>
							</Link>

							<div className='flex gap-3'>
								{socialLinks.map(social => {
									const Icon = social.icon
									return (
										<motion.a
											key={social.name}
											href={social.href}
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
											className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:bg-[#0B3B95] hover:text-white hover:shadow-md hover:ring-transparent'
											aria-label={social.name}
										>
											<Icon className='h-4 w-4' />
										</motion.a>
									)
								})}
							</div>
						</div>

						{/* Navigation Links */}
						<nav className='grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-2'>
							{navigation.map(item => (
								<Link
									key={item.name}
									href={item.href}
									className='text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#0B3B95]'
								>
									{item.name}
								</Link>
							))}
						</nav>

						{/* Contact Info */}
						<div className='space-y-4'>
							<div>
								<div className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
									Телефон
								</div>
								<a
									href='tel:+77053935207'
									className='mt-1 block text-sm font-medium text-slate-800 transition-colors duration-200 hover:text-[#0B3B95]'
								>
									+7 705 393 52 07
								</a>
							</div>

							<div>
								<div className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
									Адрес
								</div>
								<p className='mt-1 text-sm text-slate-700'>
									Алматы, Казахстан
									<br />
									пр. Аль-Фараби, 17/1
								</p>
							</div>

							<div>
								<div className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
									Email
								</div>
								<a
									href='mailto:lawcompany@gmail.com'
									className='mt-1 block text-sm font-medium text-slate-800 transition-colors duration-200 hover:text-[#0B3B95]'
								>
									lawcompany@gmail.com
								</a>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className='mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-8 md:flex-row md:items-center md:justify-between'>
						<p className='text-sm text-slate-600'>
							Создатель: Bolatbek Yermekov • Company © 2024. Все права защищены.
						</p>

						<div className='flex flex-wrap gap-x-6 gap-y-2'>
							{legalLinks.map(link => (
								<Link
									key={link.name}
									href={link.href}
									className='text-sm text-slate-600 transition-colors duration-200 hover:text-[#0B3B95]'
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
