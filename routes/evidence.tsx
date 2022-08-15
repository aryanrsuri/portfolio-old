/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Back } from "../components/Back.tsx";
import  Evidence  from "../components/Evidence.tsx";
export default function Page() {
  return (
    <main
      class={tw`text-[#24292f] text-justify font-semibold flex flex-col gap-8 max-w-3xl mx-auto mt-8`}
    >
        <Back />
        <Evidence /> 
    </main>
  );
}
