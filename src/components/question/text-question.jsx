import QuestionSchema from "../../schemas/question-prop-types";
import QuestionTitle from "./common/question-title";
import QuestionInput from "./common/question-input";
import { QuestionType } from "../../enum/question-types";
import styled from "styled-components";

const TextQuestion = ({ question }) => {
  return (
    <StyledQuestionContainer>
      <QuestionTitle title={question.title} />
      <QuestionInput type={QuestionType.TEXT} />
    </StyledQuestionContainer>
  );
};

TextQuestion.propTypes = {
  question: QuestionSchema,
};

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5em;
  gap: 10px;
`;

export default TextQuestion;
