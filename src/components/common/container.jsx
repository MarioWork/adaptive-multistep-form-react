import React from "react";
import { oneOfType, node, arrayOf } from "prop-types";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

export default Container;

const StyledContainer = styled.main`
  width: 500px;
  min-height: 600px;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  padding-top: 2em;
  padding-bottom: 2em;
  border-radius: 25px;
  box-shadow: rgb(153 153 153 / 25%) 10px 0px 70px;
  background: #bebebe;
`;
