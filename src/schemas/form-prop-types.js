import { shape, string, number, arrayOf } from "prop-types";
import questionSchema from "../schemas/question-prop-types";

export default {
    form: shape({
        id: number.isRequired,
        title: string,
        groups: arrayOf(shape({
            id: number.isRequired,
            title: string,
            questions: arrayOf(
                questionSchema
            ).isRequired
        }).isRequired
        ).isRequired
    }).isRequired
};
