'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
    return (
        <div className='max-w-[1500px] flex m-auto bg-[#0f0f0f]'>
            <div>
                <h2 className='text-white pl-5'>New Release</h2>

                <div className='p-5 flex gap-5 flex-wrap'>
                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                            <div className="rounded-2xl border-2">
                                <Image src="/moana.jpg"width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                                <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                    <p className="text-center text-white border-b-2">Moana</p>
                                    <div className='flex w-full justify-between'>
                                        <p className='text-green-500'>₱300</p>
                                        <p>5.1k Likes</p>
                                    </div>
                                    <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                                </div>
                            </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Megan.jpg"width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Megan</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Sneaks.webp"width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Sneaks</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Mufasa.jpg"width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Mufasa</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Lilo.jpg" width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Lilo</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Jurassic.jpg" width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Jurrasic</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/httyd.jpg" width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">HTTYD</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1a1a1a] rounded-2xl w-60 relative">
                        <div className="rounded-2xl border-2">
                            <Image src="/Captain America.jpg" width={1000} height={1000} alt='image' className="w-full rounded-t-2xl h-90" objectFit='cover' />
                            <div className="flex flex-col content-between justify-between my-4 px-5 text-white">
                                <p className="text-center text-white border-b-2">Captain America</p>
                                <div className='flex w-full justify-between'>
                                    <p className='text-green-500'>₱500</p>
                                    <p>5.1k Likes</p>
                                </div>
                                <Link href="/booking" className='bg-cyan-600 py-2 rounded-md mt-1 text-center'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
