/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Back(props: h.JSX.HTMLAttributes<HTMLLinkElement>) {
    return (
        <a class={tw`text-xl font-bold text-[#24292f] hover:opacity-80`} href="/">
            ← Back to Home
        </a>
    );
}