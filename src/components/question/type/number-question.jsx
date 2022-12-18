import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionInput from "../common/question-input";
import QuestionContainer from "../common/question-container";
import { QuestionType } from "../../../enum/question-types";

const NumberQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={question.title} />
      <QuestionInput type={QuestionType.NUMBER} questionId={question.id} />
    </QuestionContainer>
  );
};

NumberQuestion.propTypes = {
  question: QuestionSchema,
};

export default NumberQuestion;
