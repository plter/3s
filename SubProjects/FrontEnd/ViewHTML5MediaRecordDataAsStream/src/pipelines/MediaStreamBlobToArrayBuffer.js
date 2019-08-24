import MediaStreamPartBlob from "../vo/MediaStreamPartBlob"

export default class MediaStreamBlobToArrayBuffer {
    constructor(targetCallback) {
        this._fifo = [];
        this._callback = targetCallback;
        this._reader = new FileReader();
        this._reader.onload = this._dataTranscoded.bind(this);
        this._currentReadingMediaStreamPartBlob = null;
    }

    /**
     *
     * @param blob {Blob}
     * @param isFirstPart {Boolean} 是否为媒体流的第一段
     */
    appendBlob(blob, isFirstPart) {
        this._fifo.push(MediaStreamPartBlob.get(blob, isFirstPart));
        if (this._reader.readyState != 1) {
            this._transcodeFirstBlob();
        } else {
            console.log("FileReader is loading");
        }
    }

    _transcodeFirstBlob() {
        if (this._fifo.length) {
            this._currentReadingMediaStreamPartBlob = this._fifo.shift();
            this._reader.readAsArrayBuffer(this._currentReadingMediaStreamPartBlob.blob);
        }
    }

    _dataTranscoded() {
        if (this._callback) {
            this._callback(this._reader.result, this._currentReadingMediaStreamPartBlob.isFirstPart);
            MediaStreamPartBlob.recycle(this._currentReadingMediaStreamPartBlob);

            this._transcodeFirstBlob();
        }
    }
}