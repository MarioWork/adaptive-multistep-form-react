import { useContext, useState } from "react";
import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";
import Button from "../../common/button";
import styled from "styled-components";
import { AnswerContext } from "../../form";
import { QUESTION_PREFIX } from "../../../utils/constants";
import { stringToBool } from "../../../utils/string-to-bool";

const AnswerType = {
  YES: "yes",
  NO: "no",
};

const BooleanQuestion = ({ question: { id, title } }) => {
  const { onAnswer, currentGroupAnswers } = useContext(AnswerContext);
  const currentAnswer =
    currentGroupAnswers != undefined
      ? stringToBool(currentGroupAnswers[QUESTION_PREFIX + id])
      : undefined;

  const [isSelected, setIsSelected] = useState(currentAnswer ?? undefined);
  console.log(isSelected);
  const onClick = ({ target: { value } }) => {
    onAnswer(id, value);
    setIsSelected((prevValue) => !prevValue);
  };

  return (
    <QuestionContainer>
      <QuestionTitle title={title} />
      <StyledButtonContainer>
        <Button
          text={AnswerType.YES}
          onClick={onClick}
          width="100px"
          height="35px"
          isSelected={isSelected === undefined ? false : !isSelected}
        />
        <Button
          text={AnswerType.NO}
          onClick={onClick}
          width="100px"
          height="35px"
          isSelected={isSelected === undefined ? false : isSelected}
        />
      </StyledButtonContainer>
    </QuestionContainer>
  );
};

BooleanQuestion.propTypes = { question: QuestionSchema };

export default BooleanQuestion;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
