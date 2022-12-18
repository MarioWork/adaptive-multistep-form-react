import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionInput from "../common/question-input";
import QuestionContainer from "../common/question-container";

const DateQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={question.title} />
      <QuestionInput type="date" questionId={question.id} />
    </QuestionContainer>
  );
};

DateQuestion.propTypes = {
  question: QuestionSchema,
};

export default DateQuestion;
