import React from "react";
import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";

const NumberQuestion = ({ question }) => {
  return <QuestionTitle title={question.title} />;
};

NumberQuestion.propTypes = {
  question: QuestionSchema,
};

export default NumberQuestion;
