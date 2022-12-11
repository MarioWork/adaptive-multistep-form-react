import { useReducer } from "react";
import formSchema from "../schemas/form-prop-types";

const Actions = {
    NEXT: "next",
    PREVIOUS: "previous",
}

const useMultiStepForm = ({ groups }) => {

    const initialState = { currentIndex: 0 }

    const canIncrement = (max, currentIndex) => currentIndex + 1 < max;
    const canDecrement = (min, currentIndex) => currentIndex - 1 >= min;

    const reducer = (state, action) => {
        switch (action) {
            case Actions.NEXT:
                return canIncrement(groups.length, state.currentIndex) ? { ...state, currentIndex: state.currentIndex + 1 } : state;
            case Actions.PREVIOUS:
                return canDecrement(0, state.currentIndex) ? { ...state, currentIndex: state.currentIndex - 1 } : state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        group: groups[state.currentIndex],
        onNext: () => dispatch(Actions.NEXT),
        onPrevious: () => dispatch(Actions.PREVIOUS),
    };
};

useMultiStepForm.propTypes = formSchema;

export default useMultiStepForm;