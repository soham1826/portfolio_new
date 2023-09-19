// import next from "next";
import { createClient,groq } from "next-sanity"

export const client = createClient({ 
projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
dataset:process.env.NEXT_PUBLIC_DATASET,
apiVersion:"2023-09-16",
useCdn:false,})

export async function getAbout(){
    const response = await client.fetch(`*[_type =="pageInfo"]{
        name,
        backgroundInformation,
        "heroImage":heroImage.asset->url,
        role,
    }`,{next:{revalidate:3}})
    
    return response;
}