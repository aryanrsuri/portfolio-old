/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Education(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class={tw`flex flex-col leading-tight`}>
    <p class={tw`text-lg font-semibold`}>Chemical Engineering B.S, UC Davis. June 2022.
    <a href="/evidence" class={tw`text-[#cf222e] hover:opacity-80`}> skills. </a>
    </p>
    
  </div>
  );
}