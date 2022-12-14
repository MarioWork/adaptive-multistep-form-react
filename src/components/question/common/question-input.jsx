import { string } from "prop-types";
import styled from "styled-components";

const QuestionInput = ({ type }) => {
  return <StyledInput type={type} />;
};

QuestionInput.propTypes = {
  type: string.isRequired,
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
