import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 2.5rem 0 0;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  background: rgba(18, 25, 40, 0.9);
  border-radius: 22px;
  padding: 1.25rem;
  min-height: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 0.5rem;
`;

export const ListParagraph = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
`;

export const ExternalLinks = styled.span`
  display: inline-block;
  color: #d4c0c0;
  font-size: 0.9rem;
  padding: 0.3rem 0.65rem;
  background: #6b3030;
  border-radius: 999px;
  margin: 0.2rem 0.35rem 0.2rem 0;
`;