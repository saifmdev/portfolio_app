import React from "react";
import { DiDatabase, DiPython } from "react-icons/di";
import { GoGraph } from "react-icons/go"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ExternalLinks,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in both data analysis and web
      development. My focus is on analysing data sets, running
      machine learning algorithms and generating visual interpretations.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            <ExternalLinks>Ignition (HMI/SCADA)</ExternalLinks>
            <ExternalLinks>Python</ExternalLinks>
            <ExternalLinks>SQL</ExternalLinks>
            <ExternalLinks>JavaScript</ExternalLinks>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases & Cloud Services</ListTitle>
          <ListParagraph>
            <ExternalLinks>AWS</ExternalLinks>
            <ExternalLinks>GCP</ExternalLinks>
            <ExternalLinks>MySQL</ExternalLinks>
            <ExternalLinks>MongoDB</ExternalLinks>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GoGraph size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            <ExternalLinks>Tableau</ExternalLinks>
            <ExternalLinks>PowerBI</ExternalLinks>
            <ExternalLinks>Matplotlib</ExternalLinks>
            <ExternalLinks>ggplot2</ExternalLinks>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />

  </Section>
);

export default Technologies;
