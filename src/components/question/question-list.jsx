import React from "react";
import questionSchema from "../../schemas/question-prop-types";
import { arrayOf } from "prop-types";
import { QuestionType } from "../../enum/question-types";
import TextQuestion from "./text-question";
import NumberQuestion from "./number-question";
import DateQuestion from "./date-question";

const questionMap = (question) => {
  const { id, type } = question;
  switch (type) {
    case QuestionType.TEXT:
      return <TextQuestion key={id} question={question} />;
    case QuestionType.NUMBER:
      return <NumberQuestion key={id} question={question} />;
    case QuestionType.DATE:
      return <DateQuestion key={id} question={question} />;
  }
};

const QuestionList = ({ questions }) => {
  return questions.map((question) => questionMap(question));
};

QuestionList.propTypes = { questions: arrayOf(questionSchema) };

export default QuestionList;
