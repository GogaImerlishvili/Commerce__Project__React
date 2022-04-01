import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Make use of a perfect mix of the latest design technologies and
            style in Interior & Furniture Newsletter Templates. Choose
            impressive visual presentation.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mayvdljn"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  /* margin-top: 12%; */
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    color: #617d98;
  }
  .contact-form {
    width: 100vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid black;
  }

  .form-input {
    border-right: none;
    color: #324d67;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    /* width: 350px; */
  }
  .submit-btn {
    background: #ab7a5f;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color: black;
  }

  .submit-btn:hover {
    color: white;
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;
export default Contact;
