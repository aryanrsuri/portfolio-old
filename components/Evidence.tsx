/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Evidence() {
  return (
    <div class={tw`flex flex-col gap-4`}>
      <p class={tw`text-lg text-[#cf222e]`}>
        <b>Software Engineering skills</b>: Python, Typescript, Node, React,
        Deno Fullstack dev. <b>Chemical engineering skills</b>: Process Control
        and Dynamics, Techno-Economic analysis, ASPEN Plus, SuperPro design,
        Kinetics, Heat & Mass transfer, Calculus.
      </p>

      <div>
        <h1 class={tw`underline text-xl text-[#24292f] font-bold `}>
          {" "}
          Evidence of Excellence{" "}
        </h1>
        1. Led a team of 4 to design and release a 15+ Unit SuperPro Simulation
        of a biochemical production facility of Human Serum Albumin (HSA) using
        a Lemna Minor cell line . First, this required kinetic engineering and
        material balances to calculate the growth of HSA on L. minor (using
        Monod growth estimation) based on past research and current designs
        (such as the Parabel facility) and then constructed a novel downstream
        purification section optimized for Lemna, using a series of PFF, depth,
        and TFF filtration units to lower chromatography resin costs in the
        later affinity column stage. As a next step, I performed a
        Techno-Economic analysis of this simulation rooted in sensitivity
        analysis of titer and selling price against CAPEX, OPEX, and cost of
        goods sold and released a technical memo, design poster, and abstract
        (all available for me to submit). Presented this research at UC Davis
        engineering college and WON the Biochemical Engineering best Student
        Design Award.
      </div>
      <div>
        2. Designed the LibreTexts sidebar in Typescript/ReactJS, complete with
        site navigation and 20+ features for students, teachers, and developers.
        LibreTexts is a UC Davis startup focused on accessible and equitable
        access to teaching materials. As a student front-end developer, I
        designed to sidebar from its inception as a simple navigation tool in
        jQuery and added numerous features such as a 100+ unit conversion
        calculator, a citation and bookmarking system, and page accessibility
        tools. I started this project in 2019 and completely revamped it from
        native JS/jQuery into a fully modular design with Typescript and
        ReactJS, saving more than 2 seconds off load times (due to no more
        jQuery or large HTML code injections from the JS) and a large amount of
        memory. After completing the final version, the sidebar generated
        1,000,000 site clicks monthly with commendations from other student
        developers and faculty.
      </div>
      <div>
        3. Led the design and implementation of an E. coli green fluorescent
        protein (GFP) fermentation cell culture with an 8-member team. In past
        research, I submitted a technical proposal for glucose inoculation and
        fermentor preparation based on a logistic growth equation and average
        oxygen mass transfer. Performed the fermentation over 8 hours, taking
        standard measurements every hour and performing live troubleshooting of
        the cell culture (primarily related to oxygen level). Presented
        fermentation resultant and analysis showing GFP and biomass yields well
        within research standards to the principal investigator.
      </div>
    </div>
  );
}
