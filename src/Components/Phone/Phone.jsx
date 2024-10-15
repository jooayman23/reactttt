import React from 'react'
import phone from '../../images/phone.webp'

export default function Phone() {
    return (
        <div className='bg-emerald-400 rounded-3xl md:flex p-5 items-start'>
            <div className='flex flex-col items-center'>
                <img src={phone} alt="" />
                <h1 className='text-3xl p-2'>Phone</h1>
            </div>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem libero dignissimos harum minima. Architecto, nisi quam! Facilis quam architecto nobis aspernatur harum ex dignissimos, quia doloremque, earum vero veniam!</p>
        </div>
    )
}
