import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

const QuestionTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

QuestionTitle.propTypes = {
  title: string.isRequired,
};

const StyledTitle = styled.h4`
  font-size: 1.1em;
  max-lines: 2;
  text-overflow: ellipsis;
`;

export default QuestionTitle;
