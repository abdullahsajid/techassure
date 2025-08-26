/** @format */

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@assets/logo.png';
import { AnimatePresence, motion } from 'framer-motion';
import Drawer from '../../src/components/drawer';
import { CgMenuRight } from 'react-icons/cg';
// import Example from "./dropdown-drawer";
import { IoIosArrowRoundDown } from 'react-icons/io';
import Example from '@/src/components/dropdown-drawer';
import { TextGenerateEffect } from '@/src/components/shadcn-ui/text-effect';
// import LogoSection from "./logo-section";

const sections = ['hero', 'about', 'services', 'experience'];

const Navbar = () => {
	const [activeSection, setActiveSection] = useState<string>('hero');
	const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false);
	const [showDrawer, setShowDrawer] = useState<boolean>(false);

	// Scroll into view on click
	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// Disable automatic detection temporarily
			setIsUserScrolling(true);
			setActiveSection(id);

			element.scrollIntoView({ behavior: 'smooth' });

			// Re-enable automatic detection after scroll completes
			setTimeout(() => {
				setIsUserScrolling(false);
			}, 1000); // Adjust timing based on your scroll duration
		}
	};

	// Track which section is in view
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// Skip if user is manually scrolling
				if (isUserScrolling) return;

				// Find the entry with the highest intersection ratio
				let maxRatio = 0;
				let mostVisibleSection = '';

				entries.forEach((entry) => {
					if (entry.intersectionRatio > maxRatio) {
						maxRatio = entry.intersectionRatio;
						mostVisibleSection = entry.target.id;
					}
				});

				// Only update if we have a section with significant visibility
				if (maxRatio > 0.3 && mostVisibleSection) {
					setActiveSection(mostVisibleSection);
				}
			},
			{
				threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
				rootMargin: '-10% 0px -10% 0px', // This helps with edge cases
			}
		);

		sections.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [isUserScrolling]);

	// Alternative approach: Use scroll listener as backup
	useEffect(() => {
		const handleScrollDetection = () => {
			// Skip if user is manually scrolling
			if (isUserScrolling) return;

			const scrollPosition = window.scrollY + window.innerHeight / 2;

			sections.forEach((sectionId) => {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
					}
				}
			});
		};

		// Throttle scroll events for better performance
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScrollDetection();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledScroll);

		// Initial check
		handleScrollDetection();

		return () => window.removeEventListener('scroll', throttledScroll);
	}, [isUserScrolling]);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.div
			initial={{ top: -100, opacity: 0 }}
			animate={{ top: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className='pt-4 z-50 relative'>
			<div className='lg:container ps-5 flex items-center justify-between'>
				<div className='bg-primary  gap-2 px-4 whitespace-nowrap transition-all duration-300 flex items-center relative h-[48px] rounded-[40px] text-white font-medium group text-base overflow-clip cursor-pointer'>
					<TextGenerateEffect words={"Tech Assure"} className='text-white' />
				</div>

				<div className='relative max-w-[404px] shadow-glowing w-full h-[48px] rounded-[24px] bg-[#fff] flex items-center justify-center px-2 max-lg:hidden'>
					{/* Single animated background pill */}
					<motion.div
						className='absolute h-[40px] w-[96px] rounded-[64px] bg-primary z-0'
						animate={{
							x: sections.indexOf(activeSection) * 96,
						}}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 35,
							mass: 0.8,
						}}
						style={{
							left: '8px',
						}}
					/>

					{sections.map((section, index) => (
						<div
							key={section}
							className='relative w-[96px] h-[40px] rounded-[64px] flex items-center justify-center cursor-pointer z-10'
							onClick={() => handleScroll(section)}>
							<h4
								className={`font-medium text-base transition-colors duration-200 ${
									activeSection === section ? 'text-white' : 'text-[#676767]'
								}`}>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</h4>
						</div>
					))}
				</div>

				<a
					href="mailto:waris.mariam@outlook.com"
					className='w-[135px]  flex justify-end'>
					<button className='bg-primary max-lg:hidden gap-2 px-4 whitespace-nowrap hover:w-[135px] transition-all duration-300 w-[101px] flex items-center relative h-[48px] rounded-[40px] text-white font-medium group text-base overflow-clip'>
						Let&apos;s Talk
						<div className='min-w-[30px] absolute -right-[30%] group-hover:right-3 transition-all duration-500 h-[30px] flex items-center justify-center rounded-full bg-white'>
							<motion.div className=''>
								<IoIosArrowRoundDown className='text-primary text-2xl group-hover:-rotate-90 delay-200 duration-500' />
							</motion.div>
						</div>
					</button>
				</a>
				<div className='lg:hidden'>
					<Example />
				</div>
			</div>
			<AnimatePresence
				mode='wait'
				initial={false}>
				{showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
			</AnimatePresence>
		</motion.div>
	);
};

export default Navbar;
