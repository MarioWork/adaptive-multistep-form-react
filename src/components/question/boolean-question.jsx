import React from "react";
import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";

const BooleanQuestion = ({ question }) => {
  return <QuestionTitle text={question.title} />;
};

BooleanQuestion.propTypes = { question: QuestionSchema };

export default BooleanQuestion;
