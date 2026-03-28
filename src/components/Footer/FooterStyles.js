import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: min(1040px, calc(100vw - 32px));
  padding: 2rem 0 3rem;
  margin: 2rem auto 0;
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 2rem 0 1.25rem;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.75rem;
`;

export const LinkItem = styled.a`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  word-break: break-word;

  &:hover {
    color: #fff;
    left: 4px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.02em;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;