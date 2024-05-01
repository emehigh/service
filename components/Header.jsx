
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        
        <div className="grotesk flex items-center justify-between py-4 px-4 sm:mx-0 sm:px-0 md:px-6">
        

            <div className="mt-4 d-flex flex pb-4 pl-8">
            <Image
                src="/images/logo.jpg"
                alt="logo"
                width={100}
                height={50}
                className='align-middle text-3xl font-bold text-black'
                />
                <div className="hidden pl-14 mt-6 align-middle xl:inline-block">
                    <a href="/" className="pr-12 text-xl text-black">
                    Acasa
                    </a>
                    <a href="/" className="pr-12 text-xl text-black">
                    Galerie
                    </a>
                    <a href="/" className="pr-12 text-xl text-black">
                    Servicii
                    </a>
                    <a href="/" className="text-xl text-black">
                    Despre noi
                    </a>
                </div>
                </div>
            <div className="flex items-center">
            <div className="hidden py-1 text-right xl:inline-block">

                <Link
                className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
                href="/login"
                >
                Programeaza-te!
                </Link>
            </div>
            <button className="pr-12 pl-4">
                <svg
                className="mr-auto inline-block text-black xl:hidden"
                width="33"
                height="50"
                viewBox="0 0 23 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0.892578 10.8691H22.1058"
                    stroke="black"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
                <path
                    d="M0.892578 18.8691H22.1058"
                    stroke="black"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
                <path
                    d="M22.1066 14.8688H0.893399"
                    stroke="black"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            </div>
    </div>
  </div>
  )
}

export default Header