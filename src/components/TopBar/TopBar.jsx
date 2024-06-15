"use client"
import { CiSearch, CiBookmark, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";


const TopBar = () => {

    return (
        <>
            <div className="flex justify-between my-5 ">
                <div>
                    <span className="font-bold">TANN TRIM</span>
                </div>
                <div className="flex flex-row order-last items-center justify-between">
                    <span className="mx-2 "><CiSearch className="size-[25px]" /></span>
                    <span className="mx-2"><CiUser className="size-[25px]" /></span>
                    <span className="mx-2"><CiBookmark className="size-[25px]" /></span>
                    <span className="mx-2"><IoBagHandleOutline className="size-[25px]" /></span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center  ">
                <span className="mx-5">Bags</span>
                <span className="mx-5">Travel</span>
                <span className="mx-5">Accesories</span>
                <span className="mx-5">Gifting</span>
                <span className="mx-5">Jewelery</span>
            </div>
        </>
    )
}

export default TopBar
