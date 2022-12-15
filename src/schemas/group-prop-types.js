import { shape, string, number, arrayOf } from "prop-types";
import questionSchema from "./question-prop-types";

export default shape({
    id: number.isRequired,
    title: string,
    description: string,
    questions: arrayOf(
        questionSchema
    ).isRequired
}).isRequired