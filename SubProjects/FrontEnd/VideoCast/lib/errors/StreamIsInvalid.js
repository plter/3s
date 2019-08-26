import SSSPlayerError from "./SSSPlayerError";

export default class StreamIsInvalid extends SSSPlayerError {

    constructor() {
        super("Stream is invalid.");
    }
}
