'use client'

import { motion } from 'framer-motion'

export default function ExpertiseHeroSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-20'>
			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,59,149,0.05),transparent_60%)]' />

			<div className='relative mx-auto max-w-7xl px-6 md:px-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center'
				>
					<h1 className='text-5xl font-bold text-slate-900 md:text-6xl'>
						Практики и <span className='text-[#0B3B95]'>отрасли</span>
					</h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600'
					>
						Мы предоставляем комплексные юридические услуги в разных сферах,
						предлагая стратегические консультации и решения под конкретные задачи.
					</motion.p>
				</motion.div>
			</div>
		</section>
	)
}
