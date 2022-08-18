import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiAdobe } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From back-end to front-end development. Not forgetting my experience in using design tools.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobe size="3rem" />
        <ListContainer>
          <ListTitle>Graphic Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Adobe Creative Application
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
