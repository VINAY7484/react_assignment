"use client"
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";


const Card = ({ id, title, image, price, }) => {
    return (
        <div className=' flex  flex-col  rounded z-50 shadow-lg  m-3'>
            <div className='flex rounded-t-lg h-[350px]  justify-end p-4'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat'
                }}>
                <CiBookmark className='text-black size-[25px]  ' />
            </div>
            <div className='bg-gray-800  shadow  p-2 rounded-b-lg h-[100px] text-white'>
                <h1>
                    {title}
                </h1>
                <div className='flex justify-between'>

                    <div className='flex justify-around'>

                        <span className='inline text-center'>{price}</span>
                        <p className='inline'>{2 * price} <span className='text-green-500'>(50% off)</span> </p>
                    </div>
                    <div className='oder-last'>

                        <TbShoppingBagPlus className='text-white size-[25px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
