import Constants from "../Constants"

export default class ArrayBufferToVideoElement {

    /**
     *
     * @param targetVideoElement {HTMLVideoElement}
     */
    constructor(targetVideoElement) {
        this._targetVideoElement = targetVideoElement;
        this._bufferedPool = [];
        /**
         * @type {SourceBuffer}
         * @private
         */
        this._currentSourceBuffer = null;
        /**
         * @type {MediaSource}
         * @private
         */
        this._mediaSource = null;
    }

    appendBuffer(arrayBuffer, isFirstBuffer = false) {
        if (isFirstBuffer) {
            this._createNewMediaSource();
        }

        this._bufferedPool.push(arrayBuffer);
        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();
    }

    _onMediaSourceOpen(e) {
        this._currentSourceBuffer = this._mediaSource.addSourceBuffer(Constants.MIME_TYPE);
        this._currentSourceBuffer.onupdate = this._onSourceBufferUpdate.bind(this);

        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();
        this._mediaSourceOpened = true;
    }

    _getFirstBufferFromPoolAndAppendItToSourceBuffer() {
        if (this._mediaSourceOpened && this._bufferedPool.length) {
            if (!this._currentSourceBuffer.updating) {
                let first = this._bufferedPool.shift();
                if (this._targetVideoElement.error) {
                    console.warn(this._targetVideoElement.error);
                }
                this._currentSourceBuffer.appendBuffer(first);
            } else {
                console.warn("SourceBuffer if busy now.");
            }
        }
    }

    _onSourceBufferUpdate(e) {
        this._seekToMediaEndIfFallBehind();
        this._getFirstBufferFromPoolAndAppendItToSourceBuffer();//循环读取第一段数据
    }


    /**
     * 为了提高刷新的速度，在每次获取新视频头时创建新 MediaSource 和新 SourceBuffer
     * @private
     */
    _createNewMediaSource() {
        this._bufferedPool.length = 0;
        this._mediaSource = new MediaSource();
        this._mediaSourceOpened = false;

        this._mediaSource.onsourceopen = this._onMediaSourceOpen.bind(this);

        if (this._targetVideoElement.src) {
            URL.revokeObjectURL(this._targetVideoElement.src);
        }
        this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);
        this._targetVideoElement.play();//立即播放，在Firefox中等待自动播放时间较久
    }

    _seekToMediaEndIfFallBehind() {
        let r = this._targetVideoElement.seekable;
        if (r.length) {
            let end = r.end(0);
            if ((end - this._targetVideoElement.currentTime) > (Constants.MEDIA_RECORDER_TIME_SLICE / 1000 * 5)) {
                let skipped = end - this._targetVideoElement.currentTime;
                this._targetVideoElement.currentTime = end;
                console.warn(`Skip ${skipped} seconds`);
            }
        }
    }
}