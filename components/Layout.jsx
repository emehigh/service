
import React from 'react'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faOilCan, faCarBattery, faGear, faGaugeHigh, faCarBurst, faCircleRadiation} from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Fa-o repede. Fa-o bine!
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
            Fao International oferă o gamă completă de servicii auto, ITP, geometrie roți 3D și constatări daune. Ne dedicăm să oferim clienților nostri servicii la cel mai înalt nivel de calitate și profesionalism. Acest lucru se poate vedea în fiecare parte a lucrării noastre, de la preluarea vânzării de piese, până la efectuarea reparațiilor și a ITP-ului.
            </p>
          </div>
          <div className="mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <Image src="/images/landing1.jpg" alt="Hero" 
            width={500}
            height={400}
            className='ml-20'
            />
          </div>
          <div className=" inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="/images/landing1.jpg" alt="image" />
          </div>
        </div>
        <div className="mt-0 bg-white lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5  lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Solutii pentru orice fel de promblema tehnica.
                </h2>
              </div>
              <div
                className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
                
              >
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faOilCan} />
                    <h2>
                        Ulei/Filtre
                    </h2>
                </div>
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faCarBurst} />
                    <h2>
                        Tinichigerie
                    </h2>
                </div>
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <h2>
                        Consum
                    </h2>
                </div>
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faGear}  style={{ fontSize: 10 }}/>
                    <h2>
                        Motor
                    </h2>
                </div>
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faCarBattery} />
                    <h2>
                        Baterie
                    </h2>
                </div>
                <div className="items-center justify-center lg:inline-block sm:w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-65 transition duration-300 ease-in-out hover:opacity-100">
                    <FontAwesomeIcon icon={faCircleRadiation} />
                    <h2>
                        Anvelope
                    </h2>
                </div>
                
              </div>
     
            </div>
          </div>
          <div className="text-black mt-20">
            <div
              className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
            >
              <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                  Service Auto Bucuresti
                </h2>
                
                <h3  className="underline-blue font-semibold">
                  100% Rezultat garantat!
                </h3>
              </div>
              <div className='w-full flex justify-center gap-10 flex-wrap'>
                <div class="max-w-sm rounded  shadow-lg w-full">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Toate Marcile Auto</div>
                        <p class="text-gray-700 text-base">
                        Suntem de parere ca relatia dintre echipa noastra si clienti se bazeaza 100% pe incredere si loialitate. In cursul celor 10 ani de experienta in domeniu, am incercat sa intelegem cat mai bine nevoile clientilor nostri, adaptand serviciile pentru intretinerea optima a autoturismului dumneavoastra, indiferent de marca si modelul acestuia.                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Audi</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Logan</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mercedes</span>
                    </div>
                </div>

                <div class="max-w-sm rounded  shadow-lg w-full">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Servicii Variate</div>
                        <p class="text-gray-700 text-base">
                        Va propunem servicii complete de mecanica auto, in speranta unei colaborari cat mai avantajoase pentru dumneavoastra. In ideea de a raspunde tuturor cerintelor, ne-am propus sa extindem gama de servicii, mentinand acelasi nivel de calitate. Va oferim servicii de diagnoza auto computerizata si revizie auto periodica, la cele mai inalte standarde.

</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Siguranta</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Preturi mici</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rapid</span>
                    </div>
                </div>

                <div class="max-w-sm rounded shadow-lg w-full">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Vopsitorie & Tinichigerie</div>
                        <p class="text-gray-700 text-base">
                        Serviciile noastre de vopsire și tinichigerie auto includ de la reparații de zgârieturi si vopsea auto, reparații de bare de protecție și multe altele. Dexcar Service dispune de tehnicieni autorizati și echipamentele necesare pentru a reda aspectul original al vopselei, cu o calitate ridicată și la un cost cat mai rentabil sau pe banii asiguratorului.

</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Calitate</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Atentie la detalii</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Specialisti</span>
                    </div>
                </div>

              </div>
            
            </div>
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default Layout