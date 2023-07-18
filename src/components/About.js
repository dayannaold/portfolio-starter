import React from "react";
//countup
import CountUp from "react-countup/build/CountUp";
//intersection observer
import { useInView } from "framer-motion";
//motion
import{motion} from "framer-motion";
//variant
import {fadeIn} from "../variants.js";
import { InView } from "react-intersection-observer";

const About = () => {
  const [ref, useInView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
    <div className="container mx-auto">
      <div>
        {/*img*/}
          <div className="flex-1 bg-about bg-container bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"></div>
          {/*text*/}
          <div>
            <h2>About me.</h2>
            <h3> I'm a teacher, a student in transition of career.</h3>
            <p>
              Proident cillum minim labore Lorem sunt minim consequat dolore id. Excepteur sit non cupidatat sunt exercitation dolore ut. Nisi aliquip deserunt elit esse. In eiusmod magna magna enim consequat proident eiusmod quis laborum consequat laborum qui culpa. Magna laborum incididunt cillum amet. Velit ea ut dolore voluptate est non quis officia ad qui culpa deserunt aliqua. Amet ut sit incididunt qui esse cillum dolore et incididunt.
            </p>
            {/*stats*/}
            <div className="flex">
              <div>
                <div className="text-[40pc] font-tertiary text-gradient
                 mb-2">
                  {
                    InView ?
                  <CountUp start={0} end={13} duration={3} /> : 
                  null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;