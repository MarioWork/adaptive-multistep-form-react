import { shape, string, number, arrayOf } from "prop-types";

export default
    shape({
        id: number.isRequired,
        title: string.isRequired,
        type: string.isRequired
    }).isRequired
