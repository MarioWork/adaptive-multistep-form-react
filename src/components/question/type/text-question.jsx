import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionInput from "../common/question-input";
import { QuestionType } from "../../../enum/question-types";
import QuestionContainer from "../common/question-container";

const TextQuestion = ({ question: { id, title } }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={title} />
      <QuestionInput type={QuestionType.TEXT} questionId={id} />
    </QuestionContainer>
  );
};

TextQuestion.propTypes = {
  question: QuestionSchema,
};

export default TextQuestion;
