import React from "react";
import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";
import Button from "../../common/button";
import styled from "styled-components";

const BooleanQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={question.title} />
      <StyledButtonContainer>
        <Button text="yes" onClick={() => {}} size="100px" />
        <Button text="no" onClick={() => {}} size="100px" />
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
