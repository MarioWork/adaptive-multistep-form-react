import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";

const DateQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={question.title} />
    </QuestionContainer>
  );
};

DateQuestion.propTypes = {
  question: QuestionSchema,
};

export default DateQuestion;
