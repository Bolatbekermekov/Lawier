'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const awards = [
	{
		title: '50 ведущих юридических фирм Англии',
		image:
			'https://images.unsplash.com/photo-1676181739859-08330dea8999?auto=format&fit=crop&w=400&h=400&q=80',
		alt: 'Судейский молоток',
	},
	{
		title: 'Премия за выдающийся клиентский сервис',
		image:
			'https://images.unsplash.com/photo-1760996888608-6a1a5651ccd0?auto=format&fit=crop&w=400&h=400&q=80',
		alt: 'Медаль и лента',
	},
	{
		title: 'Премия за инновации в праве',
		image:
			'https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?auto=format&fit=crop&w=400&h=400&q=80',
		alt: 'Хрустальная награда',
	},
	{
		title: 'Юридическая фирма года',
		image:
			'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=400&h=400&q=80',
		alt: 'Золотой трофей',
	},
]

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

export default function AwardsSection() {
	return (
		<section className='bg-gradient-to-b from-white via-[#f7f9ff] to-white py-10 sm:py-12 md:py-16 lg:py-20'>
			<div className='mx-auto max-w-[1800px]'>
				<div className='mx-auto px-4 sm:px-5 md:px-6 lg:px-10'>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='mb-8 sm:mb-10 md:mb-12 inline-flex items-center gap-2.5 sm:gap-3'
					>
						<span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0B3B95] shadow-[0_0_0_4px_rgba(11,59,149,0.12)]' />
						<span className='font-medium text-slate-700 text-sm sm:text-base'>
							Награды
						</span>
					</motion.div>

					<motion.div
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4'
					>
						{awards.map(award => (
							<motion.div
								key={award.title}
								variants={item}
								whileHover={{ y: -8, scale: 1.03 }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
								className='group flex flex-col items-center gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 md:p-8 text-center ring-1 ring-slate-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(11,59,149,0.2)]'
							>
								<div className='relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#f0f4ff] to-[#e0ebff] shadow-lg ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl'>
									<Image
										src={award.image}
										alt={award.alt}
										width={112}
										height={112}
										sizes='112px'
										className='h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-[#0B3B95]/10 to-transparent' />
								</div>
								<h3 className='text-sm sm:text-base font-semibold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-[#0B3B95]'>
									{award.title}
								</h3>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}
