import React from 'react'


export default function About() {
    return (
        <>
            <div className='py-44 px-20 flex flex-col justify-center items-center bg-emerald-500 text-white'>
                <h1 className='text-5xl font-semibold text-center'>ABOUT COMPONENT</h1>
                <div className='flex my-3 items-center gap-5'>
                    <span className='bg-white w-24 h-1'></span>
                    <i className="fa-solid fa-star"></i>
                    <span className='bg-white w-24 h-1'></span>
                </div>
                <div className='flex flex-wrap gap-y-10 w-full'>
                    <p className='w-full md:w-1/2 md:px-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='w-full md:w-1/2 md:px-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </>
    )
}
