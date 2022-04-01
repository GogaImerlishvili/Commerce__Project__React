import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>Checkout Here</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;
export default CheckoutPage;
