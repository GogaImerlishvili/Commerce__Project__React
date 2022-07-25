import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2 className="featured-title">featured products</h2>
        <div className="featured-underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f1f5f8;
  .featured {
    /* margin: 4rem auto;
    display: grid; */
    display: flex;
    /* margin-left: 2%; */
    gap: 1rem;
    img {
      height: 225px;
    }
    .btn {
      display: block;
      width: 148px;
      margin: 0 auto;
      text-align: center;
    }
    @media (max-width: 1250px) {
      width: 100%;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    @media (min-width: 576px) {
      .featured {
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      }
    }
  }
`;

export default FeaturedProducts;
