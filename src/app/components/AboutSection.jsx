'use client';
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import { Disclosure } from '@headlessui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

const Accordion = ({ title, items }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="w-full text-left font-semibold text-white border-b border-gray-600 py-2 transition-all">
          {title}
        </Disclosure.Button>
        <Disclosure.Panel className="pl-4 pt-2">
          <ul className="list-disc space-y-1 text-gray-300 text-sm">
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
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
        <li>BSc (Hons) in IT Specialized in Software Engineering, SLIIT – 2021–2025</li>
        <li>HND in Information Technology, SLIIT – 2021–2023</li>
      </ul>
    ),
  },
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="space-y-4">
        <Accordion
          title="Programming Languages"
          items={['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'PHP (OOP)', 'Kotlin', 'C++']}
        />
        <Accordion
          title="Frameworks & Libraries"
          items={['React.js / Redux', 'Node.js / Express', 'Spring Boot', 'ASP.NET', 'Android Studio (Kotlin)', 'OpenCV', 'Bootstrap / Tailwind CSS']}
        />
        <Accordion
          title="Databases & Cloud"
          items={['PostgreSQL / MySQL / MongoDB', 'Sequelize / Mongoose', 'Microsoft Azure', 'CI/CD & Kubernetes', 'Linux VPS Deployment']}
        />
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('education');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <motion.section
      id="about"
      className="text-white py-16 px-6 sm:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
        {/* Model or image */}
        <motion.div
          className="w-full xl:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/assets/me.png"
            alt="My image"
            width={300}
            height={450}
            className="rounded-2xl object-cover shadow-xl"
          />
        </motion.div>

        {/* Text section */}
        <div className="w-full xl:w-1/2 text-left">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm Shandeep Jayapalan, a full-stack developer specializing in modern web and mobile applications,
            cloud deployment, and AI-powered tools. With hands-on experience across JavaScript, React, Node.js,
            Spring Boot, Azure, and more, I build scalable, secure systems end-to-end.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {TAB_DATA.map(({ id, title }) => (
              <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                {title}
              </TabButton>
            ))}
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
