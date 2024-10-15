import React, { useEffect, useState } from 'react'
import style from './Mac.module.css'
import mac from '../../images/mac2.webp'


export default function Mac() {
    return (
        <>
            <div className='bg-emerald-400 rounded-3xl md:flex p-5 items-start'>
                <div className='flex flex-col items-center'>
                    <img className='w-full rounded-3xl' src={mac} alt="" />
                    <h1 className='text-3xl p-2'>Mac</h1>
                </div>
                <p className='text-xl p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi fuga sed velit iure et quod perspiciatis aperiam numquam! Odio delectus aliquam suscipit nesciunt eum nihil dignissimos porro illo in?</p>
            </div>
        </>
    )
}
