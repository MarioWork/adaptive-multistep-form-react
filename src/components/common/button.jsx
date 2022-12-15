import React from "react";
import { string, func } from "prop-types";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

Button.propTypes = { text: string.isRequired, onClick: func.isRequired };

export default Button;

const StyledButton = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 25px;
  background-color: #c69749;
  color: white;
  font-size: 1em;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
