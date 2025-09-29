import { useState, useEffect, useRef } from "react";
import { motion, MotionConfig } from "motion/react";

import SvgIcons from "./SvgIcons.tsx";

const AboutmeSection = () => {
  const hasAlreadyGotYrsInc = useRef(false);
  const [yearsOfExp, setYearsOfExp] = useState<number>(2);

  const variants = {
    hidden: { opacity: 0, y: "4rem" },
    active: { opacity: 1, y: "0rem" }
  };

  const currentYear = new Date().getFullYear();
  useEffect(() => {
    if (hasAlreadyGotYrsInc.current) return;

    const increaseInYrs = currentYear - 2025;

    setYearsOfExp(prev => prev + increaseInYrs);
    hasAlreadyGotYrsInc.current = true;
  }, [currentYear]);

  return (
    <section>
      <MotionConfig transition={{ duration: 1, ease: "easeOut" }}>
        <motion.div
          className="section-headtag"
          variants={variants}
          initial="hidden"
          whileInView="active"
        >
          <h3> About me </h3>

          <SvgIcons type="rightDownArrow" width="30px" height="30px" />
        </motion.div>

        <motion.h1
          className="section-headtitle"
          variants={variants}
          initial="hidden"
          whileInView="active"
        >
          Approach and philosophy
        </motion.h1>
      </MotionConfig>

      <motion.div
        className="about-section-brief"
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{
          opacity: 1,
          x: "0",
          transition: { duration: 1, ease: "easeOut" }
        }}
      >
        <div>
          <img
            src="/illustrations/my-dp.png"
            alt="Adebayo Muis ( Charmingdc )"
          />
        </div>

        <ul>
          <li>
            <strong> 🧑‍💻 Name: </strong>
            Adebayo Muis
          </li>
          <li>
            <strong> 🆔 Alias: </strong> Charmingdc
          </li>
          <li>
            <strong> 🎨 Hobby: </strong>
            Coding, Reading, Drawing
          </li>
          <li>
            <strong> 📅 Experience: </strong>
            {yearsOfExp}+ years
          </li>
          <li>
            <strong> 🚩 Location: </strong>
            Nigeria
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="about-section-info"
        initial={{ opacity: 0, y: "4rem" }}
        whileInView={{
          opacity: 1,
          y: "0",
          transition: { duration: 1, ease: "easeOut" }
        }}
      >
        <p>
          I'm Adebayo Muis, a value-driven web developer passionate about
          turning ideas into meaningful digital experiences. For me, building
          software isn’t just about code; it’s about creating solutions that
          simplify lives, spark connections, and make technology feel more
          human.
        </p>

        <p>
          I care deeply about clarity, usability, and impact. Whether it’s
          designing seamless user flows or refining details behind the scenes, I
          approach every project with curiosity and creativity. My goal is
          always to craft products that are not only functional, but also
          empowering to the people who use them.
        </p>

        <p>
          Guided by a love for learning and constant growth, I embrace
          challenges as opportunities to innovate. Each project I take on is a
          chance to build, to learn, and to contribute something that matters.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutmeSection;
