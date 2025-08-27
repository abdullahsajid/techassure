/** @format */

// import HeroCard from "@/src/components/cards/hero-card";
import HeroMarquee from '@/src/components/marquee/hero-marquee';
import React from 'react';
import { motion } from 'framer-motion';
import { LuDownload } from 'react-icons/lu';
import { ContainerTextFlip } from '../../src/components/shadcn-ui/text-flip';

const Hero = () => {
	return (
		// <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
		// 	<div
		// 		className='absolute inset-0 z-0'
		// 		style={{ backgroundImage: 'url("/assets/hero-background-ByvBavmo.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
		// 	<div className='absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60 z-10'></div>
		// 	<div className='relative z-20 text-center px-6 max-w-5xl mx-auto'>
		// 		<div className='inline-flex items-center px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6'>
		// 			<span className='text-accent font-medium text-sm'>
		// 				✓ Certified Project Manager &amp; Auditor
		// 			</span>
		// 		</div>
		// 		<h1 className='hero-text text-primary-foreground mb-4 drop-shadow-lg'>
		// 			Mariam
		// 		</h1>
		// 		<div className='w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full'></div>
		// 		<p className='text-xl md:text-2xl text-primary-light mb-8 font-light tracking-wide'>
		// 			Based in UAE | Available for local &amp; remote projects
		// 		</p>
		// 		<p className='text-lg text-primary-foreground/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light'>
		// 			Project Manager &amp; Certified Auditor specializing in industrial
		// 			solutions, packaging automation, and compliance excellence across MENA
		// 			region.
		// 		</p>
		// 		<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
		// 			<button className='inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-accent text-foreground hover:bg-accent/90 shadow-elegant transition-smooth hover-lift font-semibold px-8 py-6 text-lg'>
		// 				<svg
		// 					xmlns='http://www.w3.org/2000/svg'
		// 					width='24'
		// 					height='24'
		// 					viewBox='0 0 24 24'
		// 					fill='none'
		// 					stroke='currentColor'
		// 					stroke-width='2'
		// 					stroke-linecap='round'
		// 					stroke-linejoin='round'
		// 					className='lucide lucide-mail mr-3 h-6 w-6'>
		// 					<rect
		// 						width='20'
		// 						height='16'
		// 						x='2'
		// 						y='4'
		// 						rx='2'></rect>
		// 					<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
		// 				</svg>
		// 				Get In Touch
		// 			</button>
		// 			<button className='inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:text-accent-foreground h-11 rounded-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-sm transition-smooth px-8 py-6 text-lg font-medium'>
		// 				<svg
		// 					xmlns='http://www.w3.org/2000/svg'
		// 					width='24'
		// 					height='24'
		// 					viewBox='0 0 24 24'
		// 					fill='none'
		// 					stroke='currentColor'
		// 					stroke-width='2'
		// 					stroke-linecap='round'
		// 					stroke-linejoin='round'
		// 					className='lucide lucide-phone mr-3 h-6 w-6'>
		// 					<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
		// 				</svg>
		// 				+971 52 585 0238
		// 			</button>
		// 		</div>
		// 		<div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto'>
		// 			<div className='text-center'>
		// 				<div className='text-3xl font-bold text-accent mb-2'>15+</div>
		// 				<div className='text-primary-foreground/80 text-sm uppercase tracking-wider'>
		// 					Years Experience
		// 				</div>
		// 			</div>
		// 			<div className='text-center'>
		// 				<div className='text-3xl font-bold text-accent mb-2'>10+</div>
		// 				<div className='text-primary-foreground/80 text-sm uppercase tracking-wider'>
		// 					Industries Served
		// 				</div>
		// 			</div>
		// 			<div className='text-center'>
		// 				<div className='text-3xl font-bold text-accent mb-2'>UAE</div>
		// 				<div className='text-primary-foreground/80 text-sm uppercase tracking-wider'>
		// 					Based &amp; Available
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
		// 		<div className='w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center'>
		// 			<div className='w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse'></div>
		// 		</div>
		// 	</div>
		// </section>
		<div
			id='hero'
			className='h-screen flex flex-col items-center justify-center pt-24 relative overflow-clip isolate'>
			{/* <div className='h-[120%] absolute -left-16 lg:w-[13%] w-[150px] max-[500px]:w-[15%] top-1/2 -translate-y-1/2 bg-[#F5F5F5] blur-[50px] z-[2]' />
			<div className='w-[5%] bg-[#F5F5F5] h-full absolute left-0 top-0 blur-lg z-[2]' /> */}
			<div
				className='absolute inset-0 z-0'
				style={{
					backgroundImage: 'url("/assets/hero-background-ByvBavmo.jpg")',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
				}}></div>
			<div className='absolute inset-0 bg-gradient-to-br from-[#0088aa]/90 via-[#0088aa]/75 to-[#0088aa]/60 z-10'></div>
			{/* right blur  */}

			{/* <div className='h-[120%] absolute -right-16 lg:w-[13%] w-[150px] max-[500px]:w-[15%] top-1/2 -translate-y-1/2 bg-[#F5F5F5] blur-[50px] z-[2]' />
			<div className='w-[5%] bg-[#F5F5F5] h-full absolute right-0 top-0 blur-lg z-[2]' /> */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute left-1/2 -translate-x-1/2 top-[25%] w-screen -translate-y-1/2 z-[99] text-black flex justify-center items-center'>
				<div className='md:text-[100px] text-[60px] font-SatoshiBlack uppercase text-black font-bold'>
					<ContainerTextFlip
						words={['Tech', 'Assure', 'CEO ', 'Mariam', 'Waris']}
						className='max-sm:text-[55px]'
					/>
				</div>
			</motion.div>
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute select-none left-1/2 -translate-x-1/2 top-1/2 w-screen -translate-y-1/2 z-[-1]'>
				<HeroMarquee />
			</motion.div> */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute left-1/2 -translate-x-1/2 top-[40%] w-screen -translate-y-1/2 z-[99] text-black flex justify-center items-center'>
				<div className='md:text-[30px] text-[30px] max-sm:text-[20px] max-sm:text-center max-sm:px-3 font-SatoshiBlack uppercase text-white font-bold'>
					Based in UAE | Available for local & remote projects
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute left-1/2 -translate-x-1/2 top-[50%] max-sm:top-[53%] w-[80%] -translate-y-1/2 z-[99] text-black flex justify-center items-center'>
				<div className='md:text-[25px] text-[25px] max-sm:text-[12px] max-sm:text-center max-sm:px-3 font-SatoshiBlack uppercase text-white text-center font-bold'>
					Project management, Engineering Design, site auditing, specialized industrial solutions, packaging automation, and compliance excellence across MENA Region
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute left-1/2 -translate-x-1/2 top-[65%] max-sm:top-[70%] w-[80%] -translate-y-1/2 z-[99] text-black flex justify-center items-center'>
				<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
					<a href="mailto:waris.mariam@outlook.com" target='_blank' className='inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background bg-[#DBB238] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 max-sm:h-7 rounded-md bg-accent text-foreground hover:bg-accent/90 shadow-elegant transition-smooth hover-lift font-semibold px-8 py-6 max-sm:px-6 text-lg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-mail mr-3 h-6 w-6'>
							<rect
								width='20'
								height='16'
								x='2'
								y='4'
								rx='2'></rect>
							<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
						</svg>
						Get In Touch
					</a>
					<a href="http://wa.me/+971525850238" target='_blank' className='inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:text-accent-foreground h-11 rounded-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-sm transition-smooth px-8 py-6 text-lg font-medium'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-phone mr-3 h-6 w-6'>
							<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
						</svg>
						+971 52 585 0238
					</a>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className='absolute left-1/2 -translate-x-1/2 top-[75%] max-sm:top-[85%] w-[80%] -translate-y-1/2 z-[99] text-black flex justify-center items-center'>
				<div className='mt-16 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-3xl mx-auto'>
					<div className='text-center flex items-center flex-col justify-center'>
						<div className='text-3xl font-bold text-accent mb-2 text-[#DBB238]'>15+</div>
						<div className='text-[#fff]-foreground/80 text-sm max-sm:text-[10px] text-[#fff] uppercase tracking-wider '>
							Years Experience
						</div>
					</div>
					<div className='text-center flex items-center flex-col justify-center'>
						<div className='text-3xl font-bold text-accent mb-2 text-[#DBB238]'>10+</div>
						<div className='text-[#fff]-foreground/80 text-sm max-sm:text-[10px] text-[#fff] uppercase tracking-wider'>
							Industries Served
						</div>
					</div>
					<div className='text-center flex items-center flex-col justify-center'>
						<div className='text-3xl font-bold text-accent mb-2 text-[#DBB238]'>UAE</div>
						<div className='text-[#fff]-foreground/80 text-sm max-sm:text-[10px] text-[#fff] uppercase tracking-wider'>
							Based &amp; Available
						</div>
					</div>
				</div>
			</motion.div>
			<div></div>
		</div>
	);
};

export default Hero;
