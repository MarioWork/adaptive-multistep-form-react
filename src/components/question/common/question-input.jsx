import { useContext } from "react";
import { string, number } from "prop-types";
import styled from "styled-components";
import { onAnswerContext } from "../../form";
import { getValueFromObjectWithDynamicKey } from "../../../utils/get-value-from-object-with-dynamic-key";
import { QUESTION_PREFIX } from "../../../utils/constants";

const QuestionInput = ({ type, questionId }) => {
  const { onAnswer, currentGroupAnswers } = useContext(onAnswerContext);
  const currentQuestionKey = QUESTION_PREFIX + questionId;

  return (
    <StyledInput
      type={type}
      onChange={({ target }) => onAnswer(questionId, target.value)}
      value={
        getValueFromObjectWithDynamicKey(
          currentGroupAnswers,
          currentQuestionKey
        ) ?? ""
      }
    />
  );
};

QuestionInput.propTypes = {
  type: string.isRequired,
  questionId: number.isRequired,
};

const StyledInput = styled.input`
  border-radius: 25px;
  padding: 0.75em;
  font-size: 0.9em;
  border: none;
  outline: none;

  &:focus {
    outline: auto;
    outline-color: #c69749;
  }
`;

export default QuestionInput;
