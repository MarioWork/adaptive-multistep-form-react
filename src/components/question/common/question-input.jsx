import { useContext } from "react";
import { string, number } from "prop-types";
import styled from "styled-components";
import { onAnswerContext } from "../../form";

const QuestionInput = ({ type, questionId }) => {
  const { onAnswer } = useContext(onAnswerContext);

  //TODO use value from answers state
  return (
    <StyledInput
      type={type}
      onChange={({ target }) => onAnswer(questionId, target.value)}
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
