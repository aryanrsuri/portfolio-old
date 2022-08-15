/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Projects } from "../components/Projects.tsx";
import { Experience } from "../components/Experience.tsx";
import { Honors } from "../components/Honors.tsx";
import { Links } from "../components/Links.tsx";
import { Education } from "../components/Education.tsx";
export default function Home() {
  return (
    <main
      class={tw`p-4 sm:text-lg text-[#1e242e] flex flex-col gap-10 max-w-2xl mx-auto cursor-pointer h-full overflow-y-hidden text-sm`}
    >
      <div class={tw`flex flex-col content-start mt-24 leading-tight`}>
        <h1 class={tw`text-4xl sm:text-6xl text-zinc-900 font-bold`}>
          Hello, I'm Aryan.
        </h1>
        <Education />
      </div>
      <Projects />
      <Experience />
      <Honors />
      <Links />
    </main>
  );
}
