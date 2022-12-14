import { shape, string, number, arrayOf } from "prop-types";
import groupSchema from "../schemas/group-prop-types";

export default shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string,
    groups: arrayOf(groupSchema
    ).isRequired
}).isRequired

