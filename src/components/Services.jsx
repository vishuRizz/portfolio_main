import Section from "./Section";
import Heading from "./Heading";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { service2, service3, check, myLaptopPic, my_side, myPortrait } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const socialIcons = [
  { icon: <FaGithub size={40} />, url: "https://github.com/vishuRizz" },
  {
    icon: <FaLinkedin size={40} />,
    url: "https://www.linkedin.com/in/vishu-pratap-soft-dev/",
  },
  { icon: <FaTwitter size={40} />, url: "https://x.com/vishuRizz" },
  {
    icon: <RiInstagramFill size={40} />,
    url: "https://www.instagram.com/vishuiuiuiuiu/",
  },
  { icon: <BsWhatsapp size={40} />, url: "https://wa.me/918433492579" },
];

const Services = () => {
  return (
    <Section>
      <div className="container">
        <Heading
          title="Open to Freelance"
          text="Currently interested in building SaaS"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full max-w-[100%] h-auto object-contain"
                width={800}
                alt="Smartest AI"
                height={730}
                src={myLaptopPic}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="mb-4 text-black h4">ME</h4>
              {/* <p className="body-2 mb-[3rem] font-bold text-black">
                hehe will ofc write here something about me, for now just filling some shit 
              </p> */}
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="contact" className="relative grid gap-5 z-1 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={myPortrait}
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="mb-4 h4">Hey!</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  something to be written here! dk what
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 h4">My Socials</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Connect with me if you want to discuss tech, or maybe work
                  together on something cool!
                </p>

                <ul className="flex items-center justify-between">
                  {socialIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center cursor-pointer`}
                    >
                      <div className={`hover:scale-110`}>
                        <a href={item.url}> {item.icon} </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="object-cover w-full h-full"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* <VideoChatMessage /> */}
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
