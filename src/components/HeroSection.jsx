import React from 'react';
import { motion } from 'framer-motion';
import mosque1 from '../assets/homeyork.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mosque1})` }}
      ></div>

      <div className="absolute inset-0 bg-green-500 opacity-70"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center gap-9 p-4">
        
        <motion.h1
          className="text-slate-100 text-4xl md:text-6xl font-bold mt-4 mx-auto"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className = "text-green-950">Nigerian-American Muslim {" "}</span>
          <span className = "text-green-950">Integrated Community Center</span> 
        </motion.h1>

        <motion.h2 
          className='text-gray-600 text-2xl mb-10 mx-auto'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <span className ="text-slate-100 text-xl md:text-2xl">Nurturing Faith, Enriching Lives, Building Community</span>
        </motion.h2>

        <button className='bg-yellow-400 h-14 w-40 rounded-lg flex justify-center items-center p-2'>
          <span className='text-base text-green-800 text-center'>
            <Link to="/contact">Contact us Today</Link>
          </span>
        </button>

      </div>
    </div>
  );
};

export default HeroSection;
