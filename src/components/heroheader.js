import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import Image from 'next/image';
import Beanz from '../images/beansz.jpeg'
import Naka from '../images/Nakamigos.jpeg'
import mintle from '../images/mintle.png'
import React, { useEffect } from 'react';
import { motion } from "framer-motion"


function Hero() {
    //initiate slide Carasoul
    useEffect(() => {
        // This code will run on the client side after the component is mounted.
        var splide = new Splide('.splide');
        splide.mount();
      }, []); // The empty array means this effect runs once after the component is mounted.
    
    return(

        <>
        
         <div className="herocontainer">
            <section className="splide" >
                    <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <div className="carasoul-container">
                                        <div className="carasoul">
                                            <Image src={Beanz} height={120} width={500} alt='beanz'/>
                                            <div className='hero-text'>
                                                <h3>
                                                    Free No-code
                                                    Marketplace for Your 
                                                    Collection
                                                </h3>
                                                <p>
                                                A customizable, on-brand marketplace for your community 
                                                to trade all of your collections.
                                                </p>
                                                <div className='btn'>
                                                    <p>
                                                        Create Marketplace
                                                    </p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide">
                                    <div className="carasoul-container">
                                            <div className="carasoul2">
                                                <Image src={Naka} height={250} width={250} alt='beanz'/>
                                                <div className='hero-text'>
                                                <div className='hero-mint'>
                                                    <motion.div
                                                    animate = {{opacity:0}}
                                                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                                                    >
                                                        <div className='circle'></div>
                                                    </motion.div>
                                                    <p>
                                                        Minting now
                                                    </p>
                                                </div>
                                                    <h3>
                                                        Nakamigos
                                                    </h3>
                                                    <p>
                                                    By Nakamigos-Deployer
                                                    </p>
                                                    <p>
                                                    #StandForRoyalties & pledge your support for the people who have made Web3 what it is today. No Speculation. No Utility. Just solidarity.
                                                    </p>
                                                    <div className='btn2'>
                                                        <p>
                                                            Mint Now
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                </li>
                                <li className="splide__slide">
                                <div className="carasoul-container">
                                        <div className="carasoul3">
                                            <Image src={mintle} height={300} width={300} alt='beanz'/>
                                            <div className='hero-text'>
                                                <h3>
                                                    The Mintle Marketplace Is LIVE
                                                </h3>
                                                <p>
                                                The Freshest Marketplace on Mantle, Powered by ..... Buy, list & Sell your Mantle
                                                NFTs Today!
                                                </p>
                                                <div className='btn-mintle'>
                                                    <p>
                                                        Explore Now
                                                    </p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </section>
            
         </div>
         
        </>
    )
}

export default Hero