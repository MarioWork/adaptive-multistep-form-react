import { useState } from "react";
import { shape, string, number, arrayOf } from "prop-types";


const useMultiStepForm = ({ groups }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = () =>
        setCurrentIndex((index) => (index + 1 < groups.length ? index + 1 : index));

    const onPrevious = () =>
        setCurrentIndex((index) => (index - 1 >= 0 ? index - 1 : index));

    return {
        group: groups[currentIndex],
        onNext,
        onPrevious,
    };
};

useMultiStepForm.propTypes = {
    form: shape({
        id: number,
        title: string,
        groups: arrayOf(shape({
            id: number,
            title: string,
            questions: arrayOf(
                shape({
                    id: number,
                    title: string,
                    type: string
                })
            )
        }))
    })
}

export default useMultiStepForm;