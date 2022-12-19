import { useContext } from "react";
import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";
import Button from "../../common/button";
import styled from "styled-components";
import { onAnswerContext } from "../../form";

const AnswerType = {
  YES: "yes",
  NO: "no",
};

const BooleanQuestion = ({ question: { id, title } }) => {
  const { onAnswer } = useContext(onAnswerContext);

  const onClick = ({ target: { value } }) => {
    onAnswer(id, value);
  };

  return (
    <QuestionContainer>
      <QuestionTitle title={title} />
      <StyledButtonContainer>
        <Button
          text={AnswerType.YES}
          onClick={onClick}
          width="100px"
          height="30px"
        />
        <Button
          text={AnswerType.NO}
          onClick={onClick}
          width="100px"
          height="30px"
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
