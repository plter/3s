import Constants from "../Constants"

export default class ArrayBufferToVideoElement {

    /**
     *
     * @param targetVideoElement {HTMLVideoElement}
     */
    constructor(targetVideoElement) {
        this._targetVideoElement = targetVideoElement;
        this._bufferedPool = null;
        this._mediaSourceOpened = false;
    }

    addBuffer(arrayBuffer, isFirstBuffer = false) {
        if (!isFirstBuffer) {
            if (this._mediaSourceOpened) {
                this._currentSourceBuffer.appendBuffer(arrayBuffer);
            } else {
                this._bufferedPool.push(arrayBuffer);
            }
        } else {
            this._bufferedPool = [];
            this._mediaSource = new MediaSource();
            this._mediaSourceOpened = false;
            this._bufferedPool.push(arrayBuffer);

            this._mediaSource.addEventListener("sourceopen", function (e) {
                this._currentSourceBuffer = this._mediaSource.addSourceBuffer(Constants.MIME_TYPE);

                while (this._bufferedPool.length) {
                    this._currentSourceBuffer.appendBuffer(this._bufferedPool.pop());
                }
                this._mediaSourceOpened = true;
            }.bind(this));

            if (this._targetVideoElement.src) {
                URL.revokeObjectURL(this._targetVideoElement.src);
            }
            this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);
            this._targetVideoElement.play();//立即播放，在Firefox中等待自动播放时间较久
        }

        let r = this._targetVideoElement.seekable;
        if (r.length) {
            let end = r.end(0);
            if ((end - this._targetVideoElement.currentTime) > (Constants.MEDIA_RECORDER_TIME_SLICE / 1000 * 5)) {
                let dropped = end - this._targetVideoElement.currentTime;
                this._targetVideoElement.currentTime = end;
                console.warn(`Drop ${dropped} seconds`);
            }
        }
    }
}