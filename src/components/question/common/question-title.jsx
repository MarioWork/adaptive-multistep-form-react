import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

const QuestionTitle = ({ title }) => {
  if (title) return <StyledTitle>{title}</StyledTitle>;
};

QuestionTitle.propTypes = {
  title: string,
};

const StyledTitle = styled.h4`
  font-size: 1.1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default QuestionTitle;
