import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionInput from "../common/question-input";
import QuestionContainer from "../common/question-container";
import { QuestionType } from "../../../enum/question-types";

const DateQuestion = ({ question: { id, title } }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={title} />
      <QuestionInput type={QuestionType.DATE} questionId={id} />
    </QuestionContainer>
  );
};

DateQuestion.propTypes = {
  question: QuestionSchema,
};

export default DateQuestion;
