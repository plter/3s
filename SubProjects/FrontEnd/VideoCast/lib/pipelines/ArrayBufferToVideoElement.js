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

    _renewPlayerURL() {
        if (this._targetVideoElement.src) {
            URL.revokeObjectURL(this._targetVideoElement.src);
        }
        this._targetVideoElement.src = URL.createObjectURL(this._mediaSource);
        this._targetVideoElement.play();//立即播放，该函数会触发 sourceopen 事件
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
                console.warn("SourceBuffer is busy now.");
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
        this._renewPlayerURL();
    }

    _seekToMediaEndIfFallBehind() {
        let r = this._targetVideoElement.seekable;
        if (r.length) {
            let end = r.end(0);
            if ((end - this._targetVideoElement.currentTime) > Constants.MAX_SKIP_TIME) {
                let skipped = end - this._targetVideoElement.currentTime;
                this._targetVideoElement.currentTime = end;
                console.warn(`Skip ${skipped} seconds`);
            }
        }
    }
}