import styled from "styled-components";

export const Container = styled.div`
  width: min(1040px, calc(100vw - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 0 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 24px);
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const Div2 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const NavLink = styled.span`
  font-size: 1.15rem;
  line-height: 1.4;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s ease;
  padding: 0.35rem 0.7rem;
  display: inline-block;

  &:hover {
    background-color: #212d45;
    color: #fff;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1 rem;
    padding: 0.3rem 0.55rem;
  }
`;

export const SocialIcons = styled.a`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;

  &:hover {
    background-color: #212d45;
    transform: scale(1.08);
    cursor: pointer;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;