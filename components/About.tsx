import React from "react";
import SectionTitle from "./SectionTitle";
import { FaLaptopCode } from "react-icons/fa6";
import Image from "next/image";
import profile from "@/public/assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat{" "}
            <span className="text-textGreen">cupidatat non proident,</span> sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaLaptopCode />
              </span>
              JavaScript (ES6+)
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
