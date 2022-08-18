import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Full-Stack Web Developer <br />& Graphic Designer
      </SectionTitle>
      <SectionText>
        Hello There! it's me, Randy Brilliant! I have been developing several fully-functional website and helping several brands to tell powerful story.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'}>Let's Collaborate</Button>
    </LeftSection>
  </Section>
);

export default Hero;