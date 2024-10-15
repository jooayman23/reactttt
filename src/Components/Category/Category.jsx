import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Category() {
    return (
        <>
            <div className='text-center my-12 pt-11 flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>Category Component</h1>
                <div className='flex my-3 items-center gap-5'>
                    <span className='bg-slate-900 w-24 h-1'></span>
                    <i className="fa-solid fa-star"></i>
                    <span className='bg-slate-900 w-24 h-1'></span>
                </div>
            </div>
            <div className='flex flex-wrap flex-col items-center p-5'>
                <div className='w-1/4 border border-emerald-400 rounded-xl'>
                    <ul className='p-3 text-2xl flex flex-col md:flex-row justify-between'>
                        <li><Link to=''>Pc</Link></li>
                        <li><Link to='mac'>Mac</Link></li>
                        <li><Link to='phone'>Phone</Link></li>
                    </ul>
                </div>
                <div className='w-full my-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
