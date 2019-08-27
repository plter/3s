import SSSPlayerError from "./SSSPlayerError";

export default class MediaSourceNotReadyError extends SSSPlayerError {

    constructor() {
        super("Media source not ready, please call async function ArrayBufferToVideoElement.createMediaSource first");
    }
}