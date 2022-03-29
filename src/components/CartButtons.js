import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartButtons = () => {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button className="auth-btn">
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: #102a42;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: -320%;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 15px;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: #ab7a5f;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    color: #102a42;
    letter-spacing: 0.1rem;
    position: absolute;
    right: 10%;
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
