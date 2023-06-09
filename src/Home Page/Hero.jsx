"use client";
import React from 'react';

const Hero = () => {
  return (
    <section class="hero bg-img flex md:flex-row flex-col-reverse justify-center items-center">
      <div class="container w-full flex flex-col md:flex-row px-3 h-[70vh]">
        <div class="w-full md:w-1/2">
          <h1 class="text-5xl font-bold w-full md:w-1/2 text-white">Unlock the Power of Blockchain in the <span class="text-color-secondary">Transportation Sector</span></h1>
          <p class="my-7 text-white">
            Experience the numerous benefits and advantages of integrating blockchain technology into your transportation business. Enhance transparency, streamline operations, and access innovative financing solutions with our tailored platform.
          </p>
        </div>
      </div>
    </section>



  )
}

export default Hero;