/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Projects } from "../components/Projects.tsx";
import { Experience } from "../components/Experience.tsx";
import { Honors } from "../components/Honors.tsx";
import { Links } from "../components/Links.tsx";
export default function Home() {
  return (
    <main
      class={tw`text-lg text-[#24292f] flex flex-col gap-10 max-w-md m-auto `}
    >
      <div class={tw`flex flex-col content-start mt-24`}>
        <h1 class={tw`text-6xl text-[#24292f] font-bold`}>Hello, I'm Aryan.</h1>
        <p class={tw`font-semibold`}>
          As an engineer, I like to <span class={tw`line-through`}> break </span>
          make things. <a class={tw`hover:opacity-80 text-[#92400e]`} href="/evidence"> skills.</a>
        </p>
      </div>
      <Projects />
      <Experience />
      <Honors />
      <Links />
    </main>
  );
}
