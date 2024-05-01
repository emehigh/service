"use client";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Link from "next/link";

function Modal() {


    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const id = searchParams.get("id");
    const pathname = usePathname();
    const router = useRouter();


    const [marca, setMarca] = useState("");
    const [model, setModel] = useState("");
    const [serieSasiu, setSerieSasiu] = useState("");
    const [tipMotorizare, setTipMotorizare] = useState("");
    const [capacitateMotor, setCapacitateMotor] = useState("");
    const [caiPutere, setCaiPutere] = useState("");
    const [problemaMasinii, setProblemaMasinii] = useState("");




    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit");
        const response = await fetch("/api/addcar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                marca,
                model,
                serieSasiu,
                tipMotorizare,
                capacitateMotor,
                caiPutere,
                problemaMasinii,
                id,
            }),
        });
        if (response.ok) {
            alert("Car added successfully");
            //go to the cars page with id 
            router.push(`/cars?id=${id}`);
        } else {
            alert("An error occurred");
        }
    }

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            

                            <form class="max-w-md mx-auto">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" onChange={event => setMarca(event.target.value)} name="marca" id="marca" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" onChange={event => setModel(event.target.value)} name="model" id="model" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" onChange={event => setSerieSasiu(event.target.value)} name="serie_sasiu" id="serie_sasiu" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Serie sasiu</label>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" onChange={event => setTipMotorizare(event.target.value)}  name="motorizare" id="motorizare" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tip motorizare</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" onChange={event => setCapacitateMotor(event.target.value)} name="capacitate" id="capacitate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Capacitate motor</label>
                                </div>
                            </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" onChange={event => setCaiPutere(event.target.value)} name="cai" id="cai" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cai putere</label>
                                </div>
                                <div class="relative z-0 w-full mb-5 group">
                                    <textarea type="text" onChange={event => setProblemaMasinii(event.target.value)} name="problema" id="problema" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Problema masinii</label>
                                </div>
                            <div className="w-full flex justify-between">
                                <button onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                <Link href={`cars?id=${id}`}>
                                    <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
                                </Link>
                            </div>
                            
                            </form>

                            
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;