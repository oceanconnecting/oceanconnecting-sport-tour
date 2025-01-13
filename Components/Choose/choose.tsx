"use client"
import React from 'react'
import { FaShieldAlt, FaGlobe, FaBookReader } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';
import chooseData from './ChooseData';
import { motion } from 'framer-motion';
import './choose.css';
import { div, section } from 'motion/react-client';

function choose() {
  return (
  

   
   
   
<section className="py-12 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl">
        Why Choose Us?
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chooseData.map((item: any, index: any) => (
          <motion.div
            key={index}
            className="choose_item p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
            style={{ background: `${item.bg}` }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl text-primary-500 mb-4">
              <item.icon />
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
         
             
   
     
   
       
     )
}

export default choose
