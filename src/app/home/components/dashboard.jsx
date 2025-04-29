'use client'
import React from 'react'
import { signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard = ({ children }) => {
    const router  = useRouter();
    const { data: session } = useSession();

  return (
    <div>
        <nav className='w-full py-3 px-2 z-30 fixed bg-[#1e2a35]'>

            <div className='flex justify-between items-center'>
                <div className='font-semibold flex items-center justify-center gap-2'>
                    <p className='text-[27px] text-white'>GoodSeats</p>
                </div>
                <div>
                    <div className='flex h-9 justify-center items-center gap-1'>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <div className='flex gap-3 rounded-lg px-3 py-3 hover:bg-sky-950 transition-all cursor-pointer'>
                                    <Avatar>
                                        <AvatarImage src={session?.user?.image || "/empty-avatar.jpg"} />
                                        <AvatarFallback>{session?.user?.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-[200px] mt-1 shadow-sm">
                                <DropdownMenuLabel className="font-normal py-1">
                                    <div className='flex items-center justify-start gap-2 p-0'>
                                        <Avatar>
                                            <AvatarImage src={session?.user?.image || "/empty-avatar.jpg"} />
                                            <AvatarFallback>{session?.user?.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className='text-[14px] text-[#344054]'>{session?.user?.name}</p>
                                            <p className='text-[11px] text-[#667085]'>{session?.user?.email}</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer px-2.5 py-2" onClick={() => signOut({ callbackUrl: '/auth/login' })}>
                                    <div className='flex items-center justify-start text-sm text-gray-700 gap-3'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.75 11.9971L15.75 9.00001M15.75 9.00001L12.75 6.00294M15.75 9.00001L5.25 9.00001M9.75 11.9971V12.7464C9.75 13.9878 8.74264 14.9942 7.5 14.9942H4.5C3.25736 14.9942 2.25 13.9878 2.25 12.7464V5.25367C2.25 4.01224 3.25736 3.00586 4.5 3.00586H7.5C8.74264 3.00586 9.75 4.01224 9.75 5.25367V6.00294" stroke="#3F3F46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>Log out</p>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>

        <section>
            <div className='flex h-screen'>
                <div className=' w-full'>
                    {children}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Dashboard;
