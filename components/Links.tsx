/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Links(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div class={tw`flex flex-col w-full leading-tight`}>
        <h2 class={tw`underline text-2xl font-bold`}>Links</h2>
        <dl class={tw`text-md font-bold`}>
          <dt class={tw``}>
            <a class={tw`hover:opacity-80 text-[#92400e]`} href="/Resume_2022.pdf" download>
              → CV
            </a>
          </dt>
        <dt class={tw``}>
            <a class={tw`hover:opacity-80 text-[#92400e]`} href="mailto:aryanrsuri@gmail.com
            ">
                → Email
            </a>
        </dt>

          <dt class={tw``}>
            <a
              class={tw`hover:opacity-80 text-[#92400e]`}
              href="https://github.com/aryanrsuri/"
            >
              → Github
            </a>
          </dt>
          <dt>
            <a
                class={tw`hover:opacity-80 text-[#92400e]`}
                href="https://www.linkedin.com/in/aryanrsuri/"
            >
                → LinkedIn
            </a>
          </dt>

        </dl>
      </div>
    );
}