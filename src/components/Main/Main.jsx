"use client"
import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <>
            <div className='flex m-5'>
                <div className='mx-6 items-center justify-center text-center '>
                    <Image src="/All-Bags.png" height={100} width={100} alt='All Bage' />
                    <span className='center'>All Bags</span>
                </div>

                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Vanity Pouch.png" height={100} width={100} alt='Vanity Pouch' />
                    <span>Vanity Pouch</span>
                </div>

                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Tote Bag.png" height={100} width={100} alt='Tote Bag' />
                    <span>Tote Bag</span>
                </div>

                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Duffle Bag.png" height={100} width={100} alt='All Bage' />
                    <span>Duffle Bag</span>
                </div>

                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Laptop Sleeve.png" height={100} width={100} alt='Laptop Sleeve' />
                    <span>Laptop Sleeve</span>
                </div>
                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Messenger Bags.png" height={100} width={100} alt='Messenger Bags' />
                    <span>Messenger Bags</span>
                </div>
                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Slings Bags.png" height={100} width={100} alt='Slings Bags' />
                    <span>Slings Bags</span>
                </div>
                <div className='mx-6 items-center justify-center text-center'>
                    <Image src="/Handbag.png" height={100} width={100} alt='Handbag' />
                    <span>Handbag</span>
                </div>



            </div>
        </>
    )
}

export default Main
