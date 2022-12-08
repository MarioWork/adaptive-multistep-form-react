import { shape, string, number, arrayOf } from "prop-types";

export default {
    form: shape({
        id: number.isRequired,
        title: string,
        groups: arrayOf(shape({
            id: number.isRequired,
            title: string,
            questions: arrayOf(
                shape({
                    id: number.isRequired,
                    title: string.isRequired,
                    type: string.isRequired
                }).isRequired
            ).isRequired
        }).isRequired
        ).isRequired
    }).isRequired
};
