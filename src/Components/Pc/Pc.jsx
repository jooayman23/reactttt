import React from 'react'
import pc from '../../images/pc3.webp'

export default function Pc() {
    return (
        <div className='bg-emerald-400 rounded-3xl md:flex p-5 items-start'>
            <div className='flex flex-col items-center'>
                <img className='' src={pc} alt="" />
                <h1 className='text-3xl p-2'>Pc</h1>
            </div>
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, repellat quia vitae ipsa illo, rerum omnis, autem similique dolorum ipsam error. Adipisci aliquam quisquam, hic velit excepturi reiciendis! Deleniti, voluptatum!</p>
        </div>
    )
}
