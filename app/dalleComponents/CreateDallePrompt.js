'use server'

import PromptMatrix from "@/app/dalleComponents/PromptMatrix"
import CreateDalleURL from "@/app/dalleComponents/CreateDalleURL"

export default async function CreateDallePrompt(formData) {

        const valArray = [];
        console.log("begin")
        for(const value of formData.values()){
            console.log(value)
            valArray.push(value);
        }
        console.log(valArray.length)
        console.log(typeof valArray[0])
        const returnMessage = PromptMatrix(valArray)
        console.log(returnMessage);


        return returnMessage;

 
}