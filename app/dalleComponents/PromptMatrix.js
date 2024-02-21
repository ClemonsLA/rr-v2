'use server'
import OpenAI from "openai";

export default async function PromptCreate(finDataArray){
    finDataArray.forEach((val)=>
    console.log(val)
    )

    const dataArrayCopy = [];
    finDataArray.forEach((item) => dataArrayCopy.push(item))
    dataArrayCopy.forEach((item) => console.log(`Here we have a ${item}`))
    const stringArrayData = [];

    switch (dataArrayCopy[0]){
        case "C01":{
            const catString = "domestic cat";
            stringArrayData.push(catString);
            console.log(stringArrayData[0]);
            break;
        }
        case "C02": {
            console.log("not a domestic cat")
        }
        default:{
            console.log(dataArrayCopy.length);
        }
    }

    for(let i = 1; dataArrayCopy.length > i ; i++){
        console.log(i);
        switch (dataArrayCopy[i]) {
            case "Aws1": {
                const awsString = "skepter";
                stringArrayData.push(awsString);
                console.log(stringArrayData[1]);
                break;
            }
            case "Sec": {
                const secString = "Shield Emblem";
                stringArrayData.push(secString);
                console.log(stringArrayData[i - 1]);
                break;
            }
            case "Gitops": {
                const gitOpsString = "#F05032"
                stringArrayData.push(gitOpsString);
                console.log(stringArrayData[i - 1]);
                break;
            }
            case "K8s": {
                const kubeString = "#326CE5"
                stringArrayData.push(kubeString);
                console.log(stringArrayData[i - 1]);
                break;
            }
            default: {
                console.log("couldn't find anymore");
            }
        }

    }
//Prompt structure
    stringArrayData.forEach((val) => console.log(val));

    const fullyQualifiedPropmt = `Cold wax oil painting of a ${stringArrayData[0]}, wearing (or holding) a ${stringArrayData[1]}. The main color is: ${stringArrayData[2]}`;

    console.log(fullyQualifiedPropmt);
//FUCK IT import the whole goddamn thing from here

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const response =  await openai.images.generate({
            model: "dall-e-3",
            prompt: fullyQualifiedPropmt,
            n: 1,
            size: "1024x1792",
            quality: "hd",
            style: "vivid",
        });
        const image_url = response.data[0].url;

        console.log(image_url);   
//to here 

    return image_url;
}