/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Experience(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class={tw`flex flex-col leading-tight`}>
    <h2 class={tw`underline text-2xl font-bold`}>Work Experience</h2>
    <dl class={tw`text-md font-bold`}>
      <dt class={tw``}>
        <a
          class={tw`hover:opacity-80 text-[#92400e]`}
          href="https://github.com/aryanrsuri/Libretext"
        >
          → Libretexts — Front End Developer
        </a>
      </dt>
      <dt class={tw``}>
        <p class={tw`text-[#92400e]`}>
          → Sacramento State ATS — Teaching Assistant 
        </p>
      </dt>
      <dt class={tw``}>
        <p
          class={tw`text-[#92400e]`}
          
        >
          → Granite Bay Robotics 295 — Software and Mechanical Lead 
        </p>
      </dt>
    </dl>
  </div>
  );
}