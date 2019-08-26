import SSSPlayerError from "./SSSPlayerError";

export default class LocalStreamNotSetError extends SSSPlayerError {

    constructor() {
        super("Local stream not set.");
    }
}