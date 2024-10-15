import React from 'react'

export default function Contact() {
    return (<>
        <div className='flex justify-center items-center flex-col text-center mt-32'>
            <h1 className='text-5xl font-bold'>CONATCT SECTION</h1>
            <div className='flex my-3 items-center gap-5'>
                <span className='bg-slate-900 w-24 h-1'></span>
                <i className="fa-solid fa-star"></i>
                <span className='bg-slate-900 w-24 h-1'></span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-10 my-5 p-5' action="">
            <input className='w-full md:w-2/4 p-4 border-b-2 border-slate-300 focus: rounded-lg' type="text" placeholder='  UserName' />
            <input className='w-full md:w-2/4 p-4 border-b-2 border-slate-300 focus: rounded-lg' type="text" placeholder='  UserAge' />
            <input className='w-full md:w-2/4 p-4 border-b-2 border-slate-300 focus: rounded-lg' type="text" placeholder='  UserEmail' />
            <input className='w-full md:w-2/4 p-4 border-b-2 border-slate-300 focus: rounded-lg' type="text" placeholder='  UserPassword' />
            <button className='p-3 self-start md:self-auto bg-emerald-500 rounded-lg text-white'>Send Message</button>
        </div>
    </>
    )
}
