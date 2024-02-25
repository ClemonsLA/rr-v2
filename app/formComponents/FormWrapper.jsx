'use client'
import CreateDallePrompt from '@/app/dalleComponents/CreateDallePrompt'
import { useRef, useState, use, useEffect } from 'react';
import Image from 'next/image';

export function FormWrapper({children}){
    const [gURL, setGurl] = useState("https://res.cloudinary.com/dd7mi7bpp/image/upload/v1690665594/samples/man-on-a-street.jpg")

    async function getDalleShit(formData){
        const goldenURL = await CreateDallePrompt(formData);
        console.log(goldenURL);
        setGurl(goldenURL);
    }

    return(
    <div className="grid grid-cols-2 justify-center content-center items-center h-full w-full">
        
        <form action={getDalleShit} className="grid justify-center content-center ">
            <div className="backdrop-blur bg-white/5 grid h-[80vh] rounded-lg shadow sm:p-8 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                <div>
                    <div className="flex flex-row-reverse"></div>
                </div>
                
                <div className="grid grid-flow-row auto-rows-max">
                    {children}
                </div>
                <div className='grid place-content-center p-2'>
                    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="submit">Create</button>
                </div>


            </div>
        </form>

                <div className='grid w-[80%] h-[80vh] justify-self-center content-center'>
                    <Image
                        src={gURL}
                        width={500}
                        height={500}
                        alt="Dalle Generated Image"
                        style={{
                            objectFit: "contain",
                            width: '100%',
                            height: 'auto',
                                    }}
                        sizes="100vw">
                    </Image>
                </div>
    </div>
    )
}