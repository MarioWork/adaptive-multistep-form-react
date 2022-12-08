import { shape, string, number, arrayOf } from "prop-types";

export default {
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
};
