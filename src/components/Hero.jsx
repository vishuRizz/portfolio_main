import { curve, mainImg, myImg, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import {  BottomLine } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null); 

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1">
            Software Development and
            <span className="relative inline-block">
              <span> {"  "}</span> Machine Learning
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Dedicated to creating efficient, dynamic, and user-focused
            applications. With a solid foundation in the MERN stack and Next.js,
            I love crafting responsive websites and complex applications
          </p>
          {/* <Button href="/pricing" white>
            Get started
          </Button> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl md:bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[0.2rem]  rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={window.innerWidth >= 1024 ? mainImg : myImg}
                  className={`${window.innerWidth >= 1024 ? 'w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[7%] md:translate-x-10 rounded-t-xl' : ''} `}
                  width={1024}
                  height={490}
                  alt="AI"
                />

             

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Awesome work"
                  />
                </ScrollParallax> */}
              </div>
            </div>

            {/* <BackgroundCircles /> */}
          </div>

          {/* <CompanyLogos className="relative z-10 hidden mt-20 lg:block" /> */}
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
