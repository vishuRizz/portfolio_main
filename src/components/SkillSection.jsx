import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const skills = [
  "TypeScript", "Next JS", "React", "JavaScript", "Cloudflare",  
  "Express.js", "NodeJS", "TailwindCSS", "MongoDB", 
  "GitHub", "Python", "Java"
];

const SkillSection = () => {
  return (
    <Section id='skills' crosses>
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <h2 className="mb-4 h2 md:mb-8">
            Skills and My Tech Stack
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 text-center bg-gray-800 rounded-md cursor-pointer">
                {skill}
              </div>
            ))}
          </div>

          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Proficient in making production-grade websites/brands
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul className="absolute inset-0 flex items-center justify-center animate-spin">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                  style={{
                    transform: `rotate(${index * 45}deg) translateY(${window.innerWidth < 640 ? '-2.5rem' : '-5rem'})`,
                    transition: 'transform 0.5s linear'
                  }}
                >
                  <div className="flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillSection;
