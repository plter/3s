import SSSPlayerError from "./SSSPlayerError";

export default class RemoteStreamNotSetError extends SSSPlayerError {

    constructor() {
        super("Remote stream already attached.");
    }
}