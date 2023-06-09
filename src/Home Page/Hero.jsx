"use client";
import React from 'react';

const Hero = () => {
  return (
    <section class="hero bg-img flex md:flex-row flex-col-reverse justify-center items-center">
      <div class="container w-full flex md:flex-row flex-col-reverse px-3 h-[70vh]">
        <div class="md:w-1/2 w-full md:text-left text-center">
          <h1 class="text-5xl font-bold w-full md:w-[450px] text-white">Unlock the Power of Blockchain in the <span className='text-color-secondary'>Transportation Sector</span></h1>
          <p class="md:w-[400px] w-full my-7 text-white">
            Experience the numerous benefits and advantages of integrating blockchain technology into your transportation business. Enhance transparency, streamline operations, and access innovative financing solutions with our tailored platform.
          </p>
        </div>
        <div class="w-full md:w-1/2">
        </div>
      </div>
    </section>

  )
}

export default Hero;