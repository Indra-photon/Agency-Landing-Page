"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

function WhatWeDoHero() {
    return (
        <div className='flex flex-col'>

            <div className='flex items-center justify-end relative max-h-screen overflow-hidden mask-b-from-30%'>
                <div className='z-10 absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 right-4 sm:right-8 md:right-auto max-w-full md:max-w-2xl lg:max-w-3xl'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground bg-transparent bg-clip-text leading-tight">
                        Transforming <br /> <span className='italic'>ideas</span> into reality
                    </h1>
                    <p className="max-w-full md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 text-muted-foreground leading-relaxed">
                        Our agency specializes in creating high-impact digital solutions.
                        From strategy to deployment, we are your partners in innovation.
                        Explore our comprehensive services and our proven process.
                    </p>

                </div>
                <div className='flex flex-row gap-5 rotate-x-50 rotate-z-45'>
                    <motion.div
                        initial={{ y: 500 }}
                        animate={{ y: [-1000, 1000] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className='flex flex-col space-y-10 mb-20 opacity-30'
                    >
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                            </React.Fragment>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: [1000, -1000] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className='flex flex-col space-y-10 mb-20 opacity-30'>
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                            </React.Fragment>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ y: 500 }}
                        animate={{ y: [-1000, 1000] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className='flex flex-col space-y-10 mb-20 opacity-30'>
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
                                    alt="Hero Image"
                                    width={600}
                                    height={400}
                                />
                            </React.Fragment>
                        ))}
                    </motion.div>

                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default WhatWeDoHero
