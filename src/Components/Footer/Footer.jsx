import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-slate-700 text-white text-center w-full'>
                <div className='flex flex-wrap gap-y-10 justify-between p-16'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='text-4xl my-3'>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='w-full md:w-1/3 my-3'>
                        <h2 className='text-4xl'>AROUND THE WEB</h2>
                        <div className='footerIcons flex justify-center gap-5 mt-5'>
                            <span className="fa-stack">
                                <i className="fa-regular fa-circle fa-stack-2x"></i>
                                <i className="fa-brands  fa-facebook-f"></i>
                            </span>
                            <span className="fa-stack">
                                <i className="fa-regular fa-circle fa-stack-2x"></i>
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                            <span className="fa-stack">
                                <i className="fa-regular fa-circle fa-stack-2x"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </span>
                            <span className="fa-stack">
                                <i className="fa-regular fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-earth-africa"></i>
                            </span>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <h2 className='text-4xl my-3'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                <div className='w-full bg-slate-800 p-6'>
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}
