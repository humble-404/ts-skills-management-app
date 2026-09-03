import Link from "next/link";
import { getSkills } from "./SKILLS";
export default async function SkillsPage() {
  const skills = await getSkills();
  console.log(skills);
  return (
    <section className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <h1>Skills</h1>
      <Link className="btn btn-primary self-end" href='/skills/create'> Create skills </Link>
      <ul className="menu">
        {skills.map((skill) => (
          <li key={skill.id}>
            <a href={`/skills/${skill.id}`}>{skill.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
