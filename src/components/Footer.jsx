import React from "react";
import Section from "./Section";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. VishuPratap
        </p>

        <ul className="flex flex-wrap gap-5">
            <a
              href={'https://github.com/vishuRizz'}
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
            <FaGithub size={25}/>
            </a>
            <a
              href={'https://www.linkedin.com/in/vishu-pratap-soft-dev/'}
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
            <FaLinkedin size={25}/>
            </a>
            <a
              href={'https://x.com/vishuRizz'}
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
            <FaTwitter size={25}/>
            </a>
            <a
              href={'https://www.instagram.com/vishuiuiuiuiu/'}
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
            <RiInstagramFill size={25}/>
            </a>
         
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
