import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import weather from "@/public/assets/weatherapp.png";
import photographer from "@/public/assets/photographer.png";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things I have built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://weatherapp-obzz58ngc-yohanmayorgas-projects.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={weather}
                  alt="weatherapp"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Weather App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Web application that allows you to check the weather in
                different cities around the world.{" "}
                <span className="text-textGreen">
                  The application uses the query to an API to obtain information
                  in real time.{" "}
                </span>
                It contains information about the current state of the weather
                you select, and the forecast for the next seven days.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/yohanmayorga/weatherapp"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://weatherapp-obzz58ngc-yohanmayorgas-projects.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://photographer-flax.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={photographer}
                  alt="photographer"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Photographer</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Simple website, designed for a person who wants to offer their
                photography services. It is a simple design, adapted to all
                screen formats, dedicated to demonstrating the use of
                technologies such as
                <span className="text-textGreen">
                  HTML, CSS, Javascript, React, Tailwind and Typescript. For its
                  construction, I used resources available on the web such as
                  Tailblocks
                </span>
                , and the official Tailwind documentation.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/yohanmayorga/photographer"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://photographer-flax.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Project three */}
      </div>
    </section>
  );
};

export default Projects;
