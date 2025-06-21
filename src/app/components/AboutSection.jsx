"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Disclosure } from "@headlessui/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

const Accordion = ({ title, items }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="w-full text-left font-semibold text-white border-b border-gray-600 py-2">
          {title}
        </Disclosure.Button>
        <Disclosure.Panel className="pl-4 pt-2">
          <ul className="list-disc space-y-1">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>BSc (Hons) in IT Specialized in Software Engineering, SLIIT – 2021–2025</li>
        <li>HND in Information Technology, SLIIT – 2021–2023</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <Accordion
          title="Programming Languages"
          items={["JavaScript (ES6+)", "TypeScript", "Python", "Java", "PHP (OOP)", "Kotlin", "C++"]}
        />
        <Accordion
          title="Frameworks & Libraries"
          items={["React.js / Redux", "Node.js / Express", "Spring Boot", "ASP.NET", "Android Studio (Kotlin)", "OpenCV", "Bootstrap / Tailwind CSS"]}
        />
        <Accordion
          title="Databases & Cloud"
          items={["PostgreSQL / MySQL / MongoDB", "Sequelize / Mongoose", "Microsoft Azure", "CI/CD & Kubernetes", "Linux VPS Deployment"]}
        />
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white py-16 px-6 sm:px-12" id="about">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
        {/* You can swap this Image with <ModelViewer /> if needed */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <Image
            src="/assets/me.png"
            alt="My image"
            width={300}
            height={400}
            className="rounded-full object-cover"
          />
          {/* <ModelViewer /> */}
        </div>

        <div className="w-full xl:w-1/2 text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-4">
            I'm Shandeep Jayapalan, a full-stack developer specializing in modern web and mobile applications,
            cloud deployment, and AI-powered tools. With hands-on experience across JavaScript, React, Node.js,
            Spring Boot, Azure, and more, I build scalable, secure systems end-to-end.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                {title}
              </TabButton>
            ))}
          </div>

          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
