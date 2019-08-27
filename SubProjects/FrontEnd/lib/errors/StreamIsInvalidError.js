import SSSPlayerError from "./SSSPlayerError";

export default class StreamIsInvalidError extends SSSPlayerError {

    constructor() {
        super("Stream is invalid.");
    }
}
