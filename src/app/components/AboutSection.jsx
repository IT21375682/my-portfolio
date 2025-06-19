"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Disclosure } from "@headlessui/react";
import dynamic from 'next/dynamic';

// Dynamically import <model-viewer> client-side only
const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

// ✅ Move this ABOVE TAB_DATA
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

// ✅ Now TAB_DATA can safely use Accordion
const TAB_DATA = [
   {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>BSc (Hons) in IT Specialized in Software Engineering, SLIIT – 2021–2025</li>
        <li>HND in Information Technology, SLIIT – 2021–2023</li>
        {/* <li>Diploma in English (2nd Level) – 2018</li>
        <li>Certificate in Spoken English – 2018</li> */}
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <Accordion title="Programming Languages" items={[
          "JavaScript (ES6+)",
          "TypeScript",
          "Python",
          "Java",
          "PHP (OOP)",
          "Kotlin",
          "C++"
        ]} />

        <Accordion title="Frameworks & Libraries" items={[
          "React.js / Redux",
          "Node.js / Express",
          "Spring Boot",
          "ASP.NET",
          "Android Studio (Kotlin)",
          "OpenCV",
          "Bootstrap / Tailwind CSS"
        ]} />

        <Accordion title="Databases & Cloud" items={[
          "PostgreSQL / MySQL / MongoDB",
          "Sequelize / Mongoose",
          "Microsoft Azure",
          "CI/CD & Kubernetes",
          "Linux VPS Deployment"
        ]} />
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
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <ModelViewer />
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Shandeep Jayapalan, a full-stack developer specializing in modern web and mobile applications, cloud deployment, and AI-powered tools. With hands-on experience across JavaScript, React, Node.js, Spring Boot, Azure, and more, I build scalable, secure systems end-to-end.
          </p>
          <div className="flex space-x-4 mt-8">
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
