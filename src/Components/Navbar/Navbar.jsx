import React from 'react'
import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'

export default function Navbar() {


    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        // document.querySelector('nav').classList.toggle('py-1', window.scrollY > 0)
        let y = document.querySelector('nav').offsetHeight;
        // console.log(y);
        document.querySelector('nav').classList.toggle('py-2', window.scrollY > y)
    })

    const [icon, setIcon] = useState(true)

    const [list, setList] = useState([
        { listname: 'About', path: 'about' },
        { listname: 'Portfolio', path: 'portfolio' },
        { listname: 'Category', path: 'category' },
        { listname: 'Contact', path: 'contact' },
    ])


    return (
        <>
            <nav className='bg-slate-600 text-white fixed duration-1000 top-0 left-0 right-0 p-5 flex items-center justify-between z-50'>
                <div className='navLogo md:ml-20'>
                    <Link onClick={() => setIcon(true)} className='text-2xl font-semibold' to="">START FRAMEWORK</Link>
                </div>
                <div onClick={() => setIcon(!icon)} className='navIcon md:hidden'>
                    {icon == true ? <i className="fa-solid text-3xl fa-bars"></i>
                        : <i className="fa-solid text-3xl fa-xmark"></i>}
                </div>
                <div className={`list absolute bg-slate-400 w-full top-full right-0 p-2 md:relative md:bg-transparent md:w-auto md:flex ${icon == true ? 'hidden' : 'block'}`}>
                    <ul className='text-xl md:flex md:gap-5 md:mr-20'>
                        {list.map((ele, index) => {
                            return <li onClick={() => setIcon(true)} key={index} className='my-5 md:my-2 cursor-pointer'><NavLink className={'p-2'} to={ele.path}>{ele.listname}</NavLink></li>
                        })}
                    </ul>
                </div>
            </nav >
        </>
    )
}
