import React from 'react'

const Footer = () => {
  return (
    <footer className="grotesk bg-[#f9fbfb]">
    <div className="max-w-8xl mx-auto px-5 py-24 text-black">
      <div className="order-first flex flex-wrap justify-center text-left">
        <div className="w-full px-4 md:w-2/4 lg:w-1/5">
          <h2 className="mb-3 text-lg tracking-widest">Pagini</h2>
          <nav className="list-none space-y-2 py-3">
            <li>
              <a href="/">Acasa</a>
            </li>
            <li>
              <a href="/">Galerie</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Servicii</a>
            </li>
            
          </nav>
        </div>
        <div className="w-full px-4 md:w-2/4 lg:w-1/5">
          <h2 className="mb-3 text-lg tracking-widest">Detalii</h2>
          <nav className="mb-10 list-none space-y-2 py-3">
            <li>
              <a href="/">Mecanici</a>
            </li>
            <li>
              <a href="/">Electricieni</a>
            </li>
            <li>
              <a href="/">Experienta</a>
            </li>
            
            
          </nav>
        </div>

        
        <div className="w-full md:w-2/4 lg:w-1/5">
          <a href="/">
            <div className="relative border border-black transition hover:border-gray-500">
              <div className="absolute top-0 right-0 pt-2 pr-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66992 0.747559L0.669922 6.74756"
                    stroke="black"
                  />
                  <path
                    d="M0.669922 0.747559H6.66992V6.74756"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="p-6">
                Intra in contact cu cei mai priceputi mecanici.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="px-2">
      <div className="max-w-8xl mx-auto px-5 py-6">
        <h2 className="text-black">Calitate garantata.  </h2>
        <div>
          <h2 className="my-4 text-sm">
            
                Fao Service doreste sa ofere un model de urmat in breasla service-urilor auto prin expertiza si pasiunea profesionistilor sai si prin 
                <br></br>
                calitatea serviciilor prestate. Este foarte usor sa ne contactezi si sa-ti faci o programare la service-ul nostru. Ne poti contacta 
                <br></br>pentru a ne solicita ajutorul atunci cand se iveste o problema la masina ta. Iti vom raspunde prompt si vom stabili impreuna data si ora la care poti veni la service.

            
          </h2>
        </div>
        <div className="absolute right-0 -mt-24 hidden text-black lg:inline-block">
          <a href="/" className="mr-16">
            Terms & Conditions
          </a>
          <a href="/" className="mr-16">
            Privacy Policy
          </a>
          <a href="/" className="mr-16">
            Cookie Policy
          </a>
        </div>
        <div className="right-0 inline-block pt-12 pb-6 pr-20 text-sm text-black md:hidden">
          <a href="/" className="mr-16">
            Terms & Conditions
          </a>
          <a href="/" className="mr-16">
            Privacy Policy
          </a>
          <a href="/" className="mr-16">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer