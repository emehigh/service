"use client";
import React from 'react'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import  AdminNavbar  from '@components/AdminNavbar'

const Programari = ({children}) => {

    const { data: session } = useSession();
    useEffect(() => {
    console.log(session)
    }, [session])

  if(session?.user !== 'admin') return <div className='flex justify-center mt-20 text-3xl'>Unauthorized</div>

  return (
    <div>
    <AdminNavbar/>
      
    <section class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                <div class="w-full max-w-3xl mx-auto">
                
                    <div class="-my-6">

                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The origin</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                                <div class="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                        
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The milestone</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                                <div class="text-xl font-bold text-slate-900">Reached 5K customers</div>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                        
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                                <div class="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                        
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The IPO</div>
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
                                <div class="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Programari