import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
      </Wrapper>
      <article>
        <div className="title">
          <h2>Our story</h2>

          <div className="underline"></div>
          <p className="paragraph">
            Goga's company was founded in 1996 and headquartered in Shunde,
            Foshan, Guangdong...Is a Chinese manufacturer of fine furnishings
            fro modern living spaces. Our company designs, produces and
            distributes up-scale sofas. Tables and chairs. We offer highly
            distinctive models from the sophisticated Macchiato, Ronamde, ECO
            collections.{" "}
          </p>
        </div>
      </article>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: #617d98;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
