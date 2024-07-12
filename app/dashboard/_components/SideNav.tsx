"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, History, Home, Settings, Wallet } from 'lucide-react'
import { usePathname } from 'next/navigation'

const SideNav = () => {

    const MenuList = [{
        name: 'Home',
        icon: Home,
        path:"/dashboard"
    },{
        name: 'History',
        icon: FileClock,
        path:"/dashboard/history"
    },{
        name: 'Billing',
        icon: Wallet,
        path:"/dashboard/billing"
    },{
        name: 'Settings',
        icon: Settings,
        path:"/dashboard/settings"
    }]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[]) 

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
        </div>
        <hr className='my-5 border'/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div key={index} className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg
                cursor-pointer items-center ${path==menu.path && 'bg-primary text-white'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav