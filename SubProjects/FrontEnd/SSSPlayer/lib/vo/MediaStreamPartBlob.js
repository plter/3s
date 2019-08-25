export default class MediaStreamPartBlob {

    constructor(blob, isFirstPart) {
        this.blob = blob;
        this.isFirstPart = isFirstPart;
    }
}

MediaStreamPartBlob.__pool = [];

/**
 * @param blob {Blob}
 * @param isFirstPart {Boolean}
 * @returns {MediaStreamPartBlob}
 */
MediaStreamPartBlob.get = function (blob, isFirstPart) {
    /**
     * @type {MediaStreamPartBlob}
     */
    let obj = null;
    if (MediaStreamPartBlob.__pool.length) {
        obj = MediaStreamPartBlob.__pool.pop();
        obj.blob = blob;
        obj.isFirstPart = isFirstPart;
    } else {
        obj = new MediaStreamPartBlob(blob, isFirstPart);
    }

    return obj;
};


/**
 * @param blob {MediaStreamPartBlob}
 */
MediaStreamPartBlob.recycle = function (blob) {
    MediaStreamPartBlob.__pool.push(blob);
};