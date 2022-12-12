import React from "react";
import { string } from "prop-types";

const QuestionTitle = ({ title }) => {
  return <h4>{title}</h4>;
};

QuestionTitle.propTypes = {
  title: string.isRequired,
};

export default QuestionTitle;
