import { useReducer } from "react";
import formSchema from "../schemas/form-prop-types";

const Actions = {
    NEXT: "next",
    PREVIOUS: "previous",
    ANSWER: "Answer",
}

const useMultiStepForm = ({ groups }) => {

    const initialState = { currentIndex: 0, answers: {} };


    const canNext = (max, { currentIndex, answers }) =>
        currentIndex + 1 < max && answers.length == groups[currentIndex].questions.length;

    const canPrevious = (min, currentIndex) => currentIndex - 1 >= min;

    //TODO Cleanup spread objects
    const reducer = (state, { action, payload }) => {
        switch (action) {
            case Actions.NEXT:
                return canNext(groups.length, state) ? { ...state, currentIndex: state.currentIndex + 1 } : state;
            case Actions.PREVIOUS:
                return canPrevious(0, state.currentIndex) ? { ...state, currentIndex: state.currentIndex - 1 } : state;
            case Actions.ANSWER:
                return {
                    ...state,
                    answers: {
                        ...state.answers,
                        ["group" + groups[state.currentIndex].id]: {
                            ...state.answers["group" + groups[state.currentIndex].id],
                            ["question" + payload.questionId]: payload.answer
                        }
                    }
                };
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        group: groups[state.currentIndex],
        onNext: () => dispatch({ action: Actions.NEXT }),
        onAnswer: (questionId, answer) => dispatch({ action: Actions.ANSWER, payload: { questionId, answer } }),
        onPrevious: () => dispatch({ action: Actions.PREVIOUS }),
    };
};

useMultiStepForm.propTypes = formSchema;

export default useMultiStepForm;