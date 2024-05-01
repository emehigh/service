"use client";
import React from 'react'
import { useSearchParams,  } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Modal from '@components/Modal';
const Cars = () => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    useEffect(() => {
      setLoading(true)
      const fetchData = async () => {  
      try{
          const res = await fetch(`/api/user/${id}`);
          if(res.status === 200){
            const data = await res.json()
            setUser(data)
            setLoading(false)
          }
        }
        catch(error){
          console.log(error)
        }
      }
    fetchData()
    }, [searchParams])
    
  if(loading) return <div>Loading...</div>

  return (
    <div class="bg-white overflow-hidden  rounded-lg w-full ">
    
      <div class="bg-white overflow-hidden shadow rounded-lg border w-full ">
        <div class="px-4 py-5 sm:px-6 flex">
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Profil client
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    In aceasta pagina puteti vizualiza statusul reparatiei masinii si datele personale.
                </p>
            </div>
            <Link href={`?modal=true&&id=${id}`} class="inline-flex ml-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Programeaza-te
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                  
              </Link>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Nume
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.name} {user.surname}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.email}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.phoneNumber}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Bucuresti
                    </dd>
                </div>
            </dl>
        </div>
  </div>
    <div className='w-full mt-5 flex justify-center flex-wrap'>


        {user.cars && user.cars.map(car => (

        <div class="bg-white m-5 border-gray-200 w-full rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <div class="p-5">
              <div className='flex' >

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.marca}</h5>
                  <h5 class="mb-2 text-xl  ml-3 tracking-tight text-gray-600 dark:text-white">  {car.model}</h5>
                  {car.status === 'active' 
                  ? 
                
                     <div className='w-full flex flex-wrap'>
                                
                        <span class='bottom-0 ml-auto  right-0 h-4 w-4  rounded-full bg-yellow-500 ring ring-white'>
                            <p className=' absolute w-full -ml-24 -mt-1'>
                                In asteptare
                            </p>
                        
                        </span> 
                        <hr />
                        <div className='w-full ml-5 mt-5 '>
                            
                            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Problema masinii: {car.problemaMasinii}</p>
                            
                            
                        </div>
                    </div> 
                
                  : (car.status === 'scheduled' ?
                  <div className='flex w-full'>
                    <div className='w-full ml-5 '>
                        <h1>Data programarii: {car.date}</h1>
                        <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Problema masinii: {car.problemaMasinii}</p>
                    </div>
                    <span class='bottom-0 ml-auto  right-0 h-4 w-4 rounded-full bg-orange-500 ring ring-white'>
                        <p className=' absolute w-full -ml-24 -mt-1'>
                            Programat   
                        </p>
                    </span>
                  </div>
                  :
                    car.feedback && 
                    <div className='w-full flex flex-wrap'>
                        
                        <span class='bottom-0 ml-auto  right-0 h-4 w-4  rounded-full bg-green-500 ring ring-white'>
                            <p className=' absolute w-full -ml-24 -mt-1'>
                                Finalizat
                            </p>
                        
                        </span> 
                        <hr />
                        <div className='w-full ml-5 mt-5 '>
                            <h1>Data programarii: {car.date}</h1>
                            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Problema masinii: {car.problemaMasinii}</p>
                            <h1>Feedback: {car.feedback}</h1>
                            
                        </div>
                    </div>
                    
                )}
                  

               </div>
              
              
             
        </div>
      </div>
        ))}


    </div>
  </div>
  )
}

export default Cars