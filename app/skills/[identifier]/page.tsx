import { notFound } from "next/navigation";
import { getSkills } from "../SKILLS";

type skillPageProps = {
  params: { identifier: string };
};

export default async function SkillPage({ params }: skillPageProps) {
  const Skills = getSkills();
  const { identifier } = await params;
  const skill =  (await Skills).find((skill) => skill.id === identifier);

  if (!skill) {
    return notFound();
  }

  return (
    <article className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <p>{skill.id}</p>
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <p>{skill.category}</p>
      <p>{skill.createdAt}</p>
      <p>{skill.updatedAt}</p>
    </article> 
  );
}
