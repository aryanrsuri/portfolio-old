/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Education(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class={tw`flex flex-col leading-tight`}>
      <p class={tw`text-sm sm:text-lg font-semibold`}>
        Chemical Engineering B.S, UC Davis. June 2022.
        <a href="/evidence" class={tw`text-red-700 hover:opacity-80`}>
          {" "}
          skills. ←
        </a>
      </p>
    </div>
  );
}
