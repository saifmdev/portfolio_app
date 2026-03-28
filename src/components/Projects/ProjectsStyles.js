import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2.5rem 0 1rem;
`;

export const BlogCard = styled.article`
  border-radius: 28px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  text-align: center;
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  background: rgba(18, 25, 40, 0.95);
  justify-self: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    border-radius: 24px;
  }
`;

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
`;

export const TitleContent = styled.div`
  padding: 1.2rem 1rem 0.5rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #9cc9e3;
  padding: 0.25rem 0;
  margin: 0;
  font-size: ${(props) => (props.title ? "2rem" : "1.5rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? "1.85rem" : "1.35rem")};
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 16px auto 0;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1rem;
  color: #e4e6e7;
  line-height: 1.65;
  text-align: left;
  font-size: 0.98rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem 1rem;
    font-size: 0.95rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.55rem;
  padding: 0.75rem 1rem 0;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  color: #d4c0c0;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  background: #6b3030;
  border-radius: 999px;
  transition: 0.3s ease;

  &:hover {
    background: #801414;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 1rem 1.25rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  padding: 0.5rem;
  border-radius: 14px;
  transition: 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #801414;
  }
`;

export const StyledIcon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;