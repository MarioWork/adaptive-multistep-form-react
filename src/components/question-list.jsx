import React from "react";
import questionSchema from "../schemas/question-prop-types";
import { arrayOf } from "prop-types";
import { QuestionType } from "../enum/question-types";

const questionMap = (question) => {
  const { id, type } = question;
  switch (type) {
    case QuestionType.TEXT:
      return <QuestionComponent key={id} question={question} />;
    case QuestionType.NUMBER:
      return <QuestionComponent key={id} question={question} />;
    case QuestionType.DATE:
      return <QuestionComponent key={id} question={question} />;
  }
};

const QuestionList = ({ questions }) => {
  return questions.map((question) => questionMap(question));
};

QuestionList.propTypes = { questions: arrayOf(questionSchema) };

export default QuestionList;

const QuestionComponent = ({ question }) => {
  const { title } = question;
  return <p>{title}</p>;
};
