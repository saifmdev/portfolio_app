import React from "react";
import { TypeAnimation } from "react-type-animation";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";

import {
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { HeroContainer, LeftSection, HeroVisual } from "./HeroStyles";

const Hero = () => (
  <HeroContainer row nopadding>
    <LeftSection>
      <SectionTitle main>
        <TypeAnimation
          sequence={[
            "Hi there,\nMy name is Saif",
            400
          ]}
          speed={30}
          wrapper="span"
          repeat={0}
          style={{ whiteSpace: "pre-line", display: "inline-block" }}
        />
      </SectionTitle>

      <SectionText>
        <TypeAnimation
          sequence={[
            2000,
            "\nAspiring Electrical Apprentice with a strong drive to build a career in industrial systems, PLCs, and automation. \n\nPassionate about doing hands-on work, troubleshooting, and understanding how complex electrical and control systems operate in real-world environments. ",
          ]}
          speed={80}
          wrapper="span"
          repeat={0}
          style={{ whiteSpace: "pre-line", display: "inline-block" }}
        />
      </SectionText>
    </LeftSection>

    <HeroVisual>
      <BackgroundAnimation />
    </HeroVisual>
  </HeroContainer>
);

export default Hero;