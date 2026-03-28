import styled from "styled-components";
import { Section } from "../../styles/GlobalComponents";

export const LeftSection = styled.div`
  width: 100%;
  max-width: 640px;
  z-index: 2;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
`;

export const HeroVisual = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 0.8;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    margin: 2rem auto 0;
    opacity: 0.35;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
    inset: 0;
    max-width: none;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.12;
    pointer-events: none;
    z-index: 0;
  }
`;

export const HeroContainer = styled(Section)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 1.5rem;
  }
`;