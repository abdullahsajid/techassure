'use client';
import Hero from '@/app/(home)/hero';
import ModalWrapper from '@/src/components/modal-wrapper';
import TestModal from '@/src/components/modals/test-modal';
import Navbar from '@/app/(home)/navbar';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import About from './(home)/about';
import WorkCheckout from './(home)/work-checkout';
import Lenis from "@studio-freight/lenis";
import Served from './(home)/services';
import Work from './(home)/work';
import WorkModel from './(home)/work-model';
import Footer from './(home)/footer';

const Home: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

	return (
		<main className='relative'>
			<div className='fixed left-0 top-0 w-full z-[99] pb-2 backdrop-blur-xl'>
				<Navbar />
			</div>
      <Hero />
      <About />
      <WorkCheckout />
      <Served />
      <Work />
      <WorkModel />
      <Footer/>
		</main>
	);
};

export default Home;
