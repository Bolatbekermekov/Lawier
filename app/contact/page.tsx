'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
	{
		icon: Mail,
		label: 'Эл. почта',
		value: 'rze1973@mail.ru',
		link: 'mailto:rze1973@mail.ru',
	},
	{
		icon: Phone,
		label: 'Телефон',
		value: '+7 705 393 52 07',
		link: 'tel:+77053935207',
	},
	{
		icon: MapPin,
		label: 'Адрес головного офиса',
		value: 'Алматы, Казахстан\nпр. Аль-Фараби, 17/1',
	},
]

const cis_countries = [
	'Казахстан',
	'Россия',
	'Узбекистан',
	'Киргизия',
	'Таджикистан',
	'Беларусь',
	'Армения',
]

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const text = `Здравствуйте! Меня зовут ${formData.name}.\nПишу по юридическому вопросу: ${formData.message}.\nДля связи: ${formData.email}`
		const url = `https://wa.me/77053935207?text=${encodeURIComponent(text)}`
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-8 sm:py-12 md:py-16 lg:py-20'>
			<div className='mx-auto max-w-7xl px-4 sm:px-5 md:px-6'>
				{/* Header - адаптивная типографика */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='mb-8 sm:mb-12 md:mb-16'
				>
					<h1 className='mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight'>
						Наши контакты
					</h1>
					<p className='text-base sm:text-lg text-slate-600'>
						Мы предоставляем юридические услуги по всему{' '}
						<span className='font-semibold text-[#0B3B95]'>СНГ</span>
					</p>
				</motion.div>

				{/* Contact Section - 1 колонка на мобильных */}
				<div className='mb-12 sm:mb-16 md:mb-20 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr,1.5fr]'>
					{/* Left Column - Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-6 sm:space-y-7 md:space-y-8'
					>
						{contactInfo.map((item, index) => {
							const Icon = item.icon
							return (
								<div key={index} className='space-y-2'>
									<div className='flex items-center gap-2.5 sm:gap-3 text-sm font-semibold text-[#0B3B95]'>
										<Icon className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' />
										<span>{item.label}</span>
									</div>
									{item.link ? (
										<a
											href={item.link}
											className='block text-base sm:text-lg text-slate-700 transition-colors hover:text-[#0B3B95] break-words'
										>
											{item.value}
										</a>
									) : (
										<p className='whitespace-pre-line text-base sm:text-lg text-slate-700'>
											{item.value}
										</p>
									)}
								</div>
							)
						})}

						{/* CIS Countries Badge */}
						<div className='space-y-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-6'>
							<p className='text-sm font-semibold text-[#0B3B95]'>
								Работаем в СНГ
							</p>
							<div className='flex flex-wrap gap-2'>
								{cis_countries.map(country => (
									<span
										key={country}
										className='rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/50'
									>
										{country}
									</span>
								))}
							</div>
						</div>

						{/* Social Links - touch-friendly */}
						<div className='space-y-2'>
							<p className='text-sm font-semibold text-[#0B3B95]'>Соцсети</p>
							<div className='flex gap-3'>
								<a
									href='https://linkedin.com'
									target='_blank'
									rel='noopener noreferrer'
									className='flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:bg-[#0B3B95] hover:text-white hover:ring-[#0B3B95] touch-manipulation'
									aria-label='LinkedIn'
								>
									<Linkedin className='h-5 w-5' />
								</a>
								<a
									href='https://twitter.com'
									target='_blank'
									rel='noopener noreferrer'
									className='flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:bg-[#0B3B95] hover:text-white hover:ring-[#0B3B95] touch-manipulation'
									aria-label='Twitter'
								>
									<Twitter className='h-5 w-5' />
								</a>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 md:p-8 lg:p-10 shadow-lg sm:shadow-xl ring-1 ring-slate-200/50'
					>
						<div className='mb-5 sm:mb-6'>
							<h2 className='mb-2 text-xl sm:text-2xl font-bold text-slate-900'>
								Расскажите, чем мы можем помочь
							</h2>
							<p className='text-sm text-slate-600'>
								Если вас интересуют наши услуги или другие вопросы по работе
								компании, мы ответим оперативно.
							</p>
						</div>

						<form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
							{/* Name Input - оптимизирован для мобильных */}
							<div>
								<label
									htmlFor='name'
									className='mb-2 block text-sm font-medium text-slate-700'
								>
									Ваше имя
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									placeholder='Введите имя'
									autoComplete='name'
									className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0B3B95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 transition-colors touch-manipulation'
									required
								/>
							</div>

							{/* Email Input - с правильным inputmode */}
							<div>
								<label
									htmlFor='email'
									className='mb-2 block text-sm font-medium text-slate-700'
								>
									Ваш email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									placeholder='Введите email'
									autoComplete='email'
									inputMode='email'
									className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0B3B95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 transition-colors touch-manipulation'
									required
								/>
							</div>

							{/* Message Textarea - адаптивная высота */}
							<div>
								<label
									htmlFor='message'
									className='mb-2 block text-sm font-medium text-slate-700'
								>
									Ваш запрос
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									placeholder='Опишите задачу'
									rows={4}
									className='w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0B3B95] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 transition-colors touch-manipulation'
									required
								/>
							</div>

							{/* Submit Button - touch-friendly размер */}
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type='submit'
								className='flex w-full items-center justify-center gap-2 rounded-full bg-[#0B3B95] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#0B3B95]/30 transition-all duration-300 hover:bg-[#0a3280] hover:shadow-xl hover:shadow-[#0B3B95]/40 touch-manipulation'
							>
								<span>Отправить</span>
								<Send className='h-5 w-5' />
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>

			<div className='mx-auto max-w-[1800px] px-4 sm:px-5 md:px-6'>
				{/* Map Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className='overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg sm:shadow-xl ring-1 ring-slate-200/50'
				>
					<div className='p-5 sm:p-6 md:p-8 lg:p-10'>
						<h2 className='mb-2 text-xl sm:text-2xl font-bold text-slate-900'>
							Посетите наш офис
						</h2>
						<p className='text-sm sm:text-base text-slate-600'>
							пр. Аль-Фараби, 17/1, Алматы, Казахстан
						</p>
					</div>

					{/* Responsive Map Container */}
					<div className='relative w-full' style={{ paddingTop: '56.25%' }}>
						<iframe
							src='https://yandex.com/map-widget/v1/?ll=76.945465%2C43.238293&z=16&l=map&pt=76.945465,43.238293,pm2rdm'
							className='absolute top-0 left-0 w-full h-full border-0'
							allowFullScreen
							loading='lazy'
							title='Карта расположения офиса'
						/>
					</div>

					{/* Alternative: Google Maps Embed - также responsive */}
					{/* Раскомментируйте если хотите использовать Google Maps */}
					{/* 
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.3562842856766!2d76.94326331550943!3d43.23829297913891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fdb7e8e3!2sAl-Farabi%20Ave%2C%20Almaty!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz'
              className='absolute top-0 left-0 w-full h-full border-0'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Office location map'
            />
          </div>
          */}
				</motion.div>
			</div>
		</div>
	)
}
