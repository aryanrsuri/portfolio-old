/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Projects(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class={tw`flex flex-col leading-tight`}>
      <h2 class={tw`underline text-2xl font-bold`}>Projects</h2>
      <dl class={tw`text-md font-bold`}>
        <dt class={tw``}>
          <a
            class={tw`hover:opacity-80 text-[#92400e]`}
            href="https://github.com/aryanrsuri/auth"
          >
            → Authentication Api in Node
          </a>
        </dt>
        <dt class={tw``}>
          <a
            class={tw`hover:opacity-80 text-[#92400e]`}
            href="https://github.com/aryanrsuri/mern-todo"
          >
            → Mern Todo App
          </a>
        </dt>
        <dt class={tw``}>
          <a class={tw`hover:opacity-80 text-[#92400e]`} href="/">
            → This site in TS & Deno
          </a>
        </dt>
        <dt class={tw``}>
          <a
            class={tw`hover:opacity-80 text-[#92400e]`}
            href="https://github.com/aryanrsuri/wordle"
          >
            → A Wordle UI in JS
          </a>
        </dt>
        <dt class={tw``}>
          <a class={tw`hover:opacity-80 text-[#92400e]`} href="https://ucdavis.box.com/s/1k60w49ihhail54q3xznsmckwo7c5rx8">
            → Senior Design Project**
          </a>
        </dt>
      </dl>
    </div>
  );
}
