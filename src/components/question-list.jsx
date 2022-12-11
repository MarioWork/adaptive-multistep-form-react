import React from "react";
import questionSchema from "../schemas/question-prop-types";
import { arrayOf } from "prop-types";
import { QuestionType } from "../enum/question-types";

const questionMap = ({ id, type, title }) => {
  switch (type) {
    case QuestionType.TEXT:
      return <QuestionComponent key={id} text={title} />;
    case QuestionType.NUMBER:
      return <QuestionComponent key={id} text={title} />;
    case QuestionType.DATE:
      return <QuestionComponent key={idx} text={title} />;
  }
};

const QuestionList = ({ questions }) => {
  return questions.map((question) => questionMap(question));
};

QuestionList.propTypes = { questions: arrayOf(questionSchema) };

export default QuestionList;

const QuestionComponent = ({ text }) => {
  return <p>{text}</p>;
};
