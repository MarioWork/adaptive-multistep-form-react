import React from "react";
import { node, oneOfType, arrayOf } from "prop-types";
import styled from "styled-components";

const QuestionContainer = ({ children }) => {
  return <StyledQuestionContainer>{children}</StyledQuestionContainer>;
};

QuestionContainer.propTypes = { children: oneOfType([arrayOf(node), node]) };

export default QuestionContainer;

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5em;
  gap: 10px;
`;
