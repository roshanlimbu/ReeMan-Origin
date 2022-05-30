import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from "./Minus";
import { Plus } from "./Plus";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid var(--carouselColor);
  margin: 3rem 0;
  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;
const Title = styled.div`
  font-size: var(--fontsm);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: var(--carouselColor);
  font-size: var(--fontsm);
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Indicator = styled.span`
  font-size: var(--fontxxl);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: var(--carouselColor);
  }
  @media (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
