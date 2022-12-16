import React from "react";
import { arrayOf } from "prop-types";

import { QuestionType } from "../../enum/question-types";
import questionSchema from "../../schemas/question-prop-types";

import TextQuestion from "./type/text-question";
import NumberQuestion from "./type/number-question";
import DateQuestion from "./type/date-question";
import BooleanQuestion from "./type/boolean-question";

const questionMap = (question) => {
  const { id, type } = question;
  switch (type) {
    case QuestionType.TEXT:
      return <TextQuestion key={id} question={question} />;
    case QuestionType.NUMBER:
      return <NumberQuestion key={id} question={question} />;
    case QuestionType.DATE:
      return <DateQuestion key={id} question={question} />;
    case QuestionType.BOOLEAN:
      return <BooleanQuestion key={id} question={question} />;
  }
};

const QuestionList = ({ questions }) => {
  return questions.map((question) => questionMap(question));
};

QuestionList.propTypes = { questions: arrayOf(questionSchema) };

export default QuestionList;
