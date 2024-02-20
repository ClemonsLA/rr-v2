'use client'
import CreateDallePrompt from '@/app/dalleComponents/CreateDallePrompt'
import DisplayDalleImage from '@/app/dalleComponents/DisplayDalleImage'
import { useRef, useState, use } from 'react';
import Image from 'next/image';

export function FormWrapper({children}){
    const [gURL, setGurl] = useState("./../public/vercel.svg")

    async function getDalleShit(formData){
        const goldenURL = await CreateDallePrompt(formData);
        console.log(goldenURL);
        setGurl(goldenURL);
    }

    return(
    <div className="grid grid-cols-2 justify-center content-center h-full w-full">
        
        <form action={getDalleShit} className="grid justify-center content-center">
            <div className="flex flex-col flex wrap h-[90%] w-[90%]">
                <div>
                    <div className="flex flex-row-reverse">1/2</div>
                </div>
                
                <div className="grid grid-flow-row auto-rows-max">
                    {children}
                </div>
                <div>
                    <button type="submit">Button1</button>
                </div>


            </div>
        </form>

                <div>Dalle Pic
                    <Image
                        src={gURL}
                        width={1024}
                        height={1792}
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