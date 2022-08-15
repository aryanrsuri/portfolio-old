/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Honors(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div class={tw`flex flex-col leading-tight`}>
        <h2 class={tw`underline text-2xl font-bold`}>Honors & Awards</h2>
        <dl class={tw`font-semibold`}>
          <dt>
            <p class={tw`text-[#1e242e]`}>
              → **UC Davis Chemical Engineering Best Student Design Award <b>June 2022</b>
            </p>
          </dt>
          <dt>
            <p class={tw`text-[#1e242e]`}>
              → College of Engineering Deans List <b>Fall 2021</b>
            </p>
          </dt>
          <dt>
            <p class={tw`text-[#1e242e]`}>
              → College of Engineering Deans List <b>Fall 2020</b>
            </p>
          </dt>
        </dl>
      </div>
    )
}