import React from "react";
import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";
import QuestionInput from "./common/question-input";

const TextQuestion = ({ question }) => {
  return (
    <>
      <QuestionTitle title={question.title} />
      <QuestionInput type={text} />
    </>
  );
};

TextQuestion.propTypes = {
  question: QuestionSchema,
};

export default TextQuestion;
