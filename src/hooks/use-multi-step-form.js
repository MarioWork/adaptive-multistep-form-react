import { useReducer } from "react";
import formSchema from "../schemas/form-prop-types";
import { GROUP_PREFIX, QUESTION_PREFIX } from "../utils/constants";

const Actions = {
    NEXT: "next",
    PREVIOUS: "previous",
    ANSWER: "Answer",
}

const useMultiStepForm = ({ groups }) => {

    const initialState = { currentIndex: 0, answers: {} };

    const canNext = ({ currentIndex, answers }) => {
        const currentGroupKey = GROUP_PREFIX + groups[currentIndex].id;
        const currentGroupAnswersCount = Object.keys(answers[currentGroupKey] ?? {})?.length;
        const currentGroupQuestionsCount = groups[currentIndex].questions.length;
        return currentIndex + 1 < groups.length && currentGroupAnswersCount == currentGroupQuestionsCount;
    };

    const canPrevious = (currentIndex) => currentIndex - 1 >= 0;

    const updateStateWithNewAnswer = (state, { questionId, answer }) => {
        const currentGroupKey = GROUP_PREFIX + groups[state.currentIndex].id;
        const currentQuestionKey = QUESTION_PREFIX + questionId;
        return {
            ...state,
            answers: {
                ...state.answers,
                [currentGroupKey]: {
                    ...state.answers[currentGroupKey],
                    [currentQuestionKey]: answer
                }
            }
        };
    };

    const reducer = (state, { action, payload }) => {
        switch (action) {
            case Actions.NEXT:
                return canNext(state) ? { ...state, currentIndex: state.currentIndex + 1 } : state;
            case Actions.PREVIOUS:
                return canPrevious(state.currentIndex) ? { ...state, currentIndex: state.currentIndex - 1 } : state;
            case Actions.ANSWER:
                return updateStateWithNewAnswer(state, payload);
        }
    }

    const [{ answers, currentIndex }, dispatch] = useReducer(reducer, initialState);

    return {
        group: groups[currentIndex],
        onNext: () => dispatch({ action: Actions.NEXT }),
        onAnswer: (questionId, answer) => dispatch({ action: Actions.ANSWER, payload: { questionId, answer } }),
        onPrevious: () => dispatch({ action: Actions.PREVIOUS }),
        currentGroupAnswers: answers[GROUP_PREFIX + groups[currentIndex].id],
        isLastGroup: currentIndex == groups.length - 1,
        submitAnswers: () => { console.log(answers); return answers; },
        canNext: canNext({ currentIndex, answers })
    };
};

useMultiStepForm.propTypes = formSchema;

export default useMultiStepForm;