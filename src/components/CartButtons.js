import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartButtons = () => {
  return <Wrapper className="cart-btn-wrapper">Cart Buttons</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
`;
export default CartButtons;
