"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'


const NavLinks=[
    
    {title:"About",path:"#about"},

    {title:"Project",path:"#project"},

    {title:"Contact",path:"#contact"},
]   


const Navbar = () => {
    const [navbarOpen,setNavbarOpen]= useState(false);
  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-black bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
        <Link href={"/"} className='text-2xl py-2 pl-3 pr-4 md:text-5xl text-white font-semibold'>
        LOGO
        </Link>
        <div className='mobile-menue md:hidden block'>
            {!navbarOpen? (
                <button className='flex items-center px-3 text-sm text-slate-200 hover:text-white hover:border-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
                    <Bars3Icon onClick={()=>setNavbarOpen(true)} className="h-5 w-5" />
                </button>
            ) : (
               <button className='flex items-center px-3 text-sm text-slate-200 hover:text-white hover:border-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
                    <XMarkIcon onClick={()=>setNavbarOpen(false)} className="h-5 w-5" />
                </button>
            )  }
        </div>
        <div className='menue hidden md:block md:w-auto' id="navbar">     
            <ul className='flex p-4 space-x-3 md:p-0 md:flex-row md:space-x-8'>
                {NavLinks.map((link,index)=>(
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
              

            </ul>
        </div>
        
        </div>
        {navbarOpen?(
            <MenuOverlay links={NavLinks} />
        ):null}
        
        </nav>
  )
}

export default Navbar