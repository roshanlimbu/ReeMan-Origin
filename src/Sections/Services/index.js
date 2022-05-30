// This is Services component
import styled from "styled-components";
import Icon1 from "../../assets/website.png";
import Icon2 from "../../assets/app.png";

import Icon3 from "../../assets/graphics.png";
import ITTraining from "../../assets/ITtraining.png";
import TSupport from "../../assets/tsupport.png";

const ServicesContainer = styled.div`
  height: 1000px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;

  /* @media screen and (max-width: 460px) {
    height: 2750px;
  } */
  @media screen and (max-width: 768px) {
    height: 2950px;
  }

  @media screen and (min-width: 768px) {
    height: 1550px;
  }
  @media screen and (min-width: 1000px) {
    height: 1100px;
  }
`;
const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid !important;
  /* display: flex; */
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
const ServicesCard = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;

  height: 28rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  border-bottom: 2px solid var(--white);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: var(--nav2);
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>What We Provide</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="serviceicon1" />
          <ServicesH2>Website Development</ServicesH2>
          <ServicesP>
            Your website is a digital home to your business. We have developed
            websites of several businesses and whether you want to build a
            website for your shop, blog, news-portal, or any other business, we
            can help you with that.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="serviceicon2" />
          <ServicesH2> App Development</ServicesH2>
          <ServicesP>
            More people are using mobile apps because they are just easy to use
            and provide more functionality. And if you have any app idea that
            you want to build but have no any technical knowledge then we can
            help you bring it to live.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="serviceicon3" />
          <ServicesH2>Graphics Design</ServicesH2>
          <ServicesP>
            While a picture may be worth a thousand words, graphic design can be
            worth thousands of dollars in any business because first impression
            matters. We can help you create a professional logo and graphics
            design for your business.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="serviceicon3" />
          <ServicesH2>Content Writing</ServicesH2>
          <ServicesP>
            Do you want to hire freelance content writer or want us to write for
            your site ? Well, we can offer as well as write for you in cheap
            cost with efficient content services. We will provide you SEO
            friendly content from top content writer of the IT community.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ITTraining} alt="serviceicon3" />
          <ServicesH2>IT Training </ServicesH2>
          <ServicesP>
            Are you confused about what to learn in tech or getting started in
            programming?We frequently conduct several high quality practical
            online training sessions on various technology related topics from
            IT experts for both free and paid on user's demand.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={TSupport} alt="serviceicon3" />
          <ServicesH2>Technical Support </ServicesH2>
          <ServicesP>
            Having issue? Not a problem now. We are always here for you , To
            quickly resolve your issue. Our range of cost-effective maintenance
            options include a 24/7 proactive server support.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
