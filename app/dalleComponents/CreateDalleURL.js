'use server'
import OpenAI from "openai";
import Image from "next/image";
import use from "react";

export async function CreateDalleURL(returnMessage){
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const response =  await openai.images.generate({
        model: "dall-e-3",
        prompt: returnMessage,
        n: 1,
        size: "1024x1792",
        quality: "hd",
        style: "vivid",
    });
    const image_url = response.data[0].url;

    console.log(image_url);

return image_url

}