import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk"
import experience from './sanity/schemas/experience';
import pageInfo from './sanity/schemas/pageInfo';
import skill from './sanity/schemas/skill';
import social from './sanity/schemas/social';
import project from './sanity/schemas/project';

const config = defineConfig({
    projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_DATASET,
    title:"My portfolio",
    apiVersion:"2023-09-16",
    basePath:"/studio",
    plugins:[deskTool()],
    schema:{types:[pageInfo,experience,skill,social,project]}
})

export default config;