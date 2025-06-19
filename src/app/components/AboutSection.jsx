"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Programming Languages</h3>
          <ul className="list-disc pl-6">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>PHP (OOP)</li>
            <li>Kotlin</li>
            <li>C++</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
          <ul className="list-disc pl-6">
            <li>React.js / Redux</li>
            <li>Node.js / Express</li>
            <li>Spring Boot</li>
            <li>ASP.NET</li>
            <li>Android Studio (Kotlin)</li>
            <li>OpenCV</li>
            <li>Bootstrap / Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Databases & Cloud</h3>
          <ul className="list-disc pl-6">
            <li>PostgreSQL / MySQL / MongoDB</li>
            <li>Sequelize / Mongoose</li>
            <li>Microsoft Azure</li>
            <li>CI/CD & Kubernetes</li>
            <li>Linux VPS Deployment</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-6">
        <li>BSc (Hons) in IT, Software Engineering, SLIIT (GPA: 2.92) – 2021–Present</li>
        <li>HND in Information Technology, Aquinas College, SLIIT – 2021–2023</li>
        <li>Diploma in English (2nd Level) – 2018</li>
        <li>Certificate in Spoken English – 2018</li>
      </ul>
    ),
  },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-6">
//         <li>AWS Certified Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//         <li>Diploma in English (2nd Level) – 2018</li>
//         <li>Certificate in Spoken English – 2018</li>
//       </ul>
//     ),
//   },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 mt-0 gap-8 items-center py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/assets/laptop.jpg" alt="Developer at work" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
