import Image from 'next/image';

export default function DisplayDalleImage(url){

return(
    <Image
        src={url}
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
)}