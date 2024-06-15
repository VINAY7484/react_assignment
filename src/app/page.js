"use client"
import React, { useState, useEffect } from 'react'
import Card from "@/components/Card/Card";
import Main from "@/components/Main/Main";
import TopBar from "@/components/TopBar/TopBar";
import { LuUpload,LuDot } from "react-icons/lu";
import axios from 'axios'


export default function Home() {
  const [data, setData] = useState()
    useEffect(() => {
        getCourses();
    }, [])
    const getCourses = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(response.data)
    }
  return (
    <>
    <div className="m-4 ">
    <TopBar/>
    <Main/>
    <div className='flex flex-row items-center justify-between  '>
        <span> Bag <LuDot  className='inline'/> Bag packs</span>
        <span className='order-last'> 13 products  <LuUpload  className='inline mx-2'/></span>
    </div>
    <div className="grid grid-cols-4">
    {
                    data &&
                    data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })
                }

    </div>
    </div>


          </>
  );
}
