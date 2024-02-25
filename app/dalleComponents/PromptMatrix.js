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
    const stringArrayItems = [];
    const stringArrayColors = [];

    for(let i = 0; dataArrayCopy.length > i ; i++){
        console.log(i);
        switch (dataArrayCopy[i]) {
            case "C01":{
                const catString = "domestic cat";
                stringArrayData.push(catString);
                break;
            }
            case "2 years":{
                const babyString = "baby";
                stringArrayData.push(babyString);
                break;
            }
            case "20 years":{
                const ancientString = "ancient";
                stringArrayData.push(ancientString);
                break;
            }
            case "60k":{
                const blackString = "black";
                stringArrayData.push(blackString);
                break;
            }
            case "150k":{
                const royalGString = "Royal Golden";
                stringArrayData.push(royalGString);
                break;
            }
            case "Aws1": {
                const awsString = "skepter";
                stringArrayItems.push(awsString);
                break;
            }
            case "Sec": {
                const secString = "Shield Emblem";
                stringArrayItems.push(secString);
                break;
            }
            case "Gitops": {
                const gitOpsString = "#F05032"
                stringArrayColors.push(gitOpsString);
                break;
            }
            case "K8s": {
                const kubeString = "#326CE5"
                stringArrayColors.push(kubeString);
                break;
            }
            case "secret": {
                const secretString = "gold chain necklace"
                stringArrayItems.push(secretString);
                break;
            }
            case "TS": {
                const TsString = "glowing blue chain necklace"
                stringArrayItems.push(TsString);
                break;
            }
            default: {
                console.log("couldn't find anymore");
            }
        }

    }
//Prompt structure

    function combineStringFunc(arr){
        let longAssString = "";
        arr.forEach((val) => longAssString = longAssString + " " + val + ",");
        return longAssString;
    }

    const characterTraits = `Cold wax oil painting with a ${stringArrayData[2]} frame, depicting a ${stringArrayData[1]} ${stringArrayData[0]}. `;
    const items = `The depicted ${stringArrayData[0]} is wearing or holding a: ${combineStringFunc(stringArrayItems)}. `;
    const colors = `The main colors are: ${combineStringFunc(stringArrayColors)}. `;

    const goldenPrompt = `${characterTraits}${items}${colors}`;

    console.log(goldenPrompt);

    //const fullyQualifiedPropmt = `Cold wax oil painting of a ${stringArrayData[0]}, wearing (or holding) a ${stringArrayData[1]}. The main color is: ${stringArrayData[2]}`;

    //console.log(fullyQualifiedPropmt);

//end prompt structure
//FUCK IT import the whole goddamn thing from here

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const response =  await openai.images.generate({
            model: "dall-e-3",
            prompt: goldenPrompt,
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