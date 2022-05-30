import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "./DrawSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  height: fit-content;
  width: 100vw;
  /* background-color: var(--black); */
  position: relative;
  /* margin-bottom: 60rem; */
  /* @media (max-width: 480px) {
    margin-bottom: 66rem;
  } */
`;

const Title = styled.h1`
  font-size: var(--fontxxl);
  /* background-color: var(--white); */
  color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid var(--black);
  width: fit-content;

  @media (max-width: 40em) {
    font-size: var(--fontxl);
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* background-color: var(--white); */
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 90%;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
  @media (max-width: 360px) {
    height: auto;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Items = styled.ul`
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }
  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
      /* text-align: right; */
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
      /* text-align: left; */
    }
  }
`;
const Item = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  height: fit-content;
  width: 40%;
  /* background-color: ${(props) => props.theme.text}; */
  border: 3px solid var(--purple);
  padding: 1rem;
  @media (max-width: 48em) {
    width: 70%;
    /* margin-top: 5rem; */
  }
`;
const Box = styled.p`
  height: fit-content;
  background-color: transparent;
  color: var(--black);
  padding: 1rem;

  position: relative;
  border: 1px solid pink;
  @media (max-width: 360px) {
    /* background-color: yellow; */
    padding: 0;
  }
`;
const SubTitle = styled.span`
  display: block;
  font-size: var(--fontxl);
  text-transform: capitalize;
  color: var(--black);
  font-weight: 500;
  @media (max-width: 40em) {
    font-size: var(--fontlg);
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: var(--fontsm);
  text-transform: capitalize;
  color: var(--black);
  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: var(--fontxs);
    padding-left: 1rem;
  }
`;
const RoadMapItems = ({ text, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{text}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};
const RoadMap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
    return () => {};
  }, []);
  return (
    <Section id="roadmap">
      <Title>How We Do It</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItems
            addToRef={addToRefs}
            text="Research"
            subtext="
            We brainstorm the ideas that solve a particular problem faced by target users and collect user requirements by interacting with the stakeholders and the users and document the project requirements.
            
            "
          />
          <RoadMapItems
            addToRef={addToRefs}
            text="Design"
            subtext="
            Before we start coding we make wireframe of the project, help companies choose their colors, logo, design brand guidelines and prepare UI of the project with continuous revision from the client."
          />
          <RoadMapItems
            addToRef={addToRefs}
            text="Build"
            subtext="
            We use modern tools & technologies to develop the project. We make sure that the best development practices are followed during the development and do thorough testing to build the robust product.
            
            "
          />
          <RoadMapItems
            addToRef={addToRefs}
            text="Deliver"
            subtext="
            We make sure to deliver the products that provides excellent user experience. After the system is ready, we deploy the software and train our clients to use the software and provide continuous maintenance support after it."
          />
          <RoadMapItems
            addToRef={addToRefs}
            text="Technical Support"
            subtext="After the launch of project , if any issues occurs, we will always be there to insist for life time"
          />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
