import { shape, string, number, arrayOf } from "prop-types";

export default
    shape({
        id: number.isRequired,
        title: string,
        description: string,
        type: string.isRequired
    }).isRequired
