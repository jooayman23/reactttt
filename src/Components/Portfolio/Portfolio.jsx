import React, { useState } from 'react'

export default function Portfolio() {

    const [img, setImg] = useState([
        { path: 'https://routeegy.github.io/startFramework/assets/images/poert1.png' },
        { path: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
        { path: 'https://routeegy.github.io/startFramework/assets/images/port3.png' },
        { path: 'https://routeegy.github.io/startFramework/assets/images/poert1.png' },
        { path: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
        { path: 'https://routeegy.github.io/startFramework/assets/images/port3.png' },
    ])

    const [openImg, setOpenImg] = useState(true)
    const [imgsrc, setImgSrc] = useState()

    return (
        <div onClick={() => setOpenImg(!openImg)} className='flex flex-col justify-center items-center p-5 text-slate-800'>
            <h1 className='text-5xl font-bold text-center'>PORTFOLIO COMPONENT</h1>
            <div className='flex my-3 items-center gap-5'>
                <span className='bg-slate-900 w-24 h-1'></span>
                <i className="fa-solid fa-star"></i>
                <span className='bg-slate-900 w-24 h-1'></span>
            </div>
            <div onClick={() => setOpenImg(!openImg)} className='flex flex-wrap gap-y-5 justify-center'>
                {img.map((image, index) => {
                    return <div key={index} onClick={() => setImgSrc(image.path)} className='md:w-1/3 p-5 w-full overflow-hidden'><img className='w-full h-full rounded-lg' src={image.path} alt="" />
                        <div className='layer overflow-hidden flex items-center justify-center bg-emerald-500 w-full h-full rounded-lg opacity-0 -translate-y-full hover:opacity-80 duration-500'>
                            <i className='fas fa-plus text-5xl text-white'></i>
                        </div>
                    </div>
                })}
            </div>
            <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-red-100 bg-opacity-50 ${openImg ? 'hidden' : 'flex'}`}>
                <img className='w-3/4 lg:w-1/2 rounded-lg' src={imgsrc} alt="" />
                <i onClick={() => setOpenImg(!openImg)} className={`fa-solid text-4xl fa-xmark absolute top-20 right-20`}></i>
            </div>
        </div>
    )
}
