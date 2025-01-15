"use client"
import React from 'react'
import chooseData from './ChooseData';
import { motion } from 'framer-motion';
import './choose.css';
import { twMerge } from 'tailwind-merge';

function choose() {
  return (
    <div className="choose">
        {
            chooseData.map((item:any,index:any) => (
            
                <div  key={index}>
                    <motion.div className="choose_item"
                     style={{ backgroundColor: item.bg }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    >
                        <span> 
                            <i> 
                            <item.icon/>
                            </i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                </div>
            ))
        }
    </div>
   
     
   
       
     )
}

export default choose
