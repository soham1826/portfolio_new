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
        role,
        "heroImage":heroImage.asset->url,
        backgroundInformation,
        "profilePic":profilePic.asset->url,
        phoneNumber,
        email,
        address,
        resumeUrl
    }`,{next:{revalidate:30}})
    
    return response;
}


export async function getSocials(){
    const response = await client.fetch(`*[_type=="social"]{
        url,
    }`,{next:{revalidate:30}})
    return response
}

export async function getSkills(){
    const response = await client.fetch(`*[_type=="skill"]{
        title,
        progress,
        "image":image.asset->url,
        bgcolor,
    }`,{next:{revalidate:30}})

    return response;
}

export async function getExperience(){
    const response = await client.fetch(`*[_type =="experience"]{
        jobTitle,
        "compImage":companyImage.asset->url,
        company,
        dateStarted,
        dateEnded,
        isCurrentlyWorkingHere,
        technologies[]->{"image":image.asset->url},
        points,
    }`,{next:{revalidate:30}})

    return response;
}
export async function getProjects(){
    const response = await client.fetch(`*[_type =="project"]{
       title,
       "image":image.asset->url,
       summary,
       linktoSourceCode,
       linktoDemo,
       technologies[]->
    }`,{next:{revalidate:30}})

    return response;
}

export async function getOtherProjects(){
    const response = await client.fetch(`*[_type =="otherProject"]{
       title,
       linktoSourceCode,
    }`,{next:{revalidate:30}})

    return response;
}