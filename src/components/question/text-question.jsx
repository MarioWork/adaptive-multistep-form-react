import React from "react";
import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";

const TextQuestion = ({ question }) => {
  return <QuestionTitle title={question.title} />;
};

TextQuestion.propTypes = {
  question: QuestionSchema,
};

export default TextQuestion;
