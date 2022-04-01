import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            China Foshan Commercial Hotel Apartment Modern Design Custom Made
            Furniture
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text} </p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: #453227;
  }
  padding: 5rem 0;
  background: #eaded7;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: #795744;
  }
  .services-center {
    margin-top: 4rem;
    /* display: grid;
    gap: 2.5rem; */
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 12px;
    gap: 2.5rem;
  }
  .service {
    background: #c5a491;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 0.25rem;
    width: 400px;
    p {
      color: #5f4435;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #eaded7;
    color: #453227;
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360x, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
