// app/skills/create.page.tsx
"use client";

import { useActionState } from "react";
import { createSkill } from "@/app/actions/skills";

const initialState = {
  message: "",
};
export default function NewSkillPage() {
  const [state, formAction, pending] = useActionState(
    createSkill,
    initialState,
  );

  return (
    <form action={formAction} className=" p-4 max-w-md mx-auto form flex flex-col gap-4">
      <input type="text" name="name" placeholder="Skill name" className="input input-bordered w-full " />
      <textarea
        name="description"
        placeholder="Skill description"
        className="input p-2 input-bordered w-full "
      ></textarea>
      <input
        type="text"
        name="category"
        placeholder=" Skill category"
        className="input input-bordered w-full "
      />

      <p aria-live="polite" className="text-red-500"> {state?.message}</p>

      <button className="btn btn-primary" disabled={pending}>{pending ? "creating" : "create SKill"}</button>
    </form>
  );
}
