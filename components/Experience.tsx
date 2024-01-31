import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import FrontEnd from "./works/FrontEnd";
import BackEnd from "./works/BackEnd";
import Seo from "./works/SEO";
import Git from "./works/Git";
import Api from "./works/Api";
import Other from "./works/Other";

const Experience = () => {
  const [workFrontend, setWorkFrontend] = useState(true);
  const [workBackend, setWorkBackend] = useState(false);
  const [workSEO, setWorkSEO] = useState(false);
  const [workGit, setWorkGit] = useState(false);
  const [workApi, setWorkApi] = useState(false);
  const [workOther, setWorkOther] = useState(false);

  const handleFrontend = () => {
    setWorkFrontend(true);
    setWorkBackend(false);
    setWorkSEO(false);
    setWorkGit(false);
    setWorkApi(false);
    setWorkOther(false);
  };

  const handleBackend = () => {
    setWorkFrontend(false);
    setWorkBackend(true);
    setWorkSEO(false);
    setWorkGit(false);
    setWorkApi(false);
    setWorkOther(false);
  };

  const handleSeo = () => {
    setWorkFrontend(false);
    setWorkBackend(false);
    setWorkSEO(true);
    setWorkGit(false);
    setWorkApi(false);
    setWorkOther(false);
  };

  const handleGit = () => {
    setWorkFrontend(false);
    setWorkBackend(false);
    setWorkSEO(false);
    setWorkGit(true);
    setWorkApi(false);
    setWorkOther(false);
  };

  const handleApi = () => {
    setWorkFrontend(false);
    setWorkBackend(false);
    setWorkSEO(false);
    setWorkGit(false);
    setWorkApi(true);
    setWorkOther(false);
  };

  const handleOther = () => {
    setWorkFrontend(false);
    setWorkBackend(false);
    setWorkSEO(false);
    setWorkGit(false);
    setWorkApi(false);
    setWorkOther(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleFrontend}
            className={`${
              workFrontend
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            FrontEnd
          </li>
          <li
            onClick={handleBackend}
            className={`${
              workBackend
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            BackEnd
          </li>
          <li
            onClick={handleSeo}
            className={`${
              workSEO
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            SEO
          </li>
          <li
            onClick={handleGit}
            className={`${
              workGit
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            Git
          </li>
          <li
            onClick={handleApi}
            className={`${
              workApi
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            API
          </li>
          <li
            onClick={handleOther}
            className={`${
              workOther
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pinter duration-300 px-8 font-medium`}
          >
            Other
          </li>
        </ul>
        {workFrontend && <FrontEnd />}
        {workBackend && <BackEnd />}
        {workSEO && <Seo />}
        {workGit && <Git />}
        {workApi && <Api />}
        {workOther && <Other />}
      </div>
    </section>
  );
};

export default Experience;
