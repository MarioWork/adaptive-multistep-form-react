import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionInput from "../common/question-input";
import QuestionContainer from "../common/question-container";
import { QuestionType } from "../../../enum/question-types";

const NumberQuestion = ({ question: { id, title } }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={title} />
      <QuestionInput type={QuestionType.NUMBER} questionId={id} />
    </QuestionContainer>
  );
};

NumberQuestion.propTypes = {
  question: QuestionSchema,
};

export default NumberQuestion;
