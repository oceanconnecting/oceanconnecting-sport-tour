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
  

   
   
   

   
         
             <div className="choose">
                  {
                      chooseData.map((item:any,index:any) => (
                        
                          <div  key={index}>
                              <motion.div className="choose_item"  style={{background:`${item.bg}`}}  
                               whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                              >
                                  <span> 
                                      <i> 
                                      <item.icon  />
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
