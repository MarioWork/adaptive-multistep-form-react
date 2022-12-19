import { useContext, useState } from "react";
import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";
import Button from "../../common/button";
import styled from "styled-components";
import { AnswerContext } from "../../form";

const AnswerType = {
  YES: "yes",
  NO: "no",
};

const BooleanQuestion = ({ question: { id, title } }) => {
  const [isSelected, setIsSelected] = useState();

  const { onAnswer } = useContext(AnswerContext);

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
          isSelected={isSelected}
        />
        <Button
          text={AnswerType.NO}
          onClick={onClick}
          width="100px"
          height="35px"
          isSelected={!isSelected}
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
