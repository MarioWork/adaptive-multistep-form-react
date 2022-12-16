import QuestionSchema from "../../../schemas/question-prop-types";
import QuestionTitle from "../common/question-title";
import QuestionContainer from "../common/question-container";

const NumberQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionTitle title={question.title} />
    </QuestionContainer>
  );
};

NumberQuestion.propTypes = {
  question: QuestionSchema,
};

export default NumberQuestion;
