// import { resolve } from "path";

type Skill ={
    id: string,
    name: string,
    description: string,
    category:string,
    createdAt:string,
    updatedAt:string
}

export let SKILLS: Skill[] = [
    {
        id: "1",
        name: "React",
        description: "A JavaScript library for building user interfaces",
        category: "Frontend",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01"
    },
    {
        id: "2",
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
        category: "Backend",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01"
    }
];

export async function getSkills(){

   await new Promise(resolve => {
    setTimeout(() => {
        resolve(null)
    },3000);
    })

    return[...SKILLS];
}

export function addSkill(skill:Skill){
    SKILLS =[...SKILLS,skill];
    console.log('skills updated', SKILLS)
}