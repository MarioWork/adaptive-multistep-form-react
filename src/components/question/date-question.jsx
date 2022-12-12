import React from "react";
import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";

const DateQuestion = ({ question }) => {
  return <QuestionTitle title={question.title} />;
};

DateQuestion.propTypes = {
  question: QuestionSchema,
};

export default DateQuestion;
