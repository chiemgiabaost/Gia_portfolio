"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>York University, Ontario</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Full Stack Web Development, Coursera</li>
                <li>React Development, Udemy</li>
                <li>Node.js Development, Udemy</li>
            </ul>
        )
    }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-base md:text-lg">
          I am dedicated and enthusiastic third-year Computer Science student at York University. With a strong foundation in programming and a thirst for knowledge, I'm on a mission to leverage technology to make a positive impact on the world.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
            {" "}
            Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
            {" "}
            Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
            {" "}
            Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {
                TAB_DATA.find((t) => t.id === tab).content
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
